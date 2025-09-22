import { writable } from "svelte/store";
import { RESSOURCES } from "../enums/ressources.enum";
import { HOL_ONG_DATA_GOAL } from "../data/game.data";

export type GlobalRessource = {
  value: number;
  maximum: number;
  production: number;
};

export type GlobalRessources = {
  [ressource in Extract<RESSOURCES, RESSOURCES.HOL_ONG_DATA>]: GlobalRessource;
};

const INITIAL_GLOBAL_RESSOURCES: GlobalRessources = {
  [RESSOURCES.HOL_ONG_DATA]: {
    value: 0,
    maximum: HOL_ONG_DATA_GOAL,
    production: 0,
  },
};

const { subscribe, set, update } = writable<GlobalRessources>(
  INITIAL_GLOBAL_RESSOURCES
);

export const globalRessources = {
  subscribe,
  set,
  update,
  reset: (values: Partial<GlobalRessources> = {}) =>
    set({
      ...INITIAL_GLOBAL_RESSOURCES,
      ...values,
    }),
};
