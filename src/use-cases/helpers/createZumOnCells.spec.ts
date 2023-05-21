import { BUILDINGS_DATA } from "../../data/buildings.data";
import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { BUILDINGS } from "../../enums/buildings.enum";
import { generateCells } from "../../helpers/generateCells";
import { BuildingPropZumsModification } from "../../types/BuildingProps";
import { createZumOnCells } from "./createZumOnCells";

describe("createZumOnCells", () => {
  test("should return an array of zums with correct props", () => {
    const MOCK_CELLS = generateCells(3, 3);
    const zums = createZumOnCells(
      MOCK_CELLS,
      MOCK_CELLS["1-1"],
      BUILDINGS_DATA[BUILDINGS.DOM].props[
        BUILDING_PROPS.ZUMS_MODIFICATION
      ] as BuildingPropZumsModification
    );
    expect(zums.length).toBe(3);
    expect(zums[0].id).toBe("0");
    expect(zums[0].cellId).toBe(MOCK_CELLS["1-1"].id);
    expect(zums[1].id).toBe("1");
    expect(zums[1].cellId).toBe(MOCK_CELLS["0-1"].id);
    expect(zums[2].id).toBe("2");
    expect(zums[2].cellId).toBe(MOCK_CELLS["2-1"].id);
  });
  test("should replace zum on alternative cells if in corner", () => {
    const MOCK_CELLS = generateCells(4, 4);
    const zums = createZumOnCells(
      MOCK_CELLS,
      MOCK_CELLS["0-3"],
      BUILDINGS_DATA[BUILDINGS.KOLOS_SEED].props[
        BUILDING_PROPS.ZUMS_MODIFICATION
      ] as BuildingPropZumsModification
    );
    expect(zums.length).toBe(5);
    expect(zums[0].cellId).toBe(MOCK_CELLS["0-3"].id);
    expect(zums[1].cellId).toBe(MOCK_CELLS["1-3"].id);
    expect(zums[2].cellId).toBe(MOCK_CELLS["0-2"].id);
    expect(zums[3].cellId).toBe(MOCK_CELLS["1-2"].id);
    expect(zums[4].cellId).toBe(MOCK_CELLS["2-3"].id);
  });
});
