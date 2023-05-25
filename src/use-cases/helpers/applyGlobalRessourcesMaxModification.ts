import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { RESSOURCES } from "../../enums/ressources.enum";
import {
  BuildingPropJingMaxModification,
  BuildingPropWaMaxModification,
} from "../../types/BuildingProps";
import { PipeStores } from "../addBuildingOnCell/types/PipeStores";

export function applyGlobalRessourcesMaxModification(
  { globalRessources, ...pipeStore }: PipeStores,
  { id, value }: BuildingPropWaMaxModification | BuildingPropJingMaxModification
) {
  if (!globalRessources)
    throw new Error("Global ressources store is not defined");
  let ressource: RESSOURCES;
  switch (id) {
    case BUILDING_PROPS.WA_MAX_MODIFICATION:
      ressource = RESSOURCES.WA;
      break;
    case BUILDING_PROPS.JING_MAX_MODIFICATION:
      ressource = RESSOURCES.JING;
      break;
  }
  return {
    ...pipeStore,
    globalRessources: {
      ...globalRessources,
      [ressource]: {
        ...globalRessources[ressource],
        maximum: globalRessources[ressource].maximum + value,
      },
    },
  } as PipeStores;
}
