import type { Building } from "./Building";

export type Cell = {
  id: string;
  wighld: 0 | 1 | 2 | 3 | 4 | 5;
  x: number;
  y: number;
  burned?: true;
};

export type CellsIndex = { [id: string]: Cell };

export type CalculatedCell = Cell & {
  wighldModifier?: number;
  wighldModified?: number;
  building?: Building;
};

export type CalculatedCellsIndex = { [key: string]: CalculatedCell };
