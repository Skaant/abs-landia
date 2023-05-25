import { get } from "svelte/store";
import { BUILDINGS_DATA } from "../../data/buildings.data";
import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { BUILDINGS } from "../../enums/buildings.enum";
import {
  GlobalRessources,
  globalRessources,
} from "../../stores/global-ressources.store";
import { BuildingPropWaMaxModification } from "../../types/BuildingProps";
import { RESSOURCES } from "../../enums/ressources.enum";
import { applyGlobalRessourcesMaxModification } from "./applyGlobalRessourcesMaxModification";

describe("applyGlobalRessourcesMaxModification", () => {
  test("should apply WA_MAX_MODIFICATION", () => {
    globalRessources.reset({
      [RESSOURCES.WA]: { value: 0, maximum: 0, evolution: 0 },
    });
    const result = applyGlobalRessourcesMaxModification(
      {
        globalRessources: get(globalRessources),
      },
      BUILDINGS_DATA[BUILDINGS.KOLOS_SEED].props[
        BUILDING_PROPS.WA_MAX_MODIFICATION
      ] as BuildingPropWaMaxModification
    );
    const { [RESSOURCES.WA]: wa } = result.globalRessources as GlobalRessources;
    expect(wa.maximum).toBe(5);
  });
  test("should apply JING_MAX_MODIFICATION", () => {
    globalRessources.reset({
      [RESSOURCES.JING]: { value: 5, maximum: 10, evolution: 0 },
    });
    const result = applyGlobalRessourcesMaxModification(
      {
        globalRessources: get(globalRessources),
      },
      BUILDINGS_DATA[BUILDINGS.SILO_A_JING].props[
        BUILDING_PROPS.JING_MAX_MODIFICATION
      ] as BuildingPropWaMaxModification
    );
    const { [RESSOURCES.JING]: jing } =
      result.globalRessources as GlobalRessources;
    expect(jing.maximum).toBe(20);
  });
});
