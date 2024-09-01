import { get, writable } from "svelte/store";
import { BUILDINGS } from "../enums/buildings.enum";
import { Zum } from "../types/Zum";

export type SelectionToolbarBuilding = {
  type: "toolbar-building";
  building: BUILDINGS;
};
export type SelectionZum = {
  type: "zum";
  zum: Zum;
};

export type Selection = undefined | SelectionToolbarBuilding | SelectionZum;

const { subscribe, set, update } = writable<Selection>(undefined);

export const selection = {
  subscribe,
  set,
  update,
  toggle(_selection: Selection) {
    if (JSON.stringify(_selection) === JSON.stringify(get(selection))) {
      set(undefined);
    } else {
      set(_selection);
    }
  },
};
