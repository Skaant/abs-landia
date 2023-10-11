import { BUILDINGS_DATA } from "../../data/buildings.data";
import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { BUILDINGS } from "../../enums/buildings.enum";
import { generateCells } from "../../helpers/generateCells";
import { applyCellsRangeDecreasingWighldModification } from "./applyCellsRangeDecreasingWighldModification";

describe("applyCellsRangeDecreasingWighldModification", () => {
  test("should update cells with decreasing effects", () => {
    const MOCK_CELLS = generateCells(3, 3);
    MOCK_CELLS["0-0"].effectiveWighld = 4;
    MOCK_CELLS["0-1"].effectiveWighld = 2;
    MOCK_CELLS["1-1"].effectiveWighld = 2;
    MOCK_CELLS["1-2"].effectiveWighld = 5;
    const { cells } = applyCellsRangeDecreasingWighldModification(
      { cells: MOCK_CELLS },
      BUILDINGS_DATA[BUILDINGS.KOLOS_SEED].props[
        BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION
      ],
      MOCK_CELLS["0-0"]
    );
    if (!cells) throw new Error("cells is undefined");
    expect(cells["0-0"].effectiveWighld).toBe(1);
    expect(cells["0-1"].effectiveWighld).toBe(0);
    expect(cells["1-1"].effectiveWighld).toBe(1);
    expect(cells["1-2"].effectiveWighld).toBe(5);
    expect(cells["1-2"].auraEffects).toBeUndefined();
  });
  test("should apply burn on cell going under wighld 0", () => {
    const MOCK_CELLS = generateCells(2, 2);
    MOCK_CELLS["0-0"].effectiveWighld = 1;
    MOCK_CELLS["0-1"].effectiveWighld = 0;
    MOCK_CELLS["1-0"].effectiveWighld = 2;
    const { cells } = applyCellsRangeDecreasingWighldModification(
      { cells: MOCK_CELLS },
      BUILDINGS_DATA[BUILDINGS.KOLOS_SEED].props[
        BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION
      ],
      MOCK_CELLS["0-0"]
    );
    if (!cells) throw new Error("cells is undefined");
    expect(cells["0-0"].effectiveWighld).toBe(0);
    expect(cells["0-0"].burned).toBeTruthy();
    expect(cells["0-1"].effectiveWighld).toBe(0);
    expect(cells["0-1"].burned).toBeTruthy();
    expect(cells["1-0"].effectiveWighld).toBe(0);
    expect(cells["1-0"].burned).toBeUndefined();
  });
});
