import { AURA_EFFECTS } from "../../enums/aura-effects.enum";
import { getCellsInExactRange } from "../../helpers/getCellsInExactRange";
import { getCellsInRange } from "../../helpers/getCellsInRange";
import {
  AuraRangeConnectivityModification,
  AuraRangeDecreasingWighldModification,
} from "../../types/Auras";
import { Cell } from "../../types/Cell";
import { PipeStores } from "../addBuildingOnCell/types/PipeStores";

export function applyCellsAuraRangeConnectivityModification(
  { cells, ...pipeStore }: PipeStores,
  { value, range }: AuraRangeConnectivityModification,
  cell: Cell
): PipeStores {
  if (!cells) throw new Error("cells is undefined");
  getCellsInRange(cells, cell, range).forEach((_cell) => {
    if (!_cell.auraEffects) _cell.auraEffects = [];
    _cell.auraEffects.push({
      id: AURA_EFFECTS.CONNECTIVITY_MODIFICATION,
      value,
    });
    _cell.connectivity += value;
    if (_cell.connectivity < 0) {
      _cell.connectivity = 0;
    }
    cells[_cell.id] = _cell;
  });
  return {
    cells,
    ...pipeStore,
  };
}
