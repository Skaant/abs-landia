import { Cell } from "../types/Cell";

export function cellFactory({
  wighld = 0,
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
    intrinsicWighld: wighld,
    effectiveWighld: wighld,
    ...cell,
  };
}
