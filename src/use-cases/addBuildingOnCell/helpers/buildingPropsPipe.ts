import { BuildingDataProps } from "../../../data/buildings.data";
import { BUILDING_PROPS } from "../../../enums/building-props.enum";
import {
  BuildingPropJingCost,
  BuildingPropJingMaxModification,
  BuildingPropJingModification,
  BuildingPropWaCost,
  BuildingPropWaMaxModification,
  BuildingPropWaModification,
} from "../../../types/BuildingProps";
import { applyGlobalRessourcesCostOrModification } from "../../helpers/applyGlobalRessourcesCostOrModification";
import { applyGlobalRessourcesMaxModification } from "../../helpers/applyGlobalRessourcesMaxModification";
import { PipeStores } from "../types/PipeStores";

export function buildingPropsPipe(
  pipeStores: PipeStores,
  props: BuildingDataProps
) {
  Object.values(props).forEach((prop) => {
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
      case BUILDING_PROPS.WA_MAX_MODIFICATION:
      case BUILDING_PROPS.JING_MAX_MODIFICATION:
        pipeStores = applyGlobalRessourcesMaxModification(
          pipeStores,
          prop as
            | BuildingPropWaMaxModification
            | BuildingPropJingMaxModification
        );
    }
  });
  return pipeStores;
}
