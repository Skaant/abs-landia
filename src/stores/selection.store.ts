import { writable } from "svelte/store";

export const selection = writable<
  | undefined
  | {
      type: "toolbar-building";
      id: string;
    }
>(undefined);
