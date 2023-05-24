import { Cell, CellsIndex } from "../types/Cell";

export function getCellsInRange(cells: CellsIndex, cell: Cell, range: number) {
  const cellsInRange: Cell[] = [];
  for (let i = cell.x - range + 1; i <= cell.x + range - 1; i++) {
    const diff = Math.abs(cell.x - i);
    if (diff === range - 1) {
      const id = `${i}-${cell.y}`;
      if (cells[id]) cellsInRange.push(cells[id]);
    } else {
      for (
        let j = cell.y - (range - diff) + 1;
        j <= cell.y + (range - diff) - 1;
        j++
      ) {
        const id = `${i}-${j}`;
        if (cells[id]) cellsInRange.push(cells[id]);
      }
    }
  }
  return cellsInRange;
}
