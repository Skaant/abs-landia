import { getCellsInExactRange } from "../../helpers/getCellsInExactRange";
import { BuildingPropRangeDecreasingWighldModification } from "../../types/BuildingProps";
import { Cell, CellsIndex } from "../../types/Cell";
import { PipeStores } from "../addBuildingOnCell/types/PipeStores";

export function applyCellsRangeDecreasingWighldModification(
  { cells, ...pipeStore }: PipeStores,
  { value, range }: BuildingPropRangeDecreasingWighldModification,
  cell: Cell
): PipeStores {
  if (!cells) throw new Error("cells is undefined");
  [...new Array(range)]
    .map((_, i) => getCellsInExactRange(cell, cells, i))
    .forEach((rangeCells, i) => {
      const _value = (range - i) * value;
      rangeCells
        .filter((cell) => !cell.burned)
        .forEach((cell) => {
          cell.effectiveWighld += _value;
          if (cell.effectiveWighld < 0) {
            cell.burned = true;
            cell.effectiveWighld = 0;
          } else if (cell.effectiveWighld > 5) cell.effectiveWighld = 5;
          (cells as CellsIndex)[cell.id] = cell;
        });
    });
  return {
    cells,
    ...pipeStore,
  };
}
