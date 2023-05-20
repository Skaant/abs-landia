export type Cell = {
  id: string;
  x: number;
  y: number;
  burned?: true;
  wighld: number;
  connectivity: number;
  buildingId?: string;
  zumId?: string;
};

export type CellsIndex = { [id: string]: Cell };
