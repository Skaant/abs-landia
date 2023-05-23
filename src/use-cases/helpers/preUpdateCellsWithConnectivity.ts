import { getCellsInExactRange } from "../../helpers/getCellsInExactRange";
import { getCellsInRange } from "../../helpers/getCellsInRange";
import { BuildingPropRangeConnectivityModification } from "../../types/BuildingProps";
import { Cell, CellsIndex } from "../../types/Cell";

export function preUpdateCellsWithConnectivity(
  cells: CellsIndex,
  cell: Cell,
  { value, range }: BuildingPropRangeConnectivityModification
): CellsIndex {
  getCellsInRange(cells, cell, range).forEach((_cell) => {
    _cell.connectivity += value;
    if (_cell.connectivity < 0) {
      _cell.connectivity = 0;
    }
    cells[cell.id] = _cell;
  });
  return cells;
}
