import { BuildingDataProps } from "../../../data/buildings.data";
import { BUILDING_PROPS } from "../../../enums/building-props.enum";
import {
  BuildingPropJingCost,
  BuildingPropJingMaxModification,
  BuildingPropJingModification,
  BuildingPropJingProdModification,
  BuildingPropWaCost,
  BuildingPropWaMaxModification,
  BuildingPropWaModification,
  BuildingPropWaProdModification,
} from "../../../types/BuildingProps";
import { applyGlobalRessourcesCostOrModification } from "../../helpers/applyGlobalRessourcesCostOrModification";
import { applyGlobalRessourcesMaxModification } from "../../helpers/applyGlobalRessourcesMaxModification";
import { applyGlobalRessourcesProdModification } from "../../helpers/applyGlobalRessourcesProdModification";
import { PipeStores } from "../types/PipeStores";

const PROP_PRIORITIES = [
  BUILDING_PROPS.WA_MAX_MODIFICATION,
  BUILDING_PROPS.JING_MAX_MODIFICATION,
  BUILDING_PROPS.WA_COST,
  BUILDING_PROPS.JING_COST,
  BUILDING_PROPS.WA_MODIFICATION,
  BUILDING_PROPS.JING_MODIFICATION,
];

export function buildingPropsPipe(
  pipeStores: PipeStores,
  props: BuildingDataProps
) {
  Object.values(props)
    .sort((a, b) => {
      const aIndex = PROP_PRIORITIES.indexOf(a.id);
      const bIndex = PROP_PRIORITIES.indexOf(b.id);
      if (aIndex > -1 && bIndex > -1) {
        return aIndex - bIndex;
      } else return -1;
    })
    .forEach((prop) => {
      switch (prop.id) {
        case BUILDING_PROPS.WA_COST:
        case BUILDING_PROPS.JING_COST:
        case BUILDING_PROPS.WA_MODIFICATION:
        case BUILDING_PROPS.JING_MODIFICATION:
          pipeStores = applyGlobalRessourcesCostOrModification(
            pipeStores,
            prop as
              | BuildingPropWaCost
              | BuildingPropJingCost
              | BuildingPropJingCost
              | BuildingPropWaModification
              | BuildingPropJingModification
          );
          break;
        case BUILDING_PROPS.WA_PROD_MODIFICATION:
        case BUILDING_PROPS.JING_PROD_MODIFICATION:
          pipeStores = applyGlobalRessourcesProdModification(
            pipeStores,
            prop as
              | BuildingPropWaProdModification
              | BuildingPropJingProdModification
          );
          break;
        case BUILDING_PROPS.WA_MAX_MODIFICATION:
        case BUILDING_PROPS.JING_MAX_MODIFICATION:
          pipeStores = applyGlobalRessourcesMaxModification(
            pipeStores,
            prop as
              | BuildingPropWaMaxModification
              | BuildingPropJingMaxModification
          );
          break;
      }
    });
  return pipeStores;
}
