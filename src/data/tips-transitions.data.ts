import { TIPS_TRANSITIONS } from "../enums/tips-transitions.enum";
import { TIPS } from "../enums/tips.enum";

export type TipsTransitionData = [remove: TIPS[], add: TIPS[]];

export const TIPS_TRANSITIONS_DATA: {
  [key in TIPS_TRANSITIONS]: TipsTransitionData;
} = {
  [TIPS_TRANSITIONS.ATTERRISSAGE_IMMINENT]: [
    [TIPS.ATTERRISSAGE_IMMINENT],
    [
      TIPS.ATTERRISSAGE_REUSSI,
      TIPS.HOL_ZONG,
      TIPS.GENERATION_IDEES,
      TIPS.TRANSFERT_IDEES,
    ],
  ],
  [TIPS_TRANSITIONS.ATTERRISSAGE_REUSSI]: [
    [TIPS.ATTERRISSAGE_REUSSI, TIPS.EXPANS, TIPS.TERRAIN, TIPS.WIGHLD],
    [TIPS.CONNEXION_REQUISE],
  ],
  [TIPS_TRANSITIONS.CONNEXION_REQUISE]: [
    [TIPS.CONNEXION_REQUISE],
    [TIPS.CONNEXION_ETABLIE],
  ],
  [TIPS_TRANSITIONS.CONNEXION_ETABLIE]: [
    [
      TIPS.CONNEXION_ETABLIE,
      TIPS.ATTERRISSAGE_REUSSI,
      TIPS.HOL_ZONG,
      TIPS.GENERATION_IDEES,
      TIPS.TRANSFERT_IDEES,
    ],
    [TIPS.PREMIERS_PAS, TIPS.NOYAUX_DE_DONNEES, TIPS.BATIMENTS],
  ],
};