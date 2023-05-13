import { get } from "svelte/store";
import { zums as zumsStore } from "../../stores/zums.store";
import { Zum } from "../../types/Zum";

export function addZumsToStore(zums: Zum[]) {
  zumsStore.set({
    ...get(zumsStore),
    ...zums.reduce((acc, zum) => ({ ...acc, [zum.id]: zum }), {}),
  });
}
