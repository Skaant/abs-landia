import { get } from "svelte/store";
import { BUILDINGS_DATA } from "../../data/buildings.data";
import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { BUILDINGS } from "../../enums/buildings.enum";
import {
  GlobalRessources,
  globalRessources,
} from "../../stores/global-ressources.store";
import { applyGlobalRessourcesCostOrModification } from "./applyGlobalRessourcesCostOrModification";
import {
  BuildingPropJingCost,
  BuildingPropJingModification,
  BuildingPropWaCost,
  BuildingPropWaModification,
} from "../../types/BuildingProps";
import { RESSOURCES } from "../../enums/ressources.enum";

describe("applyGlobalRessourcesCostOrModification", () => {
  test("should apply WA_COST", () => {
    globalRessources.reset({
      [RESSOURCES.WA]: { value: 10, maximum: 10, evolution: 0 },
    });
    const result = applyGlobalRessourcesCostOrModification(
      {
        globalRessources: get(globalRessources),
      },
      BUILDINGS_DATA[BUILDINGS.BALISE_BLIX].props[
        BUILDING_PROPS.WA_COST
      ] as BuildingPropWaCost
    );
    const { [RESSOURCES.WA]: wa } = result.globalRessources as GlobalRessources;
    expect(wa.value).toBe(7);
  });
  test("should apply JING_COST", () => {
    globalRessources.reset({
      [RESSOURCES.JING]: { value: 2, maximum: 10, evolution: 0 },
    });
    const result = applyGlobalRessourcesCostOrModification(
      {
        globalRessources: get(globalRessources),
      },
      BUILDINGS_DATA[BUILDINGS.DOM].props[
        BUILDING_PROPS.JING_COST
      ] as BuildingPropJingCost
    );
    const { [RESSOURCES.JING]: jing } =
      result.globalRessources as GlobalRessources;
    expect(jing.value).toBe(1);
  });
  test("should apply WA_MODIFICATION", () => {
    globalRessources.reset({
      [RESSOURCES.WA]: { value: 0, maximum: 10, evolution: 0 },
    });
    const result = applyGlobalRessourcesCostOrModification(
      {
        globalRessources: get(globalRessources),
      },
      BUILDINGS_DATA[BUILDINGS.KOLOS_SEED].props[
        BUILDING_PROPS.WA_MODIFICATION
      ] as BuildingPropWaModification
    );
    const { [RESSOURCES.WA]: wa } = result.globalRessources as GlobalRessources;
    expect(wa.value).toBe(5);
  });
  test("should apply JING_MODIFICATION", () => {
    globalRessources.reset({
      [RESSOURCES.JING]: { value: 5, maximum: 10, evolution: 0 },
    });
    const result = applyGlobalRessourcesCostOrModification(
      {
        globalRessources: get(globalRessources),
      },
      BUILDINGS_DATA[BUILDINGS.KOLOS_SEED].props[
        BUILDING_PROPS.JING_MODIFICATION
      ] as BuildingPropJingModification
    );
    const { [RESSOURCES.JING]: jing } =
      result.globalRessources as GlobalRessources;
    expect(jing.value).toBe(10);
  });
});
