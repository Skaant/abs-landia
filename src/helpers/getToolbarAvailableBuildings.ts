import { BUILDINGS } from "../enums/buildings.enum";
import { RESEARCHES } from "../enums/researches.enum";
import { BuildingsIndex } from "../types/Building";
import { ResearchesIndex } from "../types/ResearchesIndex";

export function getToolbarAvailableBuildings(
  buildings: BuildingsIndex = {},
  researches: ResearchesIndex = {}
): BUILDINGS[] {
  if (Object.keys(buildings).length) {
    if (researches[RESEARCHES.COLONY_SETUP_PROTOCOLE]) {
      return [
        BUILDINGS.DOM,
        BUILDINGS.CUVE_VORTEX,
        BUILDINGS.SILO_A_JING,
        BUILDINGS.BALISE_HOL_ONG,
        BUILDINGS.BALISE_FRFF,
        BUILDINGS.BALISE_BLIX,
      ];
    } else return [];
  } else return [BUILDINGS.KOLOS_SEED];
}
