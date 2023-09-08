import { RESSOURCES } from "../../enums/ressources.enum";
import { GlobalRessources } from "../../stores/global-ressources.store";

export function addGlobalRessourcesProduction(
  globalRessources: GlobalRessources
): GlobalRessources {
  return {
    ...globalRessources,
    ...[
      RESSOURCES.WA,
      RESSOURCES.JING,
      RESSOURCES.HOL_ONG_DATA,
      RESSOURCES.DATA_CORES,
    ].reduce((acc, ressource) => {
      let newValue =
        globalRessources[ressource].value +
        globalRessources[ressource].production;
      if (newValue < 0) newValue = 0;
      if (newValue > globalRessources[ressource].maximum)
        newValue = globalRessources[ressource].maximum;
      return {
        ...acc,
        [ressource]: {
          ...acc[ressource],
          value: newValue,
        },
      };
    }, globalRessources),
  };
}
