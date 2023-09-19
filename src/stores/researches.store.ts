import { writable } from "svelte/store";
import { ResearchesIndex } from "../types/ResearchesIndex";

export const researches = writable<ResearchesIndex>({} as ResearchesIndex);
