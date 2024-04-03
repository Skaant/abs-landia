import { ACTIONS } from "../../enums/actions.enum";
import { ZumAffinity } from "./types/ZumAffinity";

export const KOLOS_ZUM_AFFINITY: ZumAffinity = [
  [
    {
      type: "action",
      id: ACTIONS.INSTALL_BUILDING_PLANT,
    },
  ],
  [
    {
      type: "action",
      id: ACTIONS.NURTURE,
    },
  ],
];
