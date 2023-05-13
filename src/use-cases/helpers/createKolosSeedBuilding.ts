import { get } from "svelte/store";
import { buildings } from "../../stores/buildings.store";
import { Building } from "../../types/Building";
import { BUILDINGS } from "../../enums/buildings.enum";

export function createKolosSeedBuilding(cellId: string): Building {
  const id = Object.values(get(buildings)).length.toString();
  return {
    id,
    cellId,
    type: BUILDINGS.KOLOS_SEED,
  };
}
