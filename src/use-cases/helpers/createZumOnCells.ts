import { get } from "svelte/store";
import { zums } from "../../stores/zums.store";
import { Cell } from "../../types/Cell";
import { Zum } from "../../types/Zum";

export function createZumOnCells(cells: Cell[]): Zum[] {
  const initialId = Object.values(get(zums)).length;
  return cells.map((cell, i) => ({
    id: `${initialId + i}`,
    cellId: cell.id,
  }));
}
