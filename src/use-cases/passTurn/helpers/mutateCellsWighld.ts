import { CellsIndex } from "../../../types/Cell";

export function mutateCellsWighld(cells: CellsIndex): CellsIndex {
  Object.entries(cells).forEach(([id, cell]) => {
    const random = Math.random() * 100;
    if (random < 7.5 && !cell.burned) {
      const initialWighldDiff = cell.effectiveWighld - cell.intrinsicWighld;
      if (random < 5) {
        if (
          cell.intrinsicWighld <= 4 &&
          cell.intrinsicWetness + 3 > cell.intrinsicWighld
        ) {
          cell.intrinsicWighld += 1;
          cells[id].effectiveWighld = cell.intrinsicWighld + initialWighldDiff;
        }
      } else if (cell.intrinsicWighld >= 1) {
        cell.intrinsicWighld -= 1;
        cells[id].effectiveWighld = cell.intrinsicWighld + initialWighldDiff;
      }
    }
  });
  return cells;
}
