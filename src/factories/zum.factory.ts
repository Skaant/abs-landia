import { Zum } from "../types/Zum";

export function zumFactory(
  zum: Pick<Zum, "id" | "cellId"> & Partial<Zum>
): Zum {
  return {
    actions: 1,
    movements: 3,
    data: 0,
    affinities: {} as Zum["affinities"],
    ...zum,
  };
}
