import { get } from "svelte/store";
import { Zum } from "../../../types/Zum";
import { zums } from "../../../stores/zums.store";
import { globalRessources } from "../../../stores/global-ressources.store";
import { RESSOURCES } from "../../../enums/ressources.enum";
import { TRIBES } from "../../../enums/tribes.enum";

export function collectWa(zum: Zum) {
  const _zums = get(zums);
  const _globalRessources = get(globalRessources);

  _globalRessources[RESSOURCES.WA].value += 2;
  _zums[zum.id].actions -= 1;
  _zums[zum.id].affinities[TRIBES.PERMA] =
    (_zums[zum.id].affinities[TRIBES.PERMA] || 0) + 1;

  zums.set(_zums);
  globalRessources.set(_globalRessources);
}
