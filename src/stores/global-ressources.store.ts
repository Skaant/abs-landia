import { writable } from "svelte/store";
import { RESSOURCES } from "../enums/ressources.enum";
import { HOL_ONG_DATA_GOAL } from "../data/game.data";

export type GlobalRessource = {
  value: number;
  maximum: number;
  production: number;
};

export type GlobalRessources = {
  [ressource in Extract<
    RESSOURCES,
    | RESSOURCES.WA
    | RESSOURCES.JING
    | RESSOURCES.HOL_ONG_DATA
    | RESSOURCES.DATA_CORES
  >]: GlobalRessource;
};

const INITIAL_GLOBAL_RESSOURCES: GlobalRessources = {
  [RESSOURCES.WA]: {
    value: 0,
    maximum: 0,
    production: 0,
  },
  [RESSOURCES.JING]: {
    value: 0,
    maximum: 0,
    production: 0,
  },
  [RESSOURCES.HOL_ONG_DATA]: {
    value: 0,
    maximum: HOL_ONG_DATA_GOAL,
    production: 0,
  },
  [RESSOURCES.DATA_CORES]: {
    value: 0,
    maximum: 10,
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
