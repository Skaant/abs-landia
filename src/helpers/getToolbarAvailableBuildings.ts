import { BUILDINGS } from "../enums/buildings.enum";
import { BuildingsIndex } from "../types/Building";

export function getToolbarAvailableBuildings(
  buildings: BuildingsIndex = {}
): BUILDINGS[] {
  if (Object.keys(buildings).length) {
    return [
      BUILDINGS.DOM,
      BUILDINGS.CUVE_VORTEX,
      BUILDINGS.SILO_A_JING,
      BUILDINGS.BALISE_HOL_ONG,
      BUILDINGS.BALISE_FRFF,
      BUILDINGS.BALISE_BLIX,
    ];
  } else return [BUILDINGS.KOLOS_SEED];
}
