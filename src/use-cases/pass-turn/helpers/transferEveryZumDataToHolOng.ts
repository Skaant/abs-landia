import { CellsIndex } from "../../../types/Cell";
import { ZumsIndex } from "../../../types/Zum";
import { transferZumDataToHolOng } from "./transferZumDataToHolOng";

export function transferEveryZumDataToHolOng(
  zums: ZumsIndex,
  cells: CellsIndex
): [ZumsIndex, number] {
  const data = Object.values(zums).reduce((acc, zum) => {
    const cell = cells[zum.cellId];
    const [updatedZum, data] = transferZumDataToHolOng(zum, cell);
    zums[zum.id] = updatedZum;
    return acc + data;
  }, 0);
  return [zums, data];
}
