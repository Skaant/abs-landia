import { BUILDING_PROPS } from "../enums/building-props.enum";
import { BUILDINGS } from "../enums/buildings.enum";

type BuildingProp =
  | {
      id: BUILDING_PROPS.ZUMS_MODIFICATION;
      value: number;
    }
  | {
      id: BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION;
      value: number;
      range: number;
    }
  | {
      id: BUILDING_PROPS.WIGHLD_MODIFICATION;
      value: number;
    }
  | {
      id: BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION;
      value: number;
      range: number;
    }
  | {
      id: BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD;
      value: number;
      range: number;
    };

export type BuildingData = {
  id: BUILDINGS;
  name: string;
  description: string;
  props: { [id in BUILDING_PROPS]?: BuildingProp };
};

export const BUILDINGS_DATA: { [id in BUILDINGS]: BuildingData } = {
  [BUILDINGS.KOLOS_SEED]: {
    id: BUILDINGS.KOLOS_SEED,
    name: "KOLOS-SEED",
    description: "Bâtiment de départ de la colonie.",
    props: {
      [BUILDING_PROPS.ZUMS_MODIFICATION]: {
        id: BUILDING_PROPS.ZUMS_MODIFICATION,
        value: 5,
      },
      [BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION]: {
        id: BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION,
        value: -1,
        range: 3,
      },
      [BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION]: {
        id: BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION,
        value: 3,
        range: 2,
      },
    },
  },
  [BUILDINGS.DOM]: {
    id: BUILDINGS.DOM,
    name: "DOM",
    description: "Subvient aux besoins des ZUMS : eau, logement, nourriture.",
    props: {
      [BUILDING_PROPS.ZUMS_MODIFICATION]: {
        id: BUILDING_PROPS.ZUMS_MODIFICATION,
        value: 3,
      },
      [BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION]: {
        id: BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION,
        value: -1,
        range: 2,
      },
      [BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION]: {
        id: BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION,
        value: 2,
        range: 2,
      },
    },
  },
  [BUILDINGS.BALISE_BLIX]: {
    id: BUILDINGS.BALISE_BLIX,
    name: "Balise BLIX",
    description: "Restore les parcelles brulées et augmente le WIGHLD autour.",
    props: {
      [BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD]: {
        id: BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD,
        value: 2,
        range: 2,
      },
    },
  },
};
