import { AuraEffect } from "./AuraEffects";

export type Cell = {
  id: string;
  x: number;
  y: number;
  revealed?: true;
  burned?: true;
  intrinsicWighld: number;
  /** Calculated prop from `intrinsic` and modifiers */
  effectiveWighld: number;
  connectivity: number;
  buildingId?: string;
  zumId?: string;
  auraEffects?: AuraEffect[];
};

export type CellsIndex = { [id: string]: Cell };
