import { BUILDING_PROPS } from "../enums/building-props.enum";

export type BuildingPropZumsModification = {
  id: BUILDING_PROPS.ZUMS_MODIFICATION;
  value: number;
};

export type BuildingPropRangeDecreasingWighldModification = {
  id: BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION;
  value: number;
  range: number;
};

export type BuildingProp =
  | BuildingPropZumsModification
  | {
      id: BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION;
      value: number;
      range: number;
    }
  | {
      id: BUILDING_PROPS.WIGHLD_MODIFICATION;
      value: number;
    }
  | BuildingPropRangeDecreasingWighldModification
  | {
      id: BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD;
      value: number;
      range: number;
    };
