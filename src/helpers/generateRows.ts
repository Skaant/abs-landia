import type { CalculatedCellsIndex, Cell } from "../types/Cell";
import type { Row } from "../types/Row";

export function generateRows(
  x: number,
  y: number,
  cells: CalculatedCellsIndex
) {
  const rows: Row[] = [];
  const cellsByXY = Object.values(cells).reduce<{
    [i: number]: { [j: number]: Cell };
  }>((acc, cell) => {
    return {
      ...acc,
      [cell.y]: acc[cell.y]
        ? { ...acc[cell.y], [cell.x]: cell }
        : { [cell.x]: cell },
    };
  }, {});
  for (let i = 0; i < y; i++) {
    rows.push({ cells: [] });
    for (let j = 0; j < x; j++) {
      rows[i].cells.push(cellsByXY[i][j]);
    }
  }
  return rows;
}
