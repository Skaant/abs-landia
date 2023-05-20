import { get } from "svelte/store";
import { cellFactory } from "../../../factories/cell.factory";
import { generateCells } from "../../../helpers/generateCells";
import { cells } from "../../../stores/map.store";
import { zums } from "../../../stores/zums.store";
import { addDataToEveryZum } from "./addDataToEveryZum";

describe("addDataToEveryZum", () => {
  test("data should be increased proportionally to wighld level", () => {
    const MOCK_CELL_1 = cellFactory({
      x: 2,
      y: 3,
      wighld: 5,
    });
    const MOCK_CELL_2 = cellFactory({
      x: 0,
      y: 0,
      wighld: 1,
    });
    const MOCK_CELL_3 = cellFactory({
      x: 1,
      y: 0,
      wighld: 0,
    });
    const MOCK_ZUM_1 = {
      id: "0",
      cellId: MOCK_CELL_1.id,
      data: 1,
    };
    MOCK_CELL_1.zumId = MOCK_ZUM_1.id;
    const MOCK_ZUM_2 = {
      id: "1",
      cellId: MOCK_CELL_2.id,
      data: 0,
    };
    MOCK_CELL_2.zumId = MOCK_ZUM_2.id;
    const MOCK_ZUM_3 = {
      id: "2",
      cellId: MOCK_CELL_3.id,
      data: 4,
    };
    MOCK_CELL_3.zumId = MOCK_ZUM_3.id;
    const _cells = generateCells(4, 4);
    _cells[MOCK_CELL_1.id] = MOCK_CELL_1;
    _cells[MOCK_CELL_2.id] = MOCK_CELL_2;
    _cells[MOCK_CELL_3.id] = MOCK_CELL_3;
    cells.set(_cells);
    zums.set({
      "0": MOCK_ZUM_1,
      "1": MOCK_ZUM_2,
      "2": MOCK_ZUM_3,
    });
    const _zums = addDataToEveryZum(get(zums), get(cells));
    expect(_zums[MOCK_ZUM_1.id].data).toBe(4);
    expect(_zums[MOCK_ZUM_2.id].data).toBe(1);
    expect(_zums[MOCK_ZUM_3.id].data).toBe(4.5);
  });
});
