import { CellsIndex } from "../../types/Cell";
import { Zum } from "../../types/Zum";

export function preUpdateCellsWithZums(
  cells: CellsIndex,
  zums: Zum[]
): CellsIndex {
  zums.forEach((zum) => {
    cells[zum.cellId].zumId = zum.id;
  });
  return cells;
}
