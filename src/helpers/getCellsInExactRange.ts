import type { CalculatedCell, CalculatedCellsIndex, Cell } from "../types/Cell";

export function getCellsInExactRange(
  cell: CalculatedCell,
  cells: CalculatedCellsIndex,
  range: number
) {
  const rangeCells: CalculatedCell[] = [];
  for (let i = cell.x - range; i <= cell.x + range; i++) {
    const diff = Math.abs(cell.x - i);
    if (diff === range) {
      const id = `${i}-${cell.y}`;
      if (cells[id]) rangeCells.push(cells[id]);
    } else {
      const id1 = `${i}-${cell.y - (range - diff)}`;
      if (cells[id1]) rangeCells.push(cells[id1]);
      const id2 = `${i}-${cell.y + (range - diff)}`;
      if (cells[id2]) rangeCells.push(cells[id2]);
    }
  }
  return rangeCells;
}
