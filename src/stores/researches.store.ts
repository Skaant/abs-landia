import { writable } from "svelte/store";
import { RESEARCHES } from "../enums/researches.enum";
import { ResearchesIndex } from "../types/ResearchesIndex";

export const researches = writable<ResearchesIndex>({} as ResearchesIndex);
