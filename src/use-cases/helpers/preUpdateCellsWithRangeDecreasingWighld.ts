import { getCellsInExactRange } from "../../helpers/getCellsInExactRange";
import { BuildingPropRangeDecreasingWighldModification } from "../../types/BuildingProps";
import { Cell, CellsIndex } from "../../types/Cell";

export function preUpdateCellsWithRangeDecreasingWighld(
  cells: CellsIndex,
  cell: Cell,
  { value, range }: BuildingPropRangeDecreasingWighldModification
): CellsIndex {
  [...new Array(range + 1)]
    .map((_, i) => getCellsInExactRange(cell, cells, i))
    .forEach((rangeCells, i) => {
      rangeCells
        .filter((cell) => !cell.burned)
        .forEach((cell) => {
          cell.wighld += (range - i) * value;
          if (cell.wighld < 0) {
            cell.burned = true;
            cell.wighld = 0;
          }
          cells[cell.id] = cell;
        });
    });
  return cells;
}
