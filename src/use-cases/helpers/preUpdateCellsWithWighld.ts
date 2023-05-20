import { getCellsInExactRange } from "../../helpers/getCellsInExactRange";
import { Cell, CellsIndex } from "../../types/Cell";

export function preUpdateCellsWithWighld(
  cells: CellsIndex,
  cell: Cell
): CellsIndex {
  [...new Array(3)]
    .map((_, i) => getCellsInExactRange(cell, cells, i))
    .forEach((rangeCells, i) => {
      rangeCells.forEach((cell) => {
        cell.wighld -= 3 - i;
        if (cell.wighld < 0) {
          cell.burned = true;
          cell.wighld = 0;
        }
        cells[cell.id] = cell;
      });
    });
  return cells;
}
