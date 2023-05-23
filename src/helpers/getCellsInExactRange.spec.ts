import { CellsIndex } from "../types/Cell";
import { generateCells } from "./generateCells";
import { getCellsInExactRange } from "./getCellsInExactRange";

const MOCK_CELLS = generateCells(6, 6) as CellsIndex;

describe("getCellsInExactRange", () => {
  test("range 0", () => {
    const result = getCellsInExactRange(MOCK_CELLS["3-3"], MOCK_CELLS, 0);
    expect(result).toEqual([MOCK_CELLS["3-3"]]);
  });
  test("range 1", () => {
    const result = getCellsInExactRange(MOCK_CELLS["3-3"], MOCK_CELLS, 1);
    expect(
      result.sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x))
    ).toEqual([
      MOCK_CELLS["2-3"],
      MOCK_CELLS["3-2"],
      MOCK_CELLS["3-4"],
      MOCK_CELLS["4-3"],
    ]);
  });
  test("range 2", () => {
    const result = getCellsInExactRange(MOCK_CELLS["3-3"], MOCK_CELLS, 2);
    expect(
      result.sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x))
    ).toEqual([
      MOCK_CELLS["1-3"],
      MOCK_CELLS["2-2"],
      MOCK_CELLS["2-4"],
      MOCK_CELLS["3-1"],
      MOCK_CELLS["3-5"],
      MOCK_CELLS["4-2"],
      MOCK_CELLS["4-4"],
      MOCK_CELLS["5-3"],
    ]);
  });
});
