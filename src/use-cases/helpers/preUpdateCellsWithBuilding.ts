import { Building } from "../../types/Building";
import { CellsIndex } from "../../types/Cell";

/**
 * @param CellsIndex The cells to update and return.
 *
 *  *- Why not just the concerned cell ?*
 *
 *  *- To return a `CellIndex` that can be piped
 *    like other `preUpdateCells` helpers.*
 */
export function preUpdateCellsWithBuilding(
  cells: CellsIndex,
  building: Building
): CellsIndex {
  cells[building.cellId].buildingId = building.id;
  return cells;
}
