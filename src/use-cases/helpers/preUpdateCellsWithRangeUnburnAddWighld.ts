import { getCellsInRange } from "../../helpers/getCellsInRange";
import { BuildingPropRangeUnburnAddWighld } from "../../types/BuildingProps";
import { Cell, CellsIndex } from "../../types/Cell";

export function preUpdateCellsWithRangeUnburnAddWighld(
  cells: CellsIndex,
  cell: Cell,
  { value, range }: BuildingPropRangeUnburnAddWighld
) {
  getCellsInRange(cells, cell, range)
    .filter((_cell) => _cell.burned)
    .forEach((_cell) => {
      delete _cell.burned;
      _cell.effectiveWighld += value;
      if (_cell.effectiveWighld > 5) {
        _cell.effectiveWighld = 5;
      }
      cells[_cell.id] = _cell;
    });
  return cells;
}
