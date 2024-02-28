import { cellFactory } from "../factories/cell.factory";
import { generateGrid } from "./generateGrid";

describe("generateGrid", () => {
  it("should throw an error if reveal radius > radius", () => {
    expect(() => generateGrid(1, 2)).toThrow("revealRadius > radius");
  });
  describe("grid production", () => {
    it("should produce a grid with radius 1", () => {
      const { cells, ...grid } = generateGrid(1, undefined, true);
      expect(Object.keys(cells).length).toBe(5);
      expect(grid).toEqual({
        xMin: -1,
        xMax: 1,
        yMin: -1,
        yMax: 1,
      });
      expect(cells["0-0"]).toEqual(cellFactory({ x: 0, y: 0 }));
      expect(cells["0-1"]).toEqual(cellFactory({ x: 0, y: 1 }));
      expect(cells["1-0"]).toEqual(cellFactory({ x: 1, y: 0 }));
      expect(cells["0--1"]).toEqual(cellFactory({ x: 0, y: -1 }));
      expect(cells["-1-0"]).toEqual(cellFactory({ x: -1, y: 0 }));
    });
    it("should produce a grid with radius 2", () => {
      const { cells, ...grid } = generateGrid(2, undefined, true);
      expect(Object.keys(cells).length).toBe(13);
      expect(grid).toEqual({
        xMin: -2,
        xMax: 2,
        yMin: -2,
        yMax: 2,
      });
      expect(cells["0-0"]).toEqual(cellFactory({ x: 0, y: 0 }));
      expect(cells["0-1"]).toEqual(cellFactory({ x: 0, y: 1 }));
      expect(cells["1-0"]).toEqual(cellFactory({ x: 1, y: 0 }));
      expect(cells["0--1"]).toEqual(cellFactory({ x: 0, y: -1 }));
      expect(cells["-1-0"]).toEqual(cellFactory({ x: -1, y: 0 }));
      expect(cells["0-2"]).toEqual(cellFactory({ x: 0, y: 2 }));
      expect(cells["1-1"]).toEqual(cellFactory({ x: 1, y: 1 }));
      expect(cells["2-0"]).toEqual(cellFactory({ x: 2, y: 0 }));
      expect(cells["1--1"]).toEqual(cellFactory({ x: 1, y: -1 }));
      expect(cells["0--2"]).toEqual(cellFactory({ x: 0, y: -2 }));
      expect(cells["-1--1"]).toEqual(cellFactory({ x: -1, y: -1 }));
      expect(cells["-2-0"]).toEqual(cellFactory({ x: -2, y: 0 }));
      expect(cells["-1-1"]).toEqual(cellFactory({ x: -1, y: 1 }));
    });
    describe("reveal radius", () => {
      it("should reveal cells in given reveal radius", () => {
        const { cells, ...grid } = generateGrid(2, 1, true);
        expect(Object.keys(cells).length).toBe(13);
        expect(grid).toEqual({
          xMin: -2,
          xMax: 2,
          yMin: -2,
          yMax: 2,
        });
        expect(cells["0-0"]).toEqual(
          cellFactory({ x: 0, y: 0, revealed: true })
        );
        expect(cells["0-1"]).toEqual(
          cellFactory({ x: 0, y: 1, revealed: true })
        );
        expect(cells["1-0"]).toEqual(
          cellFactory({ x: 1, y: 0, revealed: true })
        );
        expect(cells["0--1"]).toEqual(
          cellFactory({ x: 0, y: -1, revealed: true })
        );
        expect(cells["-1-0"]).toEqual(
          cellFactory({ x: -1, y: 0, revealed: true })
        );
        expect(cells["0-2"]).toEqual(cellFactory({ x: 0, y: 2 }));
        expect(cells["1-1"]).toEqual(cellFactory({ x: 1, y: 1 }));
        expect(cells["2-0"]).toEqual(cellFactory({ x: 2, y: 0 }));
        expect(cells["1--1"]).toEqual(cellFactory({ x: 1, y: -1 }));
        expect(cells["0--2"]).toEqual(cellFactory({ x: 0, y: -2 }));
        expect(cells["-1--1"]).toEqual(cellFactory({ x: -1, y: -1 }));
        expect(cells["-2-0"]).toEqual(cellFactory({ x: -2, y: 0 }));
        expect(cells["-1-1"]).toEqual(cellFactory({ x: -1, y: 1 }));
      });
    });
    it.only("should generate random wighld if not skipped", () => {
      const { cells } = generateGrid(2);
      expect(
        Object.values(cells).reduce(
          (acc, cell) => acc + cell.intrinsicWighld,
          0
        ) > 0
      ).toBe(true);
    });
  });
});
