import { get } from "svelte/store";
import { cells as cellsStore } from "../stores/map.store";
import { Cell } from "../types/Cell";
import { addBuildingToStore } from "./helpers/addBuildingToStore";
import { createKolosSeedBuilding } from "./helpers/createKolosSeedBuilding";
import { preUpdateCellsWithBuilding } from "./helpers/preUpdateCellsWithBuilding";
import { preUpdateCellsWithWighld } from "./helpers/preUpdateCellsWithWighld";
import { createZumOnCells } from "./helpers/createZumOnCells";
import { getCellsInExactRange } from "../helpers/getCellsInExactRange";
import { addZumsToStore } from "./helpers/addZumsToStore";
import { preUpdateCellsWithZums } from "./helpers/preUpdateCellsWithZums";

export function addKolosSeedOnCell(cell: Cell) {
  const building = createKolosSeedBuilding(cell.id);
  addBuildingToStore(building);
  let cells = { ...get(cellsStore) };
  cells = preUpdateCellsWithBuilding(cells, building);
  cells = preUpdateCellsWithWighld(cells, cell);
  const zums = createZumOnCells(getCellsInExactRange(cell, cells, 1));
  addZumsToStore(zums);
  cells = preUpdateCellsWithZums(cells, zums);
  cellsStore.set(cells);
}
