import { get } from "svelte/store";
import { Cell } from "../../types/Cell";
import { zums } from "../../stores/zums.store";
import { selection } from "../../stores/selection.store";
import { grid } from "../../stores/grid.store";

export function moveZum(zumId: string, cell: Cell) {
  const _cells = get(grid).cells;
  let _zums = get(zums);

  _cells[_zums[zumId].cellId].zumId = undefined;
  _cells[cell.id].zumId = zumId;
  _zums[zumId].cellId = cell.id;

  grid.updateCells(_cells);
  zums.set(_zums);
  selection.set(undefined);
}
