import { get } from "svelte/store";
import { Zum } from "../../../types/Zum";
import { zums } from "../../../stores/zums.store";
import { TRIBES } from "../../../enums/tribes.enum";

export function meditate(zum: Zum) {
  const _zums = get(zums);

  _zums[zum.id].data += 5;
  _zums[zum.id].actions -= 1;
  _zums[zum.id].affinities[TRIBES.PSIKCX] =
    (_zums[zum.id].affinities[TRIBES.PSIKCX] || 0) + 1;

  zums.set(_zums);
}
