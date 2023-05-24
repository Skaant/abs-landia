import { Cell } from "../../../types/Cell";
import { Zum } from "../../../types/Zum";

export function transferZumDataToHolOng(zum: Zum, cell: Cell): [Zum, number] {
  if (zum.data - cell.connectivity >= 0) {
    zum.data -= cell.connectivity;
    return [zum, cell.connectivity];
  } else {
    const data = zum.data;
    zum.data = 0;
    return [zum, cell.connectivity + (data - cell.connectivity)];
  }
}
