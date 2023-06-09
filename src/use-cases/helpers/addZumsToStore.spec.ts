import { get } from "svelte/store";
import { zums } from "../../stores/zums.store";
import { addZumsToStore } from "./addZumsToStore";
import { Zum } from "../../types/Zum";
import { zumFactory } from "../../factories/zum.factory";

describe("addZumsToStore", () => {
  test("should add zums to store", () => {
    zums.set({});
    const MOCK_ZUMS: Zum[] = [
      zumFactory({
        id: "0",
        cellId: "4-5",
      }),
      zumFactory({
        id: "1",
        cellId: "5-4",
      }),
    ];
    addZumsToStore(MOCK_ZUMS);
    expect(get(zums)).toEqual({
      "0": MOCK_ZUMS[0],
      "1": MOCK_ZUMS[1],
    });
  });
});
