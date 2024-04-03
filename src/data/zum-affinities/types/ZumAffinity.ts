import { ACTIONS } from "../../../enums/actions.enum";
import { PASSIVES } from "../../../enums/passives.enum";

export type ZumAffinity = (
  | {
      type: "action";
      id: ACTIONS;
    }
  | { type: "passive"; id: PASSIVES }
)[][];
