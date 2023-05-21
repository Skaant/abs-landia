import { writable } from "svelte/store";
import { BUILDINGS } from "../enums/buildings.enum";

export type SelectionToolbarBuilding = {
  type: "toolbar-building";
  buildingType: BUILDINGS;
};

export const selection = writable<undefined | SelectionToolbarBuilding>(
  undefined
);
