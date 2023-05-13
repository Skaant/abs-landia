import { get } from "svelte/store";
import { buildings } from "../../stores/buildings.store";
import { addBuildingToStore } from "./addBuildingToStore";
import { BUILDINGS } from "../../enums/buildings.enum";

describe("addBuildingToStore", () => {
  test("should add building to store", () => {
    buildings.set({});
    const MOCK_BUILDING = {
      id: "0",
      cellId: "6-9",
      type: BUILDINGS.KOLOS_SEED,
    };
    addBuildingToStore(MOCK_BUILDING);
    expect(get(buildings)).toEqual({
      "0": MOCK_BUILDING,
    });
  });
});
