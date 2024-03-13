import { writable } from "svelte/store";
import { ZumsIndex } from "../types/Zum";

export const zums = writable<ZumsIndex>({
  ["zum-alpha"]: {
    id: "zum-alpha",
    cellId: "1,1",
    actions: 1,
    movements: 3,
    data: 0,
  },
});
