import { BUILDINGS_DATA } from "../../data/buildings.data";
import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { BUILDINGS } from "../../enums/buildings.enum";
import { generateCells } from "../../helpers/generateCells";
import { BuildingPropRangeDecreasingWighldModification } from "../../types/BuildingProps";
import { preUpdateCellsWithRangeDecreasingWighld } from "./preUpdateCellsWithRangeDecreasingWighld";

describe("preUpdateCellsWithRangeDecreasingWighld", () => {
  test("should update cells with wighld and burned", () => {
    const MOCK_CELLS = generateCells(6, 6);
    MOCK_CELLS["3-4"].effectiveWighld = 5;
    MOCK_CELLS["3-3"].effectiveWighld = 5;
    MOCK_CELLS["3-2"].effectiveWighld = 5;
    MOCK_CELLS["4-3"].effectiveWighld = 5;
    MOCK_CELLS["4-2"].effectiveWighld = 5;
    MOCK_CELLS["4-4"].effectiveWighld = 1;
    const _cells = preUpdateCellsWithRangeDecreasingWighld(
      MOCK_CELLS,
      MOCK_CELLS["3-4"],
      BUILDINGS_DATA[BUILDINGS.KOLOS_SEED].props[
        BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION
      ] as BuildingPropRangeDecreasingWighldModification
    );
    expect(_cells["3-4"].effectiveWighld).toBe(2);
    expect(_cells["3-3"].effectiveWighld).toBe(3);
    expect(_cells["3-2"].effectiveWighld).toBe(4);
    expect(_cells["4-3"].effectiveWighld).toBe(4);
    expect(_cells["4-2"].effectiveWighld).toBe(5);
    expect(_cells["4-4"].effectiveWighld).toBe(0);
    expect(_cells["4-4"].burned).toBe(true);
  });
});
