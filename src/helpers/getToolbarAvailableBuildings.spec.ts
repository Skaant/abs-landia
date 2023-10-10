import { BUILDINGS } from "../enums/buildings.enum";
import { RESEARCHES } from "../enums/researches.enum";
import { getToolbarAvailableBuildings } from "./getToolbarAvailableBuildings";

describe("getToolbarAvailableBuildings", () => {
  test("if no building has been built yet, should return only KOLOS-SEED", () => {
    expect(getToolbarAvailableBuildings({}, {})).toEqual([
      BUILDINGS.KOLOS_SEED,
    ]);
  });
  test("KOLOS-SEED built but setup protocole not researched", () => {
    expect(
      getToolbarAvailableBuildings(
        {
          [BUILDINGS.KOLOS_SEED]: {
            id: "0",
            type: BUILDINGS.KOLOS_SEED,
            cellId: "0-0",
          },
        },
        {}
      )
    ).toEqual([]);
  });
  test("KOLOS-SEED built but setup protocole researched", () => {
    expect(
      getToolbarAvailableBuildings(
        {
          [BUILDINGS.KOLOS_SEED]: {
            id: "0",
            type: BUILDINGS.KOLOS_SEED,
            cellId: "0-0",
          },
        },
        {
          [RESEARCHES.COLONY_SETUP_PROTOCOLE]: true,
        }
      )
    ).toEqual([
      BUILDINGS.DOM,
      BUILDINGS.CUVE_VORTEX,
      BUILDINGS.SILO_A_JING,
      BUILDINGS.BALISE_HOL_ONG,
      BUILDINGS.BALISE_FRFF,
      BUILDINGS.BALISE_BLIX,
    ]);
  });
});
