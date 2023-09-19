import { BUILDINGS } from "../enums/buildings.enum";
import { RESEARCHES } from "../enums/researches.enum";

type ResearchData = {
  name: string;
  description?: string;
  unlocks: string[];
};

export const RESEARCHES_DATA: { [id in RESEARCHES]?: ResearchData } = {
  [RESEARCHES.COLONY_SETUP_PROTOCOLE]: {
    name: "Protocole d'installation de la colonie",
    description: "De quoi se loger, boire et se nourrir.",
    unlocks: [BUILDINGS.DOM, BUILDINGS.CUVE_VORTEX, BUILDINGS.SILO_A_JING],
  },
  [RESEARCHES.DATA_BUILDINGS]: {
    name: "Bâtiments manipulant la donnée",
    description:
      "Améliorer la génération d'idées et permet la production de noyaux de données.",
    unlocks: [BUILDINGS.BALISE_HOL_ONG, BUILDINGS.DATA_CORES_DIFFUSOR],
  },
  [RESEARCHES.CORE_ZUMS_ACTIONS]: {
    name: "Pratiques de base ZUMS",
    description: "Couper, faire croître et méditer.",
    unlocks: [],
  },
};
