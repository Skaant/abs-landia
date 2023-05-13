import { Building } from "../../types/Building";
import { CellsIndex } from "../../types/Cell";

export function preUpdateCellsWithBuilding(
  cells: CellsIndex,
  building: Building
): CellsIndex {
  cells[building.cellId].buildingId = building.id;
  return cells;
}
