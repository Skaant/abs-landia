import { get } from "svelte/store";
import { RESSOURCES } from "../../enums/ressources.enum";
import { globalRessources } from "../../stores/global-ressources.store";
import { addGlobalRessourcesProduction } from "./addGlobalRessourcesProduction";

describe("addGlobalRessourcesProduction", () => {
  test("increase ressources value by their production", () => {
    globalRessources.reset({
      [RESSOURCES.WA]: { value: 0, maximum: 10, production: 4 },
      [RESSOURCES.JING]: { value: 3, maximum: 10, production: 2 },
    });
    const result = addGlobalRessourcesProduction(get(globalRessources));
    expect(result[RESSOURCES.WA].value).toBe(4);
    expect(result[RESSOURCES.JING].value).toBe(5);
  });
  test("should not increase ressources value over their maximum", () => {
    globalRessources.reset({
      [RESSOURCES.WA]: { value: 3, maximum: 5, production: 4 },
      [RESSOURCES.JING]: { value: 5, maximum: 5, production: 2 },
    });
    const result = addGlobalRessourcesProduction(get(globalRessources));
    expect(result[RESSOURCES.WA].value).toBe(5);
    expect(result[RESSOURCES.JING].value).toBe(5);
  });
});
