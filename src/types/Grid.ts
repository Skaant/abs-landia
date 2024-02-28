import { CellsIndex } from "./Cell";

export type Grid = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  cells: CellsIndex;
};
