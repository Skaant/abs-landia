import { get } from "svelte/store";
import { BUILDINGS } from "../enums/buildings.enum";
import { RESSOURCES } from "../enums/ressources.enum";
import { globalRessources } from "../stores/global-ressources.store";
import { checkBuildingCost } from "./checkBuildingCost";

describe("checkBuildingCost", () => {
  test("should return true if cost is lower than global ressources", () => {
    globalRessources.reset({
      [RESSOURCES.WA]: { value: 10, maximum: 10, production: 1 },
      [RESSOURCES.JING]: { value: 4, maximum: 10, production: 1 },
    });
    expect(
      checkBuildingCost(BUILDINGS.BALISE_BLIX, get(globalRessources))
    ).toBe(true);
  });
  test("should return false if cost is higher than global ressources", () => {
    globalRessources.reset({
      [RESSOURCES.WA]: { value: 1, maximum: 10, production: 1 },
      [RESSOURCES.JING]: { value: 10, maximum: 10, production: 1 },
    });
    expect(
      checkBuildingCost(BUILDINGS.SILO_A_JING, get(globalRessources))
    ).toBe(false);
  });
});
