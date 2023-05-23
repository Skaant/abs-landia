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
      _cell.wighld += value;
      if (_cell.wighld > 5) {
        _cell.wighld = 5;
      }
      cells[cell.id] = _cell;
    });
  return cells;
}
