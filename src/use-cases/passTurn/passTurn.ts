import { get } from "svelte/store";
import { zums } from "../../stores/zums.store";
import { addDataToEveryZum } from "./helpers/addDataToEveryZum";
import { cells } from "../../stores/map.store";
import { transferEveryZumDataToHolOng } from "./helpers/transferEveryZumDataToHolOng";
import { cycles } from "../../stores/cycles.store";
import { globalRessources } from "../../stores/global-ressources.store";
import { addGlobalRessourcesProduction } from "./addGlobalRessourcesProduction";
import { mutateCellsWighld } from "./helpers/mutateCellsWighld";
import { HOL_ONG_DATA_GOAL } from "../../data/game.data";
import { RESSOURCES } from "../../enums/ressources.enum";
import { tutorial } from "../../stores/tutorial.store";
import { TIPS } from "../../enums/tips.enum";
import { selectTip } from "../../stores/helpers/selectTip";

export function passTurn() {
  let _cells = get(cells);
  _cells = mutateCellsWighld(_cells);
  cells.set(_cells);
  let _zums = { ...get(zums) };
  _zums = addDataToEveryZum(_zums, _cells);
  const transfer = transferEveryZumDataToHolOng(_zums, _cells);
  _zums = transfer[0];
  cycles.increment();
  zums.set(_zums);
  const _globalRessources = addGlobalRessourcesProduction(
    get(globalRessources)
  );
  _globalRessources[RESSOURCES.HOL_ONG_DATA].value += transfer[1];
  if (
    get(tutorial).step === 1 &&
    _globalRessources[RESSOURCES.HOL_ONG_DATA].value >= 10
  ) {
    tutorial.setTutorialStep(2);
    tutorial.mutateTips([TIPS.CONNEXION_REQUISE], [TIPS.CONNEXION_ETABLIE]);
    selectTip(TIPS.CONNEXION_ETABLIE);
  }
  if (_globalRessources[RESSOURCES.HOL_ONG_DATA].value >= HOL_ONG_DATA_GOAL) {
    alert(`Victoire !`);
  }
  globalRessources.set(_globalRessources);
}
