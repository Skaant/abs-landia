import { get, writable } from "svelte/store";
import { BuildingsIndex } from "../types/Building";
import { cells } from "./map.store";
import { Cell } from "../types/Cell";
import { BUILDINGS } from "../enums/buildings.enum";
import { buildingUpdateCells } from "../helpers/buildingUpdateCells";

const { update, subscribe, set } = writable<BuildingsIndex>({});

export const buildings = {
  subscribe,
  set,
  addBuilding(cell: Cell, buildingType: BUILDINGS) {
    const id = Object.values(get(buildings)).length.toString();
    const building = {
      id,
      cellId: cell.id,
      type: buildingType,
    };
    update((_buildings) => ({
      ..._buildings,
      [id]: building,
    }));
    cells.update((cells) =>
      buildingUpdateCells(building, {
        ...cells,
        [cell.id]: {
          ...cell,
          buildingId: id,
        },
      })
    );
  },
  removeBuilding(buildingId: string) {
    update(({ [buildingId]: _, ...b }) => b);
  },
};
