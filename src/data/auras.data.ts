import { AURAS } from "../enums/auras.enum";

export type AuraData = {
  id: AURAS;
  name: string;
};

export const AURAS_DATA: { [id in AURAS]: AuraData } = {
  [AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION]: {
    id: AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION,
    name: "Aura : modification du niveau de WIGHLD autour (proportionelle à la proximité)",
  },
  [AURAS.RANGE_CONNECTIVITY_MODIFICATION]: {
    id: AURAS.RANGE_CONNECTIVITY_MODIFICATION,
    name: "Aura : modification du niveau de connectivité",
  },
};
