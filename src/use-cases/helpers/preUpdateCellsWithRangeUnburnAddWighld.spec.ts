import { BUILDINGS_DATA } from "../../data/buildings.data";
import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { BUILDINGS } from "../../enums/buildings.enum";
import { generateCells } from "../../helpers/generateCells";
import { BuildingPropRangeUnburnAddWighld } from "../../types/BuildingProps";
import { preUpdateCellsWithRangeUnburnAddWighld } from "./preUpdateCellsWithRangeUnburnAddWighld";

describe("preUpdateCellsWithRangeUnburnAddWighld", () => {
  it("should remove burned and add 2 wighld from cells in range", () => {
    const MOCK_CELLS = generateCells(5, 5);
    MOCK_CELLS["2-2"].burned = true;
    MOCK_CELLS["2-2"].wighld = 0;
    MOCK_CELLS["2-1"].burned = true;
    MOCK_CELLS["2-1"].wighld = 0;
    MOCK_CELLS["3-2"].burned = true;
    MOCK_CELLS["3-2"].wighld = 0;
    MOCK_CELLS["0-2"].wighld = 4;
    MOCK_CELLS["3-1"].wighld = 1;
    const _cells = preUpdateCellsWithRangeUnburnAddWighld(
      MOCK_CELLS,
      MOCK_CELLS["2-2"],
      BUILDINGS_DATA[BUILDINGS.BALISE_BLIX].props[
        BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD
      ] as BuildingPropRangeUnburnAddWighld
    );
    expect(_cells["2-2"].burned).toBe(undefined);
    expect(_cells["2-2"].wighld).toBe(2);
    expect(_cells["2-1"].burned).toBe(undefined);
    expect(_cells["2-1"].wighld).toBe(2);
    expect(_cells["3-2"].burned).toBe(undefined);
    expect(_cells["3-2"].wighld).toBe(2);
    expect(_cells["0-2"].wighld).toBe(4);
    expect(_cells["3-1"].wighld).toBe(1);
  });
});
