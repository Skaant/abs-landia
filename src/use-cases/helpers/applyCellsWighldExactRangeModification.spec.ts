import { BUILDINGS_DATA } from "../../data/buildings.data";
import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { BUILDINGS } from "../../enums/buildings.enum";
import { generateCells } from "../../helpers/generateCells";
import { BuildingPropWighldExactRangeModification } from "../../types/BuildingProps";
import { CellsIndex } from "../../types/Cell";
import { applyCellsWighldExactRangeModification } from "./applyCellsWighldExactRangeModification";

describe("applyCellsWighldExactRangeModification", () => {
  test("correctly apply modification", () => {
    const MOCK_CELLS = generateCells(3, 3);
    MOCK_CELLS["1-1"].effectiveWighld = 5;
    MOCK_CELLS["1-2"].effectiveWighld = 5;
    MOCK_CELLS["2-1"].effectiveWighld = 0;
    const cells = applyCellsWighldExactRangeModification(
      {
        cells: MOCK_CELLS,
      },
      BUILDINGS_DATA[BUILDINGS.SILO_A_JING].props[
        BUILDING_PROPS.WIGHLD_EXACT_RANGE_MODIFICATION
      ] as BuildingPropWighldExactRangeModification,
      MOCK_CELLS["1-1"]
    ).cells as CellsIndex;
    expect(cells).toBeDefined();
    expect(cells["1-1"].effectiveWighld).toBe(3);
    expect(cells["1-2"].effectiveWighld).toBe(5);
    expect(cells["2-1"].effectiveWighld).toBe(1);
  });
});
