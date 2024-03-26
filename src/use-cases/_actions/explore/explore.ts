import { get } from "svelte/store";
import { Zum } from "../../../types/Zum";
import { grid } from "../../../stores/grid.store";
import { zums } from "../../../stores/zums.store";
import { cellFactory } from "../../../factories/cell.factory";
import { TRIBES } from "../../../enums/tribes.enum";

export function explore(zum: Zum) {
  const _grid = get(grid);
  const _zums = get(zums);

  const { x, y } = _grid.cells[zum.cellId];

  if (x - 1 < _grid.xMin) _grid.xMin -= 1;
  if (x + 1 > _grid.xMax) _grid.xMax += 1;
  if (y - 1 < _grid.yMin) _grid.yMin -= 1;
  if (y + 1 > _grid.yMax) _grid.yMax += 1;

  const CELLS_ID = [
    `${x - 1},${y}`,
    `${x + 1},${y}`,
    `${x},${y - 1}`,
    `${x},${y + 1}`,
  ];

  CELLS_ID.filter((id) => _grid.cells[id] && !_grid.cells[id].revealed).forEach(
    (id) => (_grid.cells[id].revealed = true)
  );

  CELLS_ID.filter((id) => !_grid.cells[id]).forEach((id) => {
    const [_x, _y] = id.split(",");
    const x = parseInt(_x);
    const y = parseInt(_y);
    const cell = cellFactory({ x, y });
    _grid.cells[id] = cell;
  });

  zum.actions -= 1;
  zum.affinities[TRIBES.NOV] = (zum.affinities[TRIBES.NOV] || 0) + 1;

  grid.set(_grid);
  zums.set(_zums);
}
