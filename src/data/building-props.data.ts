import { BUILDING_PROPS } from "../enums/building-props.enum";

export type BuildingPropData = {
  id: BUILDING_PROPS;
  name: string;
};

export const BUILDING_PROPS_DATA: {
  [id in BUILDING_PROPS]?: BuildingPropData;
} = {
  [BUILDING_PROPS.WA_COST]: {
    id: BUILDING_PROPS.WA_COST,
    name: "Coût en WA",
  },
  [BUILDING_PROPS.JING_COST]: {
    id: BUILDING_PROPS.JING_COST,
    name: "Coût en JING",
  },
  [BUILDING_PROPS.WA_MODIFICATION]: {
    id: BUILDING_PROPS.WA_MODIFICATION,
    name: "Évolution de la quantité de WA",
  },
  [BUILDING_PROPS.JING_MODIFICATION]: {
    id: BUILDING_PROPS.JING_MODIFICATION,
    name: "Évolution de la quantité de JING",
  },
  [BUILDING_PROPS.ZUMS_MODIFICATION]: {
    id: BUILDING_PROPS.ZUMS_MODIFICATION,
    name: "Évolution du nombre de ZUMS",
  },
  [BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION]: {
    id: BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION,
    name: "Évolution de la connectivité autour",
  },
  [BUILDING_PROPS.WIGHLD_MODIFICATION]: {
    id: BUILDING_PROPS.WIGHLD_MODIFICATION,
    name: "Évolution du WIGHLD autour",
  },
  [BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION]: {
    id: BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION,
    name: "Évolution du WIGHLD autour (proportionelle à la proximité)",
  },
  [BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD]: {
    id: BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD,
    name: "Restauration et évolution du WIGHLD autour",
  },
};
