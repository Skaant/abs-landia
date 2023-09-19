import { RESEARCHES, RESEARCHES_CATEGORIES } from "../enums/researches.enum";
import { TRIBES } from "../enums/tribes.enum";
import { TRIBES_DATA, TRIBES_LIST } from "./tribes.data";

export const RESEARCHES_CATEGORIES_LIST: RESEARCHES_CATEGORIES[] = [
  "colony-development",
  ...TRIBES_LIST,
];

type ResearchesSectionData = {
  name: string;
  short: string;
  description?: string;
  researches: RESEARCHES[];
};

export const RESEARCHES_CATEGORIES_DATA: {
  [id in RESEARCHES_CATEGORIES]?: ResearchesSectionData;
} = {
  ["colony-development"]: {
    name: "Éléments et activités de base",
    short: "BASE",
    description: "Recherches de base pour établissement ZUM.",
    researches: [
      RESEARCHES.COLONY_SETUP_PROTOCOLE,
      RESEARCHES.DATA_BUILDINGS,
      RESEARCHES.CORE_ZUMS_ACTIONS,
    ],
  },
  [TRIBES.KOLOS]: {
    name: "Tribu KOLOS",
    short: "KOLOS",
    description: TRIBES_DATA[TRIBES.KOLOS]?.description,
    researches: [],
  },
};
