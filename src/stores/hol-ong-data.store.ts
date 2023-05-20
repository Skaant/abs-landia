import { writable } from "svelte/store";

function createHolOngData() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    set,
    increment: (value: number) => update((n) => n + value),
  };
}

export const holOngData = createHolOngData();
