import { BUILDING_PROPS } from "../enums/building-props.enum";

/**
 * `BuildingPropWaCost.value` will be negated,
 *  while it is added in `BuildingPropWaModification.value`.
 */
export type BuildingPropWaCost = {
  id: BUILDING_PROPS.WA_COST;
  value: number;
};

/**
 * `BuildingPropJingCost.value` will be negated,
 *  while it is added in `BuildingPropJingModification.value`.
 */
export type BuildingPropJingCost = {
  id: BUILDING_PROPS.JING_COST;
  value: number;
};

export type BuildingPropWaModification = {
  id: BUILDING_PROPS.WA_MODIFICATION;
  value: number;
};

export type BuildingPropJingModification = {
  id: BUILDING_PROPS.JING_MODIFICATION;
  value: number;
};

export type BuildingPropZumsModification = {
  id: BUILDING_PROPS.ZUMS_MODIFICATION;
  value: number;
};

export type BuildingPropWighldRangeModification = {
  id: BUILDING_PROPS.WIGHLD_RANGE_MODIFICATION;
  value: number;
  range: number;
};

export type BuildingPropWighldExactRangeModification = {
  id: BUILDING_PROPS.WIGHLD_EXACT_RANGE_MODIFICATION;
  value: number;
  range: number;
};

export type BuildingPropRangeDecreasingWighldModification = {
  id: BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION;
  value: number;
  range: number;
};

export type BuildingPropRangeUnburnAddWighld = {
  id: BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD;
  value: number;
  range: number;
};

export type BuildingPropRangeConnectivityModification = {
  id: BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION;
  value: number;
  range: number;
};

export type BuildingPropWaMaxModification = {
  id: BUILDING_PROPS.WA_MAX_MODIFICATION;
  value: number;
};

export type BuildingPropJingMaxModification = {
  id: BUILDING_PROPS.JING_MAX_MODIFICATION;
  value: number;
};

export type BuildingPropWaProdModification = {
  id: BUILDING_PROPS.WA_PROD_MODIFICATION;
  value: number;
};

export type BuildingPropJingProdModification = {
  id: BUILDING_PROPS.JING_PROD_MODIFICATION;
  value: number;
};

export type BuildingProp =
  | BuildingPropWaCost
  | BuildingPropJingCost
  | BuildingPropWaModification
  | BuildingPropJingModification
  | BuildingPropZumsModification
  | BuildingPropWighldRangeModification
  | BuildingPropWighldExactRangeModification
  | BuildingPropRangeDecreasingWighldModification
  | {
      id: BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD;
      value: number;
      range: number;
    }
  | BuildingPropRangeUnburnAddWighld
  | BuildingPropRangeConnectivityModification
  | BuildingPropWaMaxModification
  | BuildingPropJingMaxModification
  | BuildingPropWaProdModification
  | BuildingPropJingProdModification;
