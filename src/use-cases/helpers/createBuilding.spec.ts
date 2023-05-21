import { BUILDINGS } from "../../enums/buildings.enum";
import { buildings } from "../../stores/buildings.store";
import { createBuilding } from "./createBuilding";

describe("createBuilding", () => {
  it("should return a building with correct props", () => {
    buildings.set({});
    const CELL_ID = "3-3";
    const { id, cellId, type } = createBuilding({
      cellId: CELL_ID,
      type: BUILDINGS.KOLOS_SEED,
    });
    expect(id).toBe("0");
    expect(cellId).toBe(CELL_ID);
    expect(type).toBe(BUILDINGS.KOLOS_SEED);
  });
  it("should set an id that match buildings store length", () => {
    buildings.set({
      "0": {
        id: "0",
        cellId: "2-4",
        type: BUILDINGS.KOLOS_SEED,
      },
      "1": {
        id: "0",
        cellId: "3-3",
        type: BUILDINGS.KOLOS_SEED,
      },
      "2": {
        id: "0",
        cellId: "8-5",
        type: BUILDINGS.KOLOS_SEED,
      },
    });
    const { id } = createBuilding({
      cellId: "3-3",
      type: BUILDINGS.KOLOS_SEED,
    });
    expect(id).toBe("3");
  });
});
