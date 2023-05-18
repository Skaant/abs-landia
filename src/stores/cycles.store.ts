import { writable } from "svelte/store";

function createCycles() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    set,
    increment: () => update((n) => n + 1),
  };
}

export const cycles = createCycles();
