import { AURA_EFFECTS } from "../../enums/aura-effects.enum";
import { getCellsInExactRange } from "../../helpers/getCellsInExactRange";
import { AuraRangeDecreasingWighldModification } from "../../types/Auras";
import { Cell } from "../../types/Cell";
import { PipeStores } from "../addBuildingOnCell/types/PipeStores";

export function applyCellsAuraRangeDecreasingWighldModification(
  { cells, ...pipeStore }: PipeStores,
  { value, range }: AuraRangeDecreasingWighldModification,
  cell: Cell
): PipeStores {
  if (!cells) throw new Error("cells is undefined");
  [...new Array(range)]
    .map((_, i) => getCellsInExactRange(cell, cells, i))
    .forEach((rangeCells, i) => {
      const _value = (range - i) * value;
      rangeCells
        .filter((cell) => !cell.burned)
        .forEach((cell) => {
          if (!cell.auraEffects) cell.auraEffects = [];
          cell.auraEffects.push({
            id: AURA_EFFECTS.WIGHLD_MODIFICATION,
            value: _value,
          });
          cell.effectiveWighld += _value;
          if (cell.effectiveWighld < 0) {
            cell.burned = true;
            cell.effectiveWighld = 0;
          } else if (cell.effectiveWighld > 5) cell.effectiveWighld = 5;
          cells[cell.id] = cell;
        });
    });
  return {
    cells,
    ...pipeStore,
  };
}
