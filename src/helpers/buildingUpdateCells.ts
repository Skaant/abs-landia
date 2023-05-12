import { BUILDINGS } from "../enums/buildings.enum";
import { Building } from "../types/Building";
import { CellsIndex } from "../types/Cell";
import { getCellsInExactRange } from "./getCellsInExactRange";

export function buildingUpdateCells(
  building: Building,
  cells: CellsIndex
): CellsIndex {
  const cell = cells[building.cellId];
  const _cells = { ...cells };
  switch (building.type) {
    case BUILDINGS.KOLOS_SEED:
      [...new Array(3)]
        .map((_, i) => getCellsInExactRange(cell, _cells, i))
        .forEach((rangeCells, i) => {
          rangeCells.forEach((cell) => {
            cell.wighld -= 3 - i;
            if (cell.wighld < 0) {
              cell.burned = true;
            }
            _cells[cell.id] = cell;
          });
        });
      break;
  }
  return _cells;
}
