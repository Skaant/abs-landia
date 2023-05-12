import type { BUILDINGS } from "../enums/buildings.enum";

export type Building = {
  id: string;
  cellId: string;
  type: BUILDINGS;
};

export type BuildingsIndex = { [id: string]: Building };
