import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { RESSOURCES } from "../../enums/ressources.enum";
import {
  BuildingPropJingProdModification,
  BuildingPropWaProdModification,
} from "../../types/BuildingProps";
import { PipeStores } from "../addBuildingOnCell/types/PipeStores";

export function applyGlobalRessourcesProdModification(
  { globalRessources, ...pipeStore }: PipeStores,
  {
    id,
    value,
  }: BuildingPropWaProdModification | BuildingPropJingProdModification
) {
  if (!globalRessources)
    throw new Error("Global ressources store is not defined");
  let ressource: RESSOURCES;
  switch (id) {
    case BUILDING_PROPS.WA_PROD_MODIFICATION:
      ressource = RESSOURCES.WA;
      break;
    case BUILDING_PROPS.JING_PROD_MODIFICATION:
      ressource = RESSOURCES.JING;
      break;
  }
  return {
    ...pipeStore,
    globalRessources: {
      ...globalRessources,
      [ressource]: {
        ...globalRessources[ressource],
        production: globalRessources[ressource].production + value,
      },
    },
  } as PipeStores;
}
