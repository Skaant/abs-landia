import { writable } from "svelte/store";
import { UI_ELEMENTS } from "../enums/ui-elements.enum";

type UIStateIndex = { [key in UI_ELEMENTS]?: boolean };

export const UIState = writable<UIStateIndex>({
  [UI_ELEMENTS.RESEARCHES]: false,
});
