import { CellsIndex } from "../types/Cell";
import { generateCells } from "./generateCells";
import { getCellsInRange } from "./getCellsInRange";

const MOCK_CELLS = generateCells(5, 5) as CellsIndex;

describe("getCellsInRange", () => {
  test("range 1", () => {
    const result = getCellsInRange(MOCK_CELLS, MOCK_CELLS["2-2"], 1);
    expect(result.length).toEqual(1);
    expect(result).toEqual([MOCK_CELLS["2-2"]]);
  });
  test("range 2", () => {
    const result = getCellsInRange(MOCK_CELLS, MOCK_CELLS["2-2"], 2);
    expect(result.length).toEqual(5);
    expect(result).toEqual([
      MOCK_CELLS["1-2"],
      MOCK_CELLS["2-1"],
      MOCK_CELLS["2-2"],
      MOCK_CELLS["2-3"],
      MOCK_CELLS["3-2"],
    ]);
  });
  test("range 3", () => {
    const result = getCellsInRange(MOCK_CELLS, MOCK_CELLS["2-2"], 3);
    expect(result).toEqual([
      MOCK_CELLS["0-2"],
      MOCK_CELLS["1-1"],
      MOCK_CELLS["1-2"],
      MOCK_CELLS["1-3"],
      MOCK_CELLS["2-0"],
      MOCK_CELLS["2-1"],
      MOCK_CELLS["2-2"],
      MOCK_CELLS["2-3"],
      MOCK_CELLS["2-4"],
      MOCK_CELLS["3-1"],
      MOCK_CELLS["3-2"],
      MOCK_CELLS["3-3"],
      MOCK_CELLS["4-2"],
    ]);
  });
});
