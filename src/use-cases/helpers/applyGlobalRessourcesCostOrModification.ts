import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { RESSOURCES } from "../../enums/ressources.enum";
import {
  BuildingPropJingCost,
  BuildingPropJingModification,
  BuildingPropWaCost,
  BuildingPropWaModification,
} from "../../types/BuildingProps";
import { PipeStores } from "../addBuildingOnCell/types/PipeStores";

export function applyGlobalRessourcesCostOrModification(
  { globalRessources, ...pipeStore }: PipeStores,
  {
    id,
    value,
  }:
    | BuildingPropWaCost
    | BuildingPropJingCost
    | BuildingPropWaModification
    | BuildingPropJingModification
) {
  if (!globalRessources)
    throw new Error("Global ressources store is not defined");
  let ressource: RESSOURCES;
  switch (id) {
    case BUILDING_PROPS.WA_COST:
    case BUILDING_PROPS.WA_MODIFICATION:
      ressource = RESSOURCES.WA;
      break;
    case BUILDING_PROPS.JING_COST:
    case BUILDING_PROPS.JING_MODIFICATION:
      ressource = RESSOURCES.JING;
      break;
  }
  let diff: number;
  switch (id) {
    case BUILDING_PROPS.WA_COST:
    case BUILDING_PROPS.JING_COST:
      diff = -value;
      break;
    case BUILDING_PROPS.WA_MODIFICATION:
    case BUILDING_PROPS.JING_MODIFICATION:
      diff = value;
      break;
  }
  return {
    ...pipeStore,
    globalRessources: {
      ...globalRessources,
      [ressource]: {
        ...globalRessources[ressource],
        value: globalRessources[ressource].value + diff,
      },
    },
  } as PipeStores;
}
