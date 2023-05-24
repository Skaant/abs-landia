import { get } from "svelte/store";
import { cells as cellsStore } from "../../stores/map.store";
import { BUILDINGS } from "../../enums/buildings.enum";
import { Cell } from "../../types/Cell";
import { addBuildingToStore } from "../helpers/addBuildingToStore";
import { createBuilding } from "../helpers/createBuilding";
import { preUpdateCellsWithBuilding } from "../helpers/preUpdateCellsWithBuilding";
import { BUILDINGS_DATA } from "../../data/buildings.data";
import { BUILDING_PROPS } from "../../enums/building-props.enum";
import { preUpdateCellsWithRangeDecreasingWighld } from "../helpers/preUpdateCellsWithRangeDecreasingWighld";
import {
  BuildingPropRangeConnectivityModification,
  BuildingPropRangeDecreasingWighldModification,
  BuildingPropRangeUnburnAddWighld,
  BuildingPropZumsModification,
} from "../../types/BuildingProps";
import { createZumOnCells } from "../helpers/createZumOnCells";
import { addZumsToStore } from "../helpers/addZumsToStore";
import { preUpdateCellsWithZums } from "../helpers/preUpdateCellsWithZums";
import { selection } from "../../stores/selection.store";
import { preUpdateCellsWithConnectivity } from "../helpers/preUpdateCellsWithConnectivity";
import { preUpdateCellsWithRangeUnburnAddWighld } from "../helpers/preUpdateCellsWithRangeUnburnAddWighld";

export function addBuildingOnCell(type: BUILDINGS, cell: Cell) {
  const building = createBuilding({
    cellId: cell.id,
    type,
  });
  addBuildingToStore(building);
  let cells = { ...get(cellsStore) };
  cells = preUpdateCellsWithBuilding(cells, building);

  /* Condition props application */

  const { props } = BUILDINGS_DATA[type];
  if (props[BUILDING_PROPS.ZUMS_MODIFICATION]) {
    const zums = createZumOnCells(
      cells,
      cell,
      props[BUILDING_PROPS.ZUMS_MODIFICATION] as BuildingPropZumsModification
    );
    addZumsToStore(zums);
    cells = preUpdateCellsWithZums(cells, zums);
  }
  if (props[BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION]) {
    cells = preUpdateCellsWithRangeDecreasingWighld(
      cells,
      cell,
      props[
        BUILDING_PROPS.RANGE_DECREASING_WIGHLD_MODIFICATION
      ] as BuildingPropRangeDecreasingWighldModification
    );
  }
  if (props[BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD]) {
    cells = preUpdateCellsWithRangeUnburnAddWighld(
      cells,
      cell,
      props[
        BUILDING_PROPS.RANGE_UNBURN_ADD_WIGHLD
      ] as BuildingPropRangeUnburnAddWighld
    );
  }
  if (props[BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION]) {
    cells = preUpdateCellsWithConnectivity(
      cells,
      cell,
      props[
        BUILDING_PROPS.RANGE_CONNECTIVITY_MODIFICATION
      ] as BuildingPropRangeConnectivityModification
    );
  }

  cellsStore.set(cells);
  selection.set(undefined);
}