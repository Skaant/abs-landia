import { get } from "svelte/store";
import { cells as cellsStore } from "../../stores/map.store";
import { BUILDINGS } from "../../enums/buildings.enum";
import { Cell, CellsIndex } from "../../types/Cell";
import { addBuildingToStore } from "../helpers/addBuildingToStore";
import { createBuilding } from "../helpers/createBuilding";
import { preUpdateCellsWithBuilding } from "../helpers/preUpdateCellsWithBuilding";
import { BUILDINGS_DATA } from "../../data/buildings.data";
import { BUILDING_PROPS } from "../../enums/building-props.enum";
import {
  BuildingPropRangeUnburnAddWighld,
  BuildingPropZumsModification,
} from "../../types/BuildingProps";
import { createZumOnCells } from "../helpers/createZumOnCells";
import { addZumsToStore } from "../helpers/addZumsToStore";
import { preUpdateCellsWithZums } from "../helpers/preUpdateCellsWithZums";
import { selection } from "../../stores/selection.store";
import { tutorial } from "../../stores/tutorial.store";
import { preUpdateCellsWithRangeUnburnAddWighld } from "../helpers/preUpdateCellsWithRangeUnburnAddWighld";
import { buildingPropsPipe } from "./helpers/buildingPropsPipe";
import {
  GlobalRessources,
  globalRessources as globalRessourcesStore,
} from "../../stores/global-ressources.store";
import { TIPS } from "../../enums/tips.enum";

export function addBuildingOnCell(type: BUILDINGS, cell: Cell) {
  if (type === BUILDINGS.KOLOS_SEED) {
    tutorial.setTutorialStep(1);
    tutorial.mutateTips(
      [TIPS.ATTERRISSAGE],
      [TIPS.ATTERRISSAGE_REUSSI, TIPS.BRULURE]
    );
  }
  const building = createBuilding({
    cellId: cell.id,
    type,
  });
  addBuildingToStore(building);
  let cells = { ...get(cellsStore) };
  cells = preUpdateCellsWithBuilding(cells, building);

  // Condition props application

  const { props } = BUILDINGS_DATA[type];
  let globalRessources = { ...get(globalRessourcesStore) };
  const pipeResult = buildingPropsPipe(
    {
      cells,
      globalRessources,
    },
    props,
    { cell }
  );
  cells = pipeResult.cells as CellsIndex;
  globalRessources = pipeResult.globalRessources as GlobalRessources;
  /**
   * All next `if` statements are obsolete.
   *
   * Should be reworked to match the new `apply...` shape functions.
   */
  if (props[BUILDING_PROPS.ZUMS_MODIFICATION]) {
    const zums = createZumOnCells(
      cells,
      cell,
      props[BUILDING_PROPS.ZUMS_MODIFICATION] as BuildingPropZumsModification
    );
    addZumsToStore(zums);
    cells = preUpdateCellsWithZums(cells, zums);
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

  // Sauvegarde

  globalRessourcesStore.set(globalRessources);
  cellsStore.set(cells);
  selection.set(undefined);
}
