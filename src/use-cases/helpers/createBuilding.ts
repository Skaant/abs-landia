import { get } from "svelte/store";
import { buildings } from "../../stores/buildings.store";
import { Building } from "../../types/Building";

export function createBuilding({
  cellId,
  type,
}: Pick<Building, "cellId" | "type">): Building {
  const id = Object.values(get(buildings)).length.toString();
  return {
    id,
    cellId,
    type,
  };
}
