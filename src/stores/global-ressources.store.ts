import { writable } from "svelte/store";
import { RESSOURCES } from "../enums/ressources.enum";

export type GlobalRessources = {
  [ressource in Extract<RESSOURCES, "wa" | "jing">]: {
    value: number;
    maximum: number;
    production: number;
  };
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
