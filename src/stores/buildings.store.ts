import { writable } from "svelte/store";
import { BuildingsIndex } from "../types/Building";

export const buildings = writable<BuildingsIndex>({});
