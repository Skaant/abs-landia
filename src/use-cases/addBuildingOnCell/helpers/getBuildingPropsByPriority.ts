import { BuildingDataProps } from "../../../data/buildings.data";
import { BUILDING_PROPS } from "../../../enums/building-props.enum";
import { BuildingProp } from "../../../types/BuildingProps";

const PROP_PRIORITIES = [
  BUILDING_PROPS.WA_MAX_MODIFICATION,
  BUILDING_PROPS.JING_MAX_MODIFICATION,
  BUILDING_PROPS.WA_COST,
  BUILDING_PROPS.JING_COST,
  BUILDING_PROPS.WA_MODIFICATION,
  BUILDING_PROPS.JING_MODIFICATION,
].reverse();

export function getBuildingPropsByPriority(
  props: BuildingDataProps
): BuildingProp[] {
  return Object.values<BuildingProp>(props).sort((a, b) => {
    const aIndex = PROP_PRIORITIES.indexOf(a.id as BUILDING_PROPS);
    const bIndex = PROP_PRIORITIES.indexOf(b.id as BUILDING_PROPS);
    return bIndex - aIndex;
  });
}
