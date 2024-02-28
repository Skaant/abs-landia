import { get } from "svelte/store";
import { grid as wGrid, rows as dRows } from "./grid.store";
import { generateGrid } from "../helpers/generateGrid";

describe("grid store", () => {
  describe("derived rows", () => {
    it("should create 3 row on a radius-1 grid", () => {
      const grid = generateGrid(1);
      wGrid.set(grid);
      const rows = get(dRows);
      expect(rows.length).toEqual(3);
      expect(rows[0].length).toEqual(3);
      expect(rows[0][0]).toEqual(undefined);
      expect(rows[0][1]).toEqual(grid.cells["0--1"]);
      expect(rows[0][2]).toEqual(undefined);
      expect(rows[1].length).toEqual(3);
      expect(rows[1][0]).toEqual(grid.cells["-1-0"]);
      expect(rows[1][1]).toEqual(grid.cells["0-0"]);
      expect(rows[1][2]).toEqual(grid.cells["1-0"]);
      expect(rows[2].length).toEqual(3);
      expect(rows[2][0]).toEqual(undefined);
      expect(rows[2][1]).toEqual(grid.cells["0-1"]);
      expect(rows[2][2]).toEqual(undefined);
    });
  });
});
