import { get } from "svelte/store";
import { zums } from "../../stores/zums.store";
import { addDataToEveryZum } from "./helpers/addDataToEveryZum";
import { transferEveryZumDataToHolOng } from "./helpers/transferEveryZumDataToHolOng";
import { cycles } from "../../stores/cycles.store";
import { globalRessources } from "../../stores/global-ressources.store";
import { addGlobalRessourcesProduction } from "./addGlobalRessourcesProduction";
import { mutateCellsWighld } from "./helpers/mutateCellsWighld";
import { HOL_ONG_DATA_GOAL } from "../../data/game.data";
import { RESSOURCES } from "../../enums/ressources.enum";
import { tutorial } from "../../stores/tutorial.store";
import { mutateTips } from "../../stores/helpers/mutateTips";
import { TIPS_TRANSITIONS } from "../../enums/tips-transitions.enum";
import { grid } from "../../stores/grid.store";
import { mutateCellsWetness } from "./helpers/mutateCellsWetness";
import { Zum } from "../../types/Zum";

export function passTurn() {
  // Store access
  let _cells = get(grid).cells;
  let _globalRessources = get(globalRessources);
  let _zums = { ...get(zums) };

  // MUTATIONS LOGIC

  // Random WIGHLD mutation
  _cells = mutateCellsWetness(_cells);
  _cells = mutateCellsWighld(_cells);

  // Ressources production
  _globalRessources = addGlobalRessourcesProduction(_globalRessources);

  // ZUMS data production
  _zums = addDataToEveryZum(_zums, _cells);

  // ZUMS data transfer to HOL-ZONG
  const transfer = transferEveryZumDataToHolOng(_zums, _cells);
  _zums = transfer[0];
  _globalRessources[RESSOURCES.HOL_ONG_DATA].value += transfer[1];

  Object.values(_zums).forEach(
    (zum) =>
      (_zums[zum.id] = { ..._zums[zum.id], actions: 1, movements: 3 } as Zum)
  );

  // Tutorial transition to step 2
  if (
    get(tutorial).step === 1 &&
    _globalRessources[RESSOURCES.HOL_ONG_DATA].value >= 10
  ) {
    tutorial.setTutorialStep(2);
    mutateTips(TIPS_TRANSITIONS.CONNEXION_REQUISE);
  }

  // Victory condition
  if (_globalRessources[RESSOURCES.HOL_ONG_DATA].value >= HOL_ONG_DATA_GOAL) {
    alert(`Victoire !`);
  }

  // Stores update
  cycles.increment();
  grid.updateCells(_cells);
  zums.set(_zums);
  globalRessources.set(_globalRessources);
}
