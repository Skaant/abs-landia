import { AURAS } from "../enums/auras.enum";
import { BUILDING_PROPS } from "../enums/building-props.enum";
import { BUILDINGS } from "../enums/buildings.enum";
import { BuildingProp } from "../types/BuildingProps";

export type BuildingDataProps = {
  [id in BUILDING_PROPS & AURAS]?: BuildingProp;
};

export type BuildingData = {
  id: BUILDINGS;
  name: string;
  description: string;
  props: BuildingDataProps;
};

export const BUILDINGS_DATA: { [id in BUILDINGS]: BuildingData } = {
  [BUILDINGS.KOLOS_SEED]: {
    id: BUILDINGS.KOLOS_SEED,
    name: "KOLOS-SEED",
    description: "Bâtiment de départ de la colonie.",
    props: {
      [BUILDING_PROPS.WA_MODIFICATION]: {
        id: BUILDING_PROPS.WA_MODIFICATION,
        value: 5,
      },
      [BUILDING_PROPS.JING_MODIFICATION]: {
        id: BUILDING_PROPS.JING_MODIFICATION,
        value: 5,
      },
      [BUILDING_PROPS.ZUMS_MODIFICATION]: {
        id: BUILDING_PROPS.ZUMS_MODIFICATION,
        value: 5,
      },
      [AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION]: {
        id: AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION,
        value: -1,
        range: 3,
      },
      [AURAS.RANGE_CONNECTIVITY_MODIFICATION]: {
        id: AURAS.RANGE_CONNECTIVITY_MODIFICATION,
        value: 2.5,
        range: 3,
      },
      [BUILDING_PROPS.WA_MAX_MODIFICATION]: {
        id: BUILDING_PROPS.WA_MAX_MODIFICATION,
        value: 5,
      },
      [BUILDING_PROPS.JING_MAX_MODIFICATION]: {
        id: BUILDING_PROPS.JING_MAX_MODIFICATION,
        value: 5,
      },
    },
  },
  [BUILDINGS.DOM]: {
    id: BUILDINGS.DOM,
    name: "DOM",
    description: "Subvient aux besoins des ZUMS : eau, logement, nourriture.",
    props: {
      [BUILDING_PROPS.WA_COST]: {
        id: BUILDING_PROPS.WA_COST,
        value: 1,
      },
      [BUILDING_PROPS.JING_COST]: {
        id: BUILDING_PROPS.JING_COST,
        value: 1,
      },
      [BUILDING_PROPS.ZUMS_MODIFICATION]: {
        id: BUILDING_PROPS.ZUMS_MODIFICATION,
        value: 3,
      },
      [AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION]: {
        id: AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION,
        value: -1,
        range: 2,
      },
      [BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION]: {
        id: BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION,
        value: 1.5,
        range: 2,
      },
    },
  },
  [BUILDINGS.CUVE_VORTEX]: {
    id: BUILDINGS.CUVE_VORTEX,
    name: "Cuve-vortex",
    description: "Récupère l'excédent d'eau du sol et le stocke.",
    props: {
      [BUILDING_PROPS.WA_COST]: {
        id: BUILDING_PROPS.WA_COST,
        value: 1,
      },
      [BUILDING_PROPS.JING_COST]: {
        id: BUILDING_PROPS.JING_COST,
        value: 2,
      },
      [BUILDING_PROPS.WIGHLD_RANGE_MODIFICATION]: {
        id: BUILDING_PROPS.WIGHLD_RANGE_MODIFICATION,
        value: 0.5,
        range: 3,
      },
      [BUILDING_PROPS.WA_PROD_MODIFICATION]: {
        id: BUILDING_PROPS.WA_PROD_MODIFICATION,
        value: 1,
      },
      [BUILDING_PROPS.WA_MAX_MODIFICATION]: {
        id: BUILDING_PROPS.WA_MAX_MODIFICATION,
        value: 10,
      },
    },
  },
  [BUILDINGS.SILO_A_JING]: {
    id: BUILDINGS.SILO_A_JING,
    name: "Silo à JING",
    description: "Transformation des matières premières en JING, et stockage.",
    props: {
      [BUILDING_PROPS.WA_COST]: {
        id: BUILDING_PROPS.WA_COST,
        value: 2,
      },
      [BUILDING_PROPS.JING_COST]: {
        id: BUILDING_PROPS.JING_COST,
        value: 1,
      },
      [BUILDING_PROPS.JING_PROD_MODIFICATION]: {
        id: BUILDING_PROPS.JING_PROD_MODIFICATION,
        value: 1,
      },
      [BUILDING_PROPS.JING_MAX_MODIFICATION]: {
        id: BUILDING_PROPS.JING_MAX_MODIFICATION,
        value: 10,
      },
      [BUILDING_PROPS.WIGHLD_EXACT_RANGE_MODIFICATION]: {
        id: BUILDING_PROPS.WIGHLD_EXACT_RANGE_MODIFICATION,
        value: [-2, 1],
        range: [1, 2],
      },
    },
  },
  [BUILDINGS.BALISE_HOL_ONG]: {
    id: BUILDINGS.BALISE_HOL_ONG,
    name: "Balise HOL-ONG",
    description: "Fluidifie localement les échanges avec le HOL-ONG.",
    props: {
      [BUILDING_PROPS.WA_COST]: {
        id: BUILDING_PROPS.WA_COST,
        value: 2,
      },
      [BUILDING_PROPS.JING_COST]: {
        id: BUILDING_PROPS.JING_COST,
        value: 2,
      },
      [AURAS.RANGE_CONNECTIVITY_MODIFICATION]: {
        id: AURAS.RANGE_CONNECTIVITY_MODIFICATION,
        value: 3,
        range: 3,
      },
    },
  },
  [BUILDINGS.BALISE_FRFF]: {
    id: BUILDINGS.BALISE_FRFF,
    name: "Balise FRFF",
    description: "Augmente le niveau de WIGHLD des cases environnantes.",
    props: {
      [BUILDING_PROPS.WA_COST]: {
        id: BUILDING_PROPS.WA_COST,
        value: 3,
      },
      [BUILDING_PROPS.JING_COST]: {
        id: BUILDING_PROPS.JING_COST,
        value: 2,
      },
      [AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION]: {
        id: AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION,
        value: 1,
        range: 4,
      },
    },
  },
  [BUILDINGS.BALISE_BLIX]: {
    id: BUILDINGS.BALISE_BLIX,
    name: "Balise BLIX",
    description: "Restore les parcelles brulées et augmente le WIGHLD autour.",
    props: {
      [BUILDING_PROPS.WA_COST]: {
        id: BUILDING_PROPS.WA_COST,
        value: 3,
      },
      [BUILDING_PROPS.JING_COST]: {
        id: BUILDING_PROPS.JING_COST,
        value: 2,
      },
      [BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD]: {
        id: BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD,
        value: 2,
        range: 3,
      },
      [AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION]: {
        id: AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION,
        value: 1,
        range: 3,
      },
      [BUILDING_PROPS.WA_PROD_MODIFICATION]: {
        id: BUILDING_PROPS.WA_PROD_MODIFICATION,
        value: 0.5,
      },
    },
  },
};
