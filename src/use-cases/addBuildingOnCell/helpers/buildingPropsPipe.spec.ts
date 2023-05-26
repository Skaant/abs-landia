import { get } from "svelte/store";
import { BUILDINGS_DATA } from "../../../data/buildings.data";
import { BUILDINGS } from "../../../enums/buildings.enum";
import { globalRessources } from "../../../stores/global-ressources.store";
import { buildingPropsPipe } from "./buildingPropsPipe";
import { RESSOURCES } from "../../../enums/ressources.enum";
import * as _applyMax from "../../helpers/applyGlobalRessourcesMaxModification";
import * as _applyModification from "../../helpers/applyGlobalRessourcesCostOrModification";

describe("buildingPropsPipe", () => {
  test("base wa & jing costs application", () => {
    globalRessources.reset({
      [RESSOURCES.WA]: { value: 4, maximum: 0, production: 0 },
      [RESSOURCES.JING]: { value: 10, maximum: 0, production: 0 },
    });
    const pipeResult = buildingPropsPipe(
      {
        globalRessources: { ...get(globalRessources) },
      },
      BUILDINGS_DATA[BUILDINGS.DOM].props
    );
    expect(pipeResult.globalRessources?.[RESSOURCES.WA].value).toEqual(3);
    expect(pipeResult.globalRessources?.[RESSOURCES.JING].value).toEqual(9);
  });
  describe("props application order", () => {
    test("wa max modification happens before wa modification", () => {
      const applyMaxSpy = jest.spyOn(
        _applyMax,
        "applyGlobalRessourcesMaxModification"
      );
      const applyModificationSpy = jest.spyOn(
        _applyModification,
        "applyGlobalRessourcesCostOrModification"
      );
      globalRessources.reset({
        [RESSOURCES.WA]: { value: 0, maximum: 0, production: 0 },
      });
      const pipeResult = buildingPropsPipe(
        {
          globalRessources: { ...get(globalRessources) },
        },
        BUILDINGS_DATA[BUILDINGS.KOLOS_SEED].props
      );
      expect(applyMaxSpy.mock.invocationCallOrder[0]).toBeLessThan(
        applyModificationSpy.mock.invocationCallOrder[0]
      );
      expect(pipeResult.globalRessources?.[RESSOURCES.WA]).toEqual({
        value: 5,
        maximum: 5,
        production: 0,
      });
    });
    test.todo(
      "does not change order when 1 prop is neither cost nor modification not max"
    );
    test.todo(
      "does not change order when all props are neither cost nor modification not max"
    );
  });
  test.todo("... every props integration");
});
