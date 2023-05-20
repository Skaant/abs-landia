import { Zum } from "../types/Zum";

export function zumFactory(
  zum: Pick<Zum, "id" | "cellId"> & Partial<Zum>
): Zum {
  return {
    data: 0,
    ...zum,
  };
}
