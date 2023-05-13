import { generateCells } from "../../helpers/generateCells";
import { createZumOnCells } from "./createZumOnCells";

describe("createZumOnCells", () => {
  test("should return an array of zums with correct props", () => {
    const MOCK_CELLS = generateCells(5, 5);
    const zums = createZumOnCells([
      MOCK_CELLS["0-0"],
      MOCK_CELLS["3-3"],
      MOCK_CELLS["4-3"],
    ]);
    expect(zums.length).toBe(3);
    expect(zums[0].id).toBe("0");
    expect(zums[0].cellId).toBe(MOCK_CELLS["0-0"].id);
    expect(zums[1].id).toBe("1");
    expect(zums[1].cellId).toBe(MOCK_CELLS["3-3"].id);
    expect(zums[2].id).toBe("2");
    expect(zums[2].cellId).toBe(MOCK_CELLS["4-3"].id);
  });
});
