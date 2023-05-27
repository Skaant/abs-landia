import { BUILDINGS_DATA } from "../data/buildings.data";
import { BUILDING_PROPS } from "../enums/building-props.enum";
import { BUILDINGS } from "../enums/buildings.enum";
import { RESSOURCES } from "../enums/ressources.enum";
import { GlobalRessources } from "../stores/global-ressources.store";
import {
  BuildingProp,
  BuildingPropJingCost,
  BuildingPropWaCost,
} from "../types/BuildingProps";

export function checkBuildingCost(
  building: BUILDINGS,
  globalRessources: GlobalRessources
): boolean {
  const { props } = BUILDINGS_DATA[building];
  return (
    [BUILDING_PROPS.WA_COST, BUILDING_PROPS.JING_COST] as BUILDING_PROPS[]
  )
    .filter((prop) => props[prop])
    .every((prop) => {
      const cost = props[prop] as BuildingProp;
      let ressource: undefined | RESSOURCES = undefined;
      switch (prop) {
        case BUILDING_PROPS.WA_COST:
          ressource = RESSOURCES.WA;
          break;
        case BUILDING_PROPS.JING_COST:
          ressource = RESSOURCES.JING;
          break;
      }
      if (!ressource) throw new Error("Prop ressource not found");
      const { value } = globalRessources[ressource];
      return value >= (cost as BuildingPropWaCost | BuildingPropJingCost).value;
    });
}
