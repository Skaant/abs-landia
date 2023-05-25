import { BUILDING_PROPS_DATA } from "../data/building-props.data";
import { BuildingData } from "../data/buildings.data";
import { BUILDING_PROPS } from "../enums/building-props.enum";
import { BuildingProp } from "../types/BuildingProps";

const TOP_BUILDING_PROPS = [BUILDING_PROPS.WA_COST, BUILDING_PROPS.JING_COST];

export function getBuildingDescription({
  name,
  description,
  props,
}: BuildingData): string {
  const [topProps, otherProps] = Object.entries(props).reduce(
    (acc, [id, prop]) => {
      if (TOP_BUILDING_PROPS.includes(id as BUILDING_PROPS)) {
        acc[0].push(prop);
      } else {
        acc[1].push(prop);
      }
      return acc;
    },
    [[], []] as [BuildingProp[], BuildingProp[]]
  );

  return `${name}

${description}${
    topProps.length
      ? `
  
${topProps
  .map(
    (prop) => `${BUILDING_PROPS_DATA[prop.id]?.name || prop.id} : ${prop.value}`
  )
  .join("\n")}`
      : ""
  }${
    otherProps.length
      ? `
  
${otherProps
  .map(
    (prop) =>
      `${BUILDING_PROPS_DATA[prop.id]?.name || prop.id} : ${
        prop.value > 0 ? "+" : ""
      }${prop.value}${prop["range"] ? ` (portée : ${prop["range"]})` : ""}`
  )
  .join("\n")}`
      : ""
  }
`;
}
