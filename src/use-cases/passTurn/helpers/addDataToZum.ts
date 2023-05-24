import { Cell } from "../../../types/Cell";
import { Zum } from "../../../types/Zum";

export function addDataToZum(zum: Zum, cell: Cell): Zum {
  zum.data += 0.5 + cell.wighld * 0.5;
  return zum;
}
