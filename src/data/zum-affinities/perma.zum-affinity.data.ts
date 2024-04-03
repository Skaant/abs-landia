import { ACTIONS } from "../../enums/actions.enum";
import { ZumAffinity } from "./types/ZumAffinity";

export const PERMA_ZUM_AFFINITY: ZumAffinity = [
  [
    { type: "action", id: ACTIONS.COLLECT_WA },
    { type: "action", id: ACTIONS.HARVEST_JING },
  ],
];
