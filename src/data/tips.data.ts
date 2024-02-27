import { TIPS } from "../enums/tips.enum";

export type TipData = {
  id: TIPS;
  name: string;
  type: "quest" | "gameplay" | "quest-achieved" | "lore";
};

export const TIPS_DATA: { [id in TIPS]?: TipData } = {
  [TIPS.EXPANS]: {
    id: TIPS.EXPANS,
    name: "L'EXPANS",
    type: "lore",
  },
  [TIPS.ATTERRISSAGE_IMMINENT]: {
    id: TIPS.ATTERRISSAGE_IMMINENT,
    name: "Atterrissage imminent !",
    type: "quest",
  },
  [TIPS.TERRAIN]: {
    id: TIPS.TERRAIN,
    name: "Terrain et cases",
    type: "gameplay",
  },
  [TIPS.WIGHLD]: {
    id: TIPS.WIGHLD,
    name: "Le WIGHLD",
    type: "gameplay",
  },
  [TIPS.ATTERRISSAGE_REUSSI]: {
    id: TIPS.ATTERRISSAGE_REUSSI,
    name: "Un nouveau monde",
    type: "quest-achieved",
  },
  [TIPS.BRULURE]: {
    id: TIPS.BRULURE,
    name: "Case brulée",
    type: "gameplay",
  },
  [TIPS.HOL_ZONG]: {
    id: TIPS.HOL_ZONG,
    name: "Le HOL-ZONG",
    type: "lore",
  },
  [TIPS.CONNEXION_REQUISE]: {
    id: TIPS.CONNEXION_REQUISE,
    name: "Connexion au HOL-ZONG requise !",
    type: "quest",
  },
  [TIPS.GENERATION_IDEES]: {
    id: TIPS.GENERATION_IDEES,
    name: "Génération d'idées par les ZUMS",
    type: "gameplay",
  },
  [TIPS.TRANSFERT_IDEES]: {
    id: TIPS.TRANSFERT_IDEES,
    name: "Transfert d'idées au HOL-ZONG",
    type: "gameplay",
  },
  [TIPS.CONNEXION_ETABLIE]: {
    id: TIPS.CONNEXION_ETABLIE,
    name: "Connexion établie",
    type: "quest-achieved",
  },
  [TIPS.PREMIERS_PAS]: {
    id: TIPS.PREMIERS_PAS,
    name: "Premiers pas",
    type: "quest",
  },
  [TIPS.NOYAUX_DE_DONNEES]: {
    id: TIPS.NOYAUX_DE_DONNEES,
    name: "Noyaux de données",
    type: "gameplay",
  },
  [TIPS.BATIMENTS]: {
    id: TIPS.BATIMENTS,
    name: "Les bâtiments",
    type: "gameplay",
  },
};
