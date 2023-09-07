export type Cell = {
  id: string;
  x: number;
  y: number;
  burned?: true;
  intrinsicWighld: number;
  effectiveWighld: number;
  connectivity: number;
  buildingId?: string;
  zumId?: string;
};

export type CellsIndex = { [id: string]: Cell };
