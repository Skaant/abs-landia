import { get } from "svelte/store";
import { BUILDINGS } from "../enums/buildings.enum";
import { buildings } from "../stores/buildings.store";
import { getToolbarAvailableBuildings } from "./getToolbarAvailableBuildings";

describe("getToolbarAvailableBuildings", () => {
  test("if no building has been built yet, should return only KOLOS-SEED", () => {
    buildings.set({});
    expect(getToolbarAvailableBuildings(get(buildings))).toEqual([
      BUILDINGS.KOLOS_SEED,
    ]);
  });
  test("if at least one building has been built, should return all building but KOLOS-SEED", () => {
    buildings.set({
      [BUILDINGS.KOLOS_SEED]: {
        id: "0",
        type: BUILDINGS.KOLOS_SEED,
        cellId: "0-0",
      },
    });
    expect(getToolbarAvailableBuildings(get(buildings))).toEqual([
      BUILDINGS.DOM,
      BUILDINGS.CUVE_VORTEX,
      BUILDINGS.SILO_A_JING,
      BUILDINGS.BALISE_HOL_ONG,
      BUILDINGS.BALISE_FRFF,
      BUILDINGS.BALISE_BLIX,
    ]);
  });
});
