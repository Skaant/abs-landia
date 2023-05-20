import { BUILDING_PROPS_DATA } from "../data/building-props.data";
import { BuildingData } from "../data/buildings.data";

export function getBuildingDescription({
  name,
  description,
  props,
}: BuildingData): string {
  return `${name}

${description}

${Object.values(props)
  .map(
    (prop) =>
      `${BUILDING_PROPS_DATA[prop.id]?.name || prop.id} : ${
        prop.value > 0 ? "+" : ""
      }${prop.value}${prop["range"] ? ` (portée : ${prop["range"]})` : ""}`
  )
  .join("\n")}
`;
}
