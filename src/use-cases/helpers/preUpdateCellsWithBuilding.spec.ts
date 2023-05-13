import { get } from "svelte/store";
import { BUILDINGS } from "../../enums/buildings.enum";
import { cells } from "../../stores/map.store";
import { preUpdateCellsWithBuilding } from "./preUpdateCellsWithBuilding";
import { generateCells } from "../../helpers/generateCells";

describe("preUpdateCellsWithBuilding", () => {
  test("should update building cell with building id", () => {
    cells.set(generateCells(4, 4));
    const CELL_ID = "2-2";
    const MOCK_BUILDING = {
      id: "0",
      cellId: CELL_ID,
      type: BUILDINGS.KOLOS_SEED,
    };
    const _cells = preUpdateCellsWithBuilding(get(cells), MOCK_BUILDING);
    expect(_cells[CELL_ID].buildingId).toBe(MOCK_BUILDING.id);
  });
});
