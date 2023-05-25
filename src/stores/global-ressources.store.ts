import { writable } from "svelte/store";
import { RESSOURCES } from "../enums/ressources.enum";

export type GlobalRessources = {
  [ressource in Extract<RESSOURCES, "wa" | "jing">]: number;
};

const INITIAL_GLOBAL_RESSOURCES: GlobalRessources = {
  [RESSOURCES.WA]: 0,
  [RESSOURCES.JING]: 0,
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
