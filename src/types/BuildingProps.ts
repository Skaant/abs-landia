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

export type BuildingProp =
  | BuildingPropWaCost
  | BuildingPropJingCost
  | BuildingPropWaModification
  | BuildingPropJingModification
  | BuildingPropZumsModification
  | {
      id: BUILDING_PROPS.WIGHLD_MODIFICATION;
      value: number;
    }
  | BuildingPropRangeDecreasingWighldModification
  | {
      id: BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD;
      value: number;
      range: number;
    }
  | BuildingPropRangeUnburnAddWighld
  | BuildingPropRangeConnectivityModification;
