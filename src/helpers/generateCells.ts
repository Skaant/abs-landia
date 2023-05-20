import { cellFactory } from "../factories/cell.factory";
import type { Cell } from "../types/Cell";

export function generateCells(x: number, y: number): { [key: number]: Cell } {
  const cells: { [key: number]: Cell } = {};
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      const id = `${i}-${j}`;
      const random = Math.floor(Math.random() * 10);
      cells[id] = cellFactory({
        x: i,
        y: j,
        wighld:
          random < 1
            ? 0
            : random < 3
            ? 1
            : random < 6
            ? 2
            : random < 8
            ? 3
            : random < 9
            ? 4
            : 5,
      });
    }
  }
  return cells;
}
