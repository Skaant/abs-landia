import { get } from "svelte/store";
import { BUILDINGS_DATA } from "../../data/buildings.data";
import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { BUILDINGS } from "../../enums/buildings.enum";
import { globalRessources } from "../../stores/global-ressources.store";
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
      [RESSOURCES.WA]: 10,
    });
    const _globalRessources = applyGlobalRessourcesCostOrModification(
      {
        globalRessources: get(globalRessources),
      },
      BUILDINGS_DATA[BUILDINGS.BALISE_BLIX].props[
        BUILDING_PROPS.WA_COST
      ] as BuildingPropWaCost
    );
    const { [RESSOURCES.WA]: wa } = _globalRessources.ressources;
    expect(wa).toBe(7);
  });
  test("should apply JING_COST", () => {
    globalRessources.reset({
      [RESSOURCES.JING]: 2,
    });
    const _globalRessources = applyGlobalRessourcesCostOrModification(
      {
        globalRessources: get(globalRessources),
      },
      BUILDINGS_DATA[BUILDINGS.DOM].props[
        BUILDING_PROPS.JING_COST
      ] as BuildingPropJingCost
    );
    const { [RESSOURCES.JING]: jing } = _globalRessources.ressources;
    expect(jing).toBe(1);
  });
  test("should apply WA_MODIFICATION", () => {
    globalRessources.reset({
      [RESSOURCES.WA]: 0,
    });
    const _globalRessources = applyGlobalRessourcesCostOrModification(
      {
        globalRessources: get(globalRessources),
      },
      BUILDINGS_DATA[BUILDINGS.KOLOS_SEED].props[
        BUILDING_PROPS.WA_MODIFICATION
      ] as BuildingPropWaModification
    );
    const { [RESSOURCES.WA]: wa } = _globalRessources.ressources;
    expect(wa).toBe(5);
  });
  test("should apply JING_MODIFICATION", () => {
    globalRessources.reset({
      [RESSOURCES.JING]: 5,
    });
    const _globalRessources = applyGlobalRessourcesCostOrModification(
      {
        globalRessources: get(globalRessources),
      },
      BUILDINGS_DATA[BUILDINGS.KOLOS_SEED].props[
        BUILDING_PROPS.JING_MODIFICATION
      ] as BuildingPropJingModification
    );
    const { [RESSOURCES.JING]: jing } = _globalRessources.ressources;
    expect(jing).toBe(10);
  });
});
