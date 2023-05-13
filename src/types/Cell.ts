export type Cell = {
  id: string;
  wighld: number;
  x: number;
  y: number;
  burned?: true;
  buildingId?: string;
  zumId?: string;
};

export type CellsIndex = { [id: string]: Cell };
