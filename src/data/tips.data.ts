import { TIPS } from "../enums/tips.enum";

export type TipData = {
  id: TIPS;
  name: string;
  type:
    | "quest"
    | "tutorial"
    | "quest_achievement" /* | "flavor" | "philosophy" */;
};

export const TIPS_DATA: { [id in TIPS]?: TipData } = {
  [TIPS.ATTERRISSAGE]: {
    id: TIPS.ATTERRISSAGE,
    name: "Atterrissage imminent !",
    type: "quest",
  },
  [TIPS.TERRAIN]: {
    id: TIPS.TERRAIN,
    name: "Terrain et cases",
    type: "tutorial",
  },
  [TIPS.WIGHLD]: {
    id: TIPS.WIGHLD,
    name: "Le WIGHLD",
    type: "tutorial",
  },
  [TIPS.ATTERRISSAGE_REUSSI]: {
    id: TIPS.ATTERRISSAGE_REUSSI,
    name: "Un nouveau monde",
    type: "quest_achievement",
  },
  [TIPS.BRULURE]: {
    id: TIPS.BRULURE,
    name: "Case brulée",
    type: "tutorial",
  },
};
