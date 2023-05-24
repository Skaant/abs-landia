import { cellFactory } from "../../../factories/cell.factory";
import { zumFactory } from "../../../factories/zum.factory";
import { transferZumDataToHolOng } from "./transferZumDataToHolOng";

describe("transferZumDataToHolOng", () => {
  test("should return updated zum and diff related to connectivity", () => {
    const MOCK_CELL = cellFactory({
      x: 0,
      y: 0,
      connectivity: 4,
    });
    const [zum, diff] = transferZumDataToHolOng(
      zumFactory({
        id: MOCK_CELL.id,
        cellId: MOCK_CELL.id,
        data: 9,
      }),
      MOCK_CELL
    );
    expect(zum.data).toBe(5);
    expect(diff).toBe(4);
  });
  test("should return updated zum and diff with data inf to conn", () => {
    const MOCK_CELL = cellFactory({
      x: 0,
      y: 0,
      connectivity: 4,
    });
    const [zum, diff] = transferZumDataToHolOng(
      zumFactory({
        id: MOCK_CELL.id,
        cellId: MOCK_CELL.id,
        data: 2,
      }),
      MOCK_CELL
    );
    expect(zum.data).toBe(0);
    expect(diff).toBe(2);
  });
});
