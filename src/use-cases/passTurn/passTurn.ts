import { get } from "svelte/store";
import { zums } from "../../stores/zums.store";
import { addDataToEveryZum } from "./helpers/addDataToEveryZum";
import { cells } from "../../stores/map.store";
import { transferEveryZumDataToHolOng } from "./helpers/transferEveryZumDataToHolOng";
import { cycles } from "../../stores/cycles.store";
import { holOngData } from "../../stores/hol-ong-data.store";

export function passTurn() {
  const _cells = get(cells);
  let _zums = { ...get(zums) };
  _zums = addDataToEveryZum(_zums, _cells);
  const transfer = transferEveryZumDataToHolOng(_zums, _cells);
  _zums = transfer[0];
  cycles.increment();
  holOngData.increment(transfer[1]);
  zums.set(_zums);
}
