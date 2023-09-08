import { AURAS } from "../enums/auras.enum";

export type AuraRangeDecreasingWighldModification = {
  id: AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION;
  range: number;
  value: number;
};

export type AuraRangeConnectivityModification = {
  id: AURAS.RANGE_CONNECTIVITY_MODIFICATION;
  range: number;
  value: number;
};
