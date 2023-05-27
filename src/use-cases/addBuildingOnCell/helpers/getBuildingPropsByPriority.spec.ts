import { BUILDINGS_DATA } from "../../../data/buildings.data";
import { BUILDING_PROPS } from "../../../enums/building-props.enum";
import { BUILDINGS } from "../../../enums/buildings.enum";
import { getBuildingPropsByPriority } from "./getBuildingPropsByPriority";

describe("getBuildingPropsByPriority", () => {
  test("return props in expected order", () => {
    const result = getBuildingPropsByPriority(
      BUILDINGS_DATA[BUILDINGS.KOLOS_SEED].props
    );
    expect(result[0].id).toEqual(BUILDING_PROPS.WA_MAX_MODIFICATION);
    expect(result[1].id).toEqual(BUILDING_PROPS.JING_MAX_MODIFICATION);
    expect(result[2].id).toEqual(BUILDING_PROPS.WA_MODIFICATION);
    expect(result[3].id).toEqual(BUILDING_PROPS.JING_MODIFICATION);
    expect(result[4].id).toEqual(BUILDING_PROPS.ZUMS_MODIFICATION);
  });
});
