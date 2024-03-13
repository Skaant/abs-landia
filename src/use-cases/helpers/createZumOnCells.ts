import { get } from "svelte/store";
import { zums } from "../../stores/zums.store";
import { Cell, CellsIndex } from "../../types/Cell";
import { Zum } from "../../types/Zum";
import { BuildingPropZumsModification } from "../../types/BuildingProps";

const AVAILABILITY_ORDER: { x: number; y: number }[] = [
  { x: 0, y: 0 },
  { x: -1, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: -1 },
  { x: 0, y: 1 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: -1, y: 1 },
  { x: 1, y: 1 },
  { x: -2, y: 0 },
  { x: 2, y: 0 },
  { x: 0, y: -2 },
  { x: 0, y: 2 },
];

export function createZumOnCells(
  cells: CellsIndex,
  { x, y }: Cell,
  { value }: BuildingPropZumsModification
): Zum[] {
  const _zums: Zum[] = [];
  const initialId = Object.values(get(zums)).length;
  let a = 0;
  let cellId: string = `${x},${y}`;
  for (let i = 0; i < value; i++) {
    while (!cells[cellId] || cells[cellId].zumId) {
      a++;
      cellId = `${x + AVAILABILITY_ORDER[a].x},${y + AVAILABILITY_ORDER[a].y}`;
      if (a === AVAILABILITY_ORDER.length)
        throw new Error("No more availability for ZUMS");
    }
    _zums.push({
      id: `${initialId + i}`,
      cellId,
      data: 0,
    });
    a++;
    cellId = `${x + AVAILABILITY_ORDER[a].x},${y + AVAILABILITY_ORDER[a].y}`;
  }
  return _zums;
}
