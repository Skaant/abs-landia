import { get } from "svelte/store";
import { RESEARCHES } from "../../enums/researches.enum";
import { RESSOURCES } from "../../enums/ressources.enum";
import { globalRessources } from "../../stores/global-ressources.store";
import { researches } from "../../stores/researches.store";

export function unlockResearch(research: RESEARCHES) {
  const _globalRessources = get(globalRessources);
  _globalRessources[RESSOURCES.DATA_CORES].value--;
  globalRessources.set(_globalRessources);
  researches.set({
    ...get(researches),
    [research]: true,
  });
}
