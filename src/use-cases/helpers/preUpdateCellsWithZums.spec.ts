import { zumFactory } from "../../factories/zum.factory";
import { generateCells } from "../../helpers/generateCells";
import { Zum } from "../../types/Zum";
import { preUpdateCellsWithZums } from "./preUpdateCellsWithZums";

describe("preUpdateCellsWithZums", () => {
  test("should update cells with zums id", () => {
    const MOCK_CELLS = generateCells(3, 3);
    const MOCK_ZUMS: Zum[] = [
      zumFactory({
        id: "0",
        cellId: MOCK_CELLS["0-0"].id,
      }),
      zumFactory({
        id: "1",
        cellId: MOCK_CELLS["2-1"].id,
      }),
    ];
    const cells = preUpdateCellsWithZums(MOCK_CELLS, MOCK_ZUMS);
    expect(cells[MOCK_CELLS["0-0"].id].zumId).toBe(MOCK_ZUMS[0].id);
    expect(cells[MOCK_CELLS["2-1"].id].zumId).toBe(MOCK_ZUMS[1].id);
  });
});
