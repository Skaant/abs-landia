import { get } from "svelte/store";
import { Zum } from "../../../types/Zum";
import { grid } from "../../../stores/grid.store";
import { zums } from "../../../stores/zums.store";

export function move(zum: Zum, key: "z" | "q" | "s" | "d") {
  if (!zum.movements) return;

  const _cells = get(grid).cells;
  const zumCell = _cells[zum.cellId];

  const nextCellId =
    key === "z"
      ? `${zumCell.x},${zumCell.y - 1}`
      : key === "q"
      ? `${zumCell.x - 1},${zumCell.y}`
      : key === "s"
      ? `${zumCell.x},${zumCell.y + 1}`
      : `${zumCell.x + 1},${zumCell.y}`;
  if (!_cells[nextCellId] || !_cells[nextCellId].revealed) return;

  let _zums = get(zums);

  _cells[_zums[zum.id].cellId].zumId = undefined;
  _cells[nextCellId].zumId = zum.id;
  _zums[zum.id].cellId = nextCellId;
  _zums[zum.id].movements -= 1;

  grid.updateCells(_cells);
  zums.set(_zums);
}
