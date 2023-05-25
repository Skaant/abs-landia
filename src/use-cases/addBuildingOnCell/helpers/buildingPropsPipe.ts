import { BuildingDataProps } from "../../../data/buildings.data";
import { BUILDING_PROPS } from "../../../enums/building-props.enum";
import {
  BuildingPropJingCost,
  BuildingPropJingModification,
  BuildingPropWaCost,
  BuildingPropWaModification,
} from "../../../types/BuildingProps";
import { applyGlobalRessourcesCostOrModification } from "../../helpers/applyGlobalRessourcesCostOrModification";
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
    }
  });
  return pipeStores;
}
