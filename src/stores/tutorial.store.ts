import { writable } from "svelte/store";
import { TIPS } from "../enums/tips/tips.enum";
import { TIPS_TUTORIAL } from "../enums/tips/tips-tutorial.enum";

type TutorialState = {
  step: number;
  tipsOpen: boolean;
  tips: TIPS[];
  tipsRead: { [id in TIPS]?: true };
  tipsHistory: TIPS[];
};

const { subscribe, set, update } = writable<TutorialState>({
  step: 0,
  tipsOpen: false,
  tips: [TIPS_TUTORIAL.WELCOME],
  tipsRead: { [TIPS_TUTORIAL.WELCOME]: true },
  tipsHistory: [],
});

export const tutorial = {
  subscribe,
  /** @deprecated Use specific setters instead */
  set,
  update,
  tipsToggle: () =>
    update((state) => ({ ...state, tipsOpen: !state.tipsOpen })),
  setTutorialStep: (step: number) =>
    update((state) => ({
      ...state,
      step,
    })),
  readTip: (tip: TIPS) =>
    update((state) => ({
      ...state,
      tipsRead: {
        ...state.tipsRead,
        [tip]: true,
      },
    })),
  historizeTip: (tip: TIPS) => {
    update((state) => ({
      ...state,
      tips: state.tips.filter((t) => t !== tip),
      tipsHistory: [...state.tipsHistory, tip],
    }));
  },
};
