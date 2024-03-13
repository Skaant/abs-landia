import { get } from "svelte/store";
import { Zum } from "../../../../types/Zum";
import { cells } from "../../../../stores/grid.store";

export function isCollectWaDisabled(zum: Zum) {
  const _cells = get(cells);
  const cell = _cells[zum.cellId];
  if (!cell.revealed) return true;
  return cell.effectiveWetness < 3;
}
