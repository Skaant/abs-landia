import { writable } from "svelte/store";
import { TIPS } from "../enums/tips.enum";
import { UI_ELEMENTS } from "../enums/ui-elements.enum";
import { Zum } from "../types/Zum";
import { TRIBES } from "../enums/tribes.enum";

type UIStateIndex = {
  [UI_ELEMENTS.RESEARCHES]: boolean;
  [UI_ELEMENTS.TIP]?: TIPS;
  [UI_ELEMENTS.ZUM_AFFINITIES]?:
    | false
    | {
        zum: Zum;
        tribe: TRIBES;
      };
};

const { subscribe, set, update } = writable<UIStateIndex>({
  [UI_ELEMENTS.RESEARCHES]: false,
  [UI_ELEMENTS.TIP]: TIPS.ATTERRISSAGE_IMMINENT,
});

export const UIState = {
  subscribe,
  /** @deprecated Use specific setters instead */
  set,
  setTip: (tip?: TIPS) =>
    update((state) => ({
      ...state,
      [UI_ELEMENTS.TIP]: tip,
    })),
  toggleZumTribeAffinities: (zum?: Zum, tribe?: TRIBES) =>
    update((state) => {
      if (!zum || !tribe)
        return { ...state, [UI_ELEMENTS.ZUM_AFFINITIES]: false };
      const current = state[UI_ELEMENTS.ZUM_AFFINITIES];
      return {
        ...state,
        [UI_ELEMENTS.ZUM_AFFINITIES]:
          current && zum.id === current.zum.id && tribe === current.tribe
            ? false
            : { zum, tribe },
      };
    }),
  toggleElement: (element: UI_ELEMENTS.RESEARCHES) =>
    update((state) => ({
      ...state,
      [element]: !state[element],
    })),
};
