import { cellFactory } from "../factories/cell.factory";
import type { Cell } from "../types/Cell";
import { getRandomWighld } from "./values/getRandomWighld";

/** @deprecated Use generateGrid instead */
export function generateCells(x: number, y: number): { [key: number]: Cell } {
  const cells: { [key: number]: Cell } = {};
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      const id = `${i}-${j}`;
      cells[id] = cellFactory({
        x: i,
        y: j,
        wighld: getRandomWighld(),
      });
    }
  }
  return cells;
}
