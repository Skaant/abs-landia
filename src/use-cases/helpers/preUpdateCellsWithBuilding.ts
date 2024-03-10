import { getCellsInExactRange } from "../../helpers/getCellsInExactRange";
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
  const cell = cells[building.cellId];
  cell.buildingId = building.id;
  const adjacentCells = getCellsInExactRange(cell, cells, 1);
  for (const adjacentCell of adjacentCells) {
    if (!adjacentCell.revealed) {
      adjacentCell.revealed = true;
    }
  }
  return cells;
}
