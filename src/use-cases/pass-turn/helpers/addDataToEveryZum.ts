import { CellsIndex } from "../../../types/Cell";
import { ZumsIndex } from "../../../types/Zum";
import { addDataToZum } from "./addDataToZum";

export function addDataToEveryZum(
  zums: ZumsIndex,
  cells: CellsIndex
): ZumsIndex {
  return Object.values(zums).reduce((acc, zum) => {
    const cell = cells[zum.cellId];
    return {
      ...acc,
      [zum.id]: addDataToZum(zum, cell),
    };
  }, {} as ZumsIndex);
}
