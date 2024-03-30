import { writable } from "svelte/store";
import { ZumsIndex } from "../types/Zum";
import { zumFactory } from "../factories/zum.factory";

const TEST_ZUM_ID = "zum-alpha";

export const zums = writable<ZumsIndex>({
  [TEST_ZUM_ID]: zumFactory({
    id: TEST_ZUM_ID,
    name: "Kadara",
    cellId: "1,1",
  }),
});
