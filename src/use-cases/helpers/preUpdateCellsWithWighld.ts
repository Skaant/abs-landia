import { getCellsInExactRange } from "../../helpers/getCellsInExactRange";
import { Cell, CellsIndex } from "../../types/Cell";

/** @deprecated Use `preUpdateCellsWithRangeDecreasingWighld` instead */
export function preUpdateCellsWithWighld(
  cells: CellsIndex,
  cell: Cell
): CellsIndex {
  [...new Array(3)]
    .map((_, i) => getCellsInExactRange(cell, cells, i))
    .forEach((rangeCells, i) => {
      rangeCells.forEach((cell) => {
        cell.effectiveWighld -= 3 - i;
        if (cell.effectiveWighld < 0) {
          cell.burned = true;
          cell.effectiveWighld = 0;
        }
        cells[cell.id] = cell;
      });
    });
  return cells;
}
