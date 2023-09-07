import { Cell } from "../types/Cell";

export function cellFactory({
  wighld,
  ...cell
}: Pick<Cell, "x" | "y"> &
  Partial<Cell> & {
    /**
     *  Will be use to set `intrinsicWighld` and,
     *    consequently, `effectiveWighld`.
     *  */
    wighld?: number;
  }): Cell {
  return {
    id: `${cell.x}-${cell.y}`,
    connectivity: 0.5,
    intrinsicWighld: wighld || 0,
    effectiveWighld: wighld || 0,
    ...cell,
  };
}
