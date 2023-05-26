import { get } from "svelte/store";
import { BUILDINGS_DATA } from "../../data/buildings.data";
import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { BUILDINGS } from "../../enums/buildings.enum";
import {
  GlobalRessources,
  globalRessources,
} from "../../stores/global-ressources.store";
import {
  BuildingPropJingProdModification,
  BuildingPropWaProdModification,
} from "../../types/BuildingProps";
import { RESSOURCES } from "../../enums/ressources.enum";
import { applyGlobalRessourcesProdModification } from "./applyGlobalRessourcesProdModification";

describe("applyGlobalRessourcesProdModification", () => {
  test("should apply WA_PROD_MODIFICATION", () => {
    globalRessources.reset({
      [RESSOURCES.WA]: { value: 0, maximum: 20, production: 5 },
    });
    const result = applyGlobalRessourcesProdModification(
      {
        globalRessources: get(globalRessources),
      },
      BUILDINGS_DATA[BUILDINGS.CUVE_VORTEX].props[
        BUILDING_PROPS.WA_PROD_MODIFICATION
      ] as BuildingPropWaProdModification
    );
    const { [RESSOURCES.WA]: wa } = result.globalRessources as GlobalRessources;
    expect(wa.production).toBe(6);
  });
  test("should apply JING_PROD_MODIFICATION", () => {
    globalRessources.reset({
      [RESSOURCES.JING]: { value: 5, maximum: 10, production: 0 },
    });
    const result = applyGlobalRessourcesProdModification(
      {
        globalRessources: get(globalRessources),
      },
      BUILDINGS_DATA[BUILDINGS.SILO_A_JING].props[
        BUILDING_PROPS.JING_PROD_MODIFICATION
      ] as BuildingPropJingProdModification
    );
    const { [RESSOURCES.JING]: jing } =
      result.globalRessources as GlobalRessources;
    expect(jing.production).toBe(1);
  });
});
