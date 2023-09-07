import { getCellsInExactRange } from "../../helpers/getCellsInExactRange";
import { BuildingPropWighldExactRangeModification } from "../../types/BuildingProps";
import { Cell, CellsIndex } from "../../types/Cell";
import { PipeStores } from "../addBuildingOnCell/types/PipeStores";

export function applyCellsWighldExactRangeModification(
  { cells, ...pipeStore }: PipeStores,
  { value, range }: BuildingPropWighldExactRangeModification,
  cell: Cell
): PipeStores {
  const values = Array.isArray(value) ? value : [value];
  const ranges = Array.isArray(range) ? range : [range];
  if (values.length !== ranges.length)
    throw new Error("value and range must have the same length");
  values
    .map((_, i) =>
      getCellsInExactRange(cell, cells as CellsIndex, ranges[i] - 1)
    )
    .forEach((rangeCells, i) => {
      rangeCells
        .filter((cell) => !cell.burned)
        .forEach((cell) => {
          cell.effectiveWighld += values[i];
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
