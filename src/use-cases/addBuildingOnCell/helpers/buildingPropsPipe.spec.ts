import { get } from "svelte/store";
import { BUILDINGS_DATA } from "../../../data/buildings.data";
import { BUILDINGS } from "../../../enums/buildings.enum";
import { globalRessources } from "../../../stores/global-ressources.store";
import { buildingPropsPipe } from "./buildingPropsPipe";
import { RESSOURCES } from "../../../enums/ressources.enum";

describe("buildingPropsPipe", () => {
  test("base wa & jing costs application", () => {
    globalRessources.reset({
      [RESSOURCES.WA]: 4,
      [RESSOURCES.JING]: 10,
    });
    const pipeResult = buildingPropsPipe(
      {
        globalRessources: { ...get(globalRessources) },
      },
      BUILDINGS_DATA[BUILDINGS.DOM].props
    );
    expect(pipeResult.globalRessources).toEqual({
      [RESSOURCES.WA]: 3,
      [RESSOURCES.JING]: 9,
    });
  });
  test.todo("... every props integration");
});
