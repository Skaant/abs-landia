import { TRIBES } from "../../enums/tribes.enum";
import { KOLOS_ZUM_AFFINITY } from "./kolos.zum-affinity.data";
import { NOV_ZUM_AFFINITY } from "./nov.zum-affinity.data";
import { PERMA_ZUM_AFFINITY } from "./perma.zum-affinity.data";
import { ZumAffinity } from "./types/ZumAffinity";

export const ZUM_AFFINITIES: { [key in TRIBES]?: ZumAffinity } = {
  [TRIBES.KOLOS]: KOLOS_ZUM_AFFINITY,
  [TRIBES.NOV]: NOV_ZUM_AFFINITY,
  [TRIBES.PERMA]: PERMA_ZUM_AFFINITY,
};
