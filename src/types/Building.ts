import type { BUILDINGS } from "../enums/buildings.enum";
import { AuraEffect } from "./AuraEffects";

export type Building = {
  id: string;
  cellId: string;
  type: BUILDINGS;
  auraEffects?: AuraEffect[];
};

export type BuildingsIndex = { [id: string]: Building };
