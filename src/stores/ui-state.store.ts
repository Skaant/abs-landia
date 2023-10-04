import { writable } from "svelte/store";
import { TIPS } from "../enums/tips.enum";
import { UI_ELEMENTS } from "../enums/ui-elements.enum";

type UIStateIndex = {
  [UI_ELEMENTS.RESEARCHES]: boolean;
  [UI_ELEMENTS.TIP]?: TIPS;
};

const { subscribe, set, update } = writable<UIStateIndex>({
  [UI_ELEMENTS.RESEARCHES]: false,
  [UI_ELEMENTS.TIP]: TIPS.ATTERRISSAGE,
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
  toggleElement: (element: UI_ELEMENTS.RESEARCHES) =>
    update((state) => ({
      ...state,
      [element]: !state[element],
    })),
};
