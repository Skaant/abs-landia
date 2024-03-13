import { getRandomWetness } from "../helpers/values/getRandomWetness";
import { getRandomWighld } from "../helpers/values/getRandomWighld";
import { Cell } from "../types/Cell";

export function cellFactory({
  wetness,
  wighld,
  ...cell
}: Pick<Cell, "x" | "y"> &
  Partial<Cell> & {
    /**
     *  Will be use to set `intrinsicWetness` and,
     *    consequently, `effectiveWetness`.
     *  */
    wetness?: number;
    /**
     *  Will be use to set `intrinsicWighld` and,
     *    consequently, `effectiveWighld`.
     *  */
    wighld?: number;
  }): Cell {
  const _wetness = wetness === undefined ? getRandomWetness() : wetness;
  const _wighld = wighld === undefined ? getRandomWighld(wetness) : wighld;
  return {
    id: `${cell.x},${cell.y}`,
    connectivity: 0.5,
    intrinsicWetness: _wetness,
    effectiveWetness: _wetness,
    intrinsicWighld: _wighld,
    effectiveWighld: _wighld,
    ...cell,
  };
}
