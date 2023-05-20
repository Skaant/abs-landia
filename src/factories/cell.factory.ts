import { Cell } from "../types/Cell";

export function cellFactory(cell: Pick<Cell, "x" | "y"> & Partial<Cell>): Cell {
  return {
    id: `${cell.x}-${cell.y}`,
    connectivity: 0.5,
    wighld: 0,
    ...cell,
  };
}
