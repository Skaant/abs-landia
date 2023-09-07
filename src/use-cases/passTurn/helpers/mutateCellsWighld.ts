import { CellsIndex } from "../../../types/Cell";

export function mutateCellsWighld(cells: CellsIndex): CellsIndex {
  Object.entries(cells).forEach(([id, cell]) => {
    const random = Math.random() * 100;
    if (random < 5 && !cell.burned) {
      const initialWighldDiff = cell.effectiveWighld - cell.intrinsicWighld;
      if (random < 2.5) {
        if (cell.intrinsicWighld <= 4) {
          cell.intrinsicWighld += 1;
        }
      } else if (cell.intrinsicWighld >= 1) {
        cell.intrinsicWighld -= 1;
      }
      cells[id].effectiveWighld = cell.intrinsicWighld + initialWighldDiff;
    }
  });
  return cells;
}
