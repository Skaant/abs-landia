import { BUILDINGS_DATA } from "../../data/buildings.data";
import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { BUILDINGS } from "../../enums/buildings.enum";
import { generateCells } from "../../helpers/generateCells";
import { BuildingPropRangeConnectivityModification } from "../../types/BuildingProps";
import { preUpdateCellsWithConnectivity } from "./preUpdateCellsWithConnectivity";

describe("preUpdateCellsWithConnectivity", () => {
  test("should update cells with according connectivity", () => {
    const MOCK_CELLS = generateCells(3, 3);
    MOCK_CELLS["1-1"].connectivity = 0.5;
    MOCK_CELLS["0-1"].connectivity = 3;
    MOCK_CELLS["1-2"].connectivity = 0.5;
    MOCK_CELLS["2-1"].connectivity = 0.5;
    MOCK_CELLS["1-0"].connectivity = 1;
    const _cells = preUpdateCellsWithConnectivity(
      MOCK_CELLS,
      MOCK_CELLS["1-1"],
      BUILDINGS_DATA[BUILDINGS.DOM].props[
        BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION
      ] as BuildingPropRangeConnectivityModification
    );
    expect(_cells["1-1"].connectivity).toBe(2);
    expect(_cells["0-1"].connectivity).toBe(4.5);
    expect(_cells["1-2"].connectivity).toBe(2);
    expect(_cells["2-1"].connectivity).toBe(2);
    expect(_cells["1-0"].connectivity).toBe(2.5);
  });
});
