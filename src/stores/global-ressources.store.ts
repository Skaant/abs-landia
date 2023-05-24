import { writable } from "svelte/store";
import { RESSOURCES } from "../enums/ressources.enum";

type GlobalRessources = {
  [ressource in Extract<RESSOURCES, "wa" | "jing">]: number;
};

export const globalRessources = writable<GlobalRessources>({
  [RESSOURCES.WA]: 0,
  [RESSOURCES.JING]: 0,
});
