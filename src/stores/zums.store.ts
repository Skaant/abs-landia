import { writable } from "svelte/store";
import { ZumsIndex } from "../types/Zum";

export const zums = writable<ZumsIndex>({});
