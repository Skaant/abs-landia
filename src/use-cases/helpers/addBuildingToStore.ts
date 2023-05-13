import { get } from "svelte/store";
import { buildings } from "../../stores/buildings.store";
import { Building } from "../../types/Building";

export function addBuildingToStore(building: Building) {
  buildings.set({
    ...get(buildings),
    [building.id]: building,
  });
}
