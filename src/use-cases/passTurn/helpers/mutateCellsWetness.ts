import { CellsIndex } from "../../../types/Cell";

export function mutateCellsWetness(cells: CellsIndex): CellsIndex {
  Object.entries(cells).forEach(([id, cell]) => {
    const random = Math.random() * 100;
    if (random < 5) {
      const initialWetnessDiff = cell.effectiveWetness - cell.intrinsicWetness;
      if (random < 2.5) {
        if (cell.intrinsicWetness <= 4) {
          cell.intrinsicWetness += 1;
          cells[id].effectiveWetness =
            cell.intrinsicWetness + initialWetnessDiff;
        }
      } else if (cell.intrinsicWetness >= 1) {
        cell.intrinsicWetness -= 1;
        cells[id].effectiveWetness = cell.intrinsicWetness + initialWetnessDiff;
        if (cell.intrinsicWighld > cell.intrinsicWetness + 2) {
          cell.intrinsicWighld -= 1;
          cells[id].effectiveWighld -= 1;
        }
      }
    }
  });
  return cells;
}
