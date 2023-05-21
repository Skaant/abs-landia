import { BUILDINGS_DATA } from "../../data/buildings.data";
import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { BUILDINGS } from "../../enums/buildings.enum";
import { generateCells } from "../../helpers/generateCells";
import { BuildingPropRangeDecreasingWighldModification } from "../../types/BuildingProps";
import { preUpdateCellsWithRangeDecreasingWighld } from "./preUpdateCellsWithRangeDecreasingWighld";

describe("preUpdateCellsWithRangeDecreasingWighld", () => {
  test("should update cells with wighld and burned", () => {
    const MOCK_CELLS = generateCells(6, 6);
    MOCK_CELLS["3-4"].wighld = 5;
    MOCK_CELLS["3-3"].wighld = 5;
    MOCK_CELLS["3-2"].wighld = 5;
    MOCK_CELLS["4-3"].wighld = 5;
    MOCK_CELLS["4-2"].wighld = 5;
    MOCK_CELLS["4-4"].wighld = 1;
    const _cells = preUpdateCellsWithRangeDecreasingWighld(
      MOCK_CELLS,
      MOCK_CELLS["3-4"],
      BUILDINGS_DATA[BUILDINGS.KOLOS_SEED].props[
        BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION
      ] as BuildingPropRangeDecreasingWighldModification
    );
    expect(_cells["3-4"].wighld).toBe(2);
    expect(_cells["3-3"].wighld).toBe(3);
    expect(_cells["3-2"].wighld).toBe(4);
    expect(_cells["4-3"].wighld).toBe(4);
    expect(_cells["4-2"].wighld).toBe(5);
    expect(_cells["4-4"].wighld).toBe(0);
    expect(_cells["4-4"].burned).toBe(true);
  });
});
