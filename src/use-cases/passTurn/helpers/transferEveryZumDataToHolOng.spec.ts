import { get } from "svelte/store";
import { zumFactory } from "../../../factories/zum.factory";
import { generateCells } from "../../../helpers/generateCells";
import { cells } from "../../../stores/cells.store";
import { zums } from "../../../stores/zums.store";
import { transferEveryZumDataToHolOng } from "./transferEveryZumDataToHolOng";

describe("transferEveryZumDataToHolOng", () => {
  it("should update zums and hol-ong data", () => {
    const MOCK_CELLS = generateCells(2, 2);
    const MOCK_CELL_1 = MOCK_CELLS["0-0"];
    MOCK_CELL_1.connectivity = 4;
    const MOCK_CELL_2 = MOCK_CELLS["0-1"];
    MOCK_CELL_2.connectivity = 2;
    const MOCK_CELL_3 = MOCK_CELLS["1-0"];
    cells.set(MOCK_CELLS);
    const MOCK_ZUM_1 = zumFactory({
      id: "0",
      cellId: MOCK_CELL_1.id,
      data: 1,
    });
    const MOCK_ZUM_2 = zumFactory({
      id: "1",
      cellId: MOCK_CELL_2.id,
      data: 3,
    });
    const MOCK_ZUM_3 = zumFactory({
      id: "2",
      cellId: MOCK_CELL_3.id,
      data: 0,
    });
    zums.set({
      [MOCK_ZUM_1.id]: MOCK_ZUM_1,
      [MOCK_ZUM_2.id]: MOCK_ZUM_2,
      [MOCK_ZUM_3.id]: MOCK_ZUM_3,
    });
    const [updatedZums, diff] = transferEveryZumDataToHolOng(
      get(zums),
      get(cells)
    );
    expect(updatedZums[MOCK_ZUM_1.id].data).toBe(0);
    expect(updatedZums[MOCK_ZUM_2.id].data).toBe(1);
    expect(updatedZums[MOCK_ZUM_3.id].data).toBe(0);
    expect(diff).toBe(3);
  });
});
