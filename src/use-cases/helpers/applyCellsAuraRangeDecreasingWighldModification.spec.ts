import { BUILDINGS_DATA } from "../../data/buildings.data";
import { AURA_EFFECTS } from "../../enums/aura-effects.enum";
import { AURAS } from "../../enums/auras.enum";
import { BUILDINGS } from "../../enums/buildings.enum";
import { generateCells } from "../../helpers/generateCells";
import { applyCellsAuraRangeDecreasingWighldModification } from "./applyCellsAuraRangeDecreasingWighldModification";

describe("applyCellsAuraRangeDecreasingWighldModification", () => {
  test("should update cells with aura effect and effective wighld value", () => {
    const MOCK_CELLS = generateCells(3, 3);
    MOCK_CELLS["0-0"].effectiveWighld = 4;
    MOCK_CELLS["0-1"].effectiveWighld = 2;
    MOCK_CELLS["1-1"].effectiveWighld = 2;
    const { cells } = applyCellsAuraRangeDecreasingWighldModification(
      { cells: MOCK_CELLS },
      BUILDINGS_DATA[BUILDINGS.DOM].props[
        AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION
      ],
      MOCK_CELLS["0-0"]
    );
    if (!cells) throw new Error("cells is undefined");
    expect(cells["0-0"].effectiveWighld).toBe(2);
    expect(cells["0-0"].auraEffects).toContainEqual({
      id: AURA_EFFECTS.WIGHLD_MODIFICATION,
      value: -2,
    });
    expect(cells["0-1"].effectiveWighld).toBe(1);
    expect(cells["0-1"].auraEffects).toContainEqual({
      id: AURA_EFFECTS.WIGHLD_MODIFICATION,
      value: -1,
    });
    expect(cells["1-1"].effectiveWighld).toBe(2);
    expect(cells["1-1"].auraEffects).toBeUndefined();
  });
  test("should apply burn on cell going under wighld 0", () => {
    const MOCK_CELLS = generateCells(2, 2);
    MOCK_CELLS["0-0"].effectiveWighld = 1;
    MOCK_CELLS["0-1"].effectiveWighld = 0;
    MOCK_CELLS["1-0"].effectiveWighld = 1;
    const { cells } = applyCellsAuraRangeDecreasingWighldModification(
      { cells: MOCK_CELLS },
      BUILDINGS_DATA[BUILDINGS.DOM].props[
        AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION
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
