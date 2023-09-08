import { BUILDINGS_DATA } from "../../data/buildings.data";
import { AURA_EFFECTS } from "../../enums/aura-effects.enum";
import { AURAS } from "../../enums/auras.enum";
import { BUILDINGS } from "../../enums/buildings.enum";
import { generateCells } from "../../helpers/generateCells";
import { AuraRangeConnectivityModification } from "../../types/Auras";
import { CellsIndex } from "../../types/Cell";
import { applyCellsAuraRangeConnectivityModification } from "./applyCellsAuraRangeConnectivityModification";

describe("applyCellsAuraRangeConnectivityModification", () => {
  test("should update cells with aura effect and effective connectivity value", () => {
    const MOCK_CELLS = generateCells(3, 3);
    MOCK_CELLS["0-0"].connectivity = 2;
    MOCK_CELLS["0-1"].connectivity = 0;
    MOCK_CELLS["1-1"].connectivity = 1;
    const cells = applyCellsAuraRangeConnectivityModification(
      {
        cells: MOCK_CELLS,
      },
      BUILDINGS_DATA[BUILDINGS.BALISE_HOL_ONG].props[
        AURAS.RANGE_CONNECTIVITY_MODIFICATION
      ] as AuraRangeConnectivityModification,
      MOCK_CELLS["0-0"]
    ).cells as CellsIndex;
    expect(cells).toBeDefined();
    expect(cells["0-0"].connectivity).toBe(5);
    expect(cells["0-0"].auraEffects).toContainEqual({
      id: AURA_EFFECTS.CONNECTIVITY_MODIFICATION,
      value: 3,
    });
    expect(cells["0-1"].connectivity).toBe(3);
    expect(cells["0-1"].auraEffects).toContainEqual({
      id: AURA_EFFECTS.CONNECTIVITY_MODIFICATION,
      value: 3,
    });
    expect(cells["1-1"].connectivity).toBe(4);
    expect(cells["1-1"].auraEffects).toContainEqual({
      id: AURA_EFFECTS.CONNECTIVITY_MODIFICATION,
      value: 3,
    });
  });
});
