import { writable } from "svelte/store";
import { TIPS } from "../enums/tips.enum";

type TutorialState = {
  step: number;
  tips: TIPS[];
  tipsRead: { [id in TIPS]?: true };
  tipsHistory: TIPS[];
};

const { subscribe, set, update } = writable<TutorialState>({
  step: 0,
  tips: [TIPS.ATTERRISSAGE, TIPS.EXPANS, TIPS.TERRAIN, TIPS.WIGHLD],
  tipsRead: { [TIPS.ATTERRISSAGE]: true },
  tipsHistory: [],
});

export const tutorial = {
  subscribe,
  /** @deprecated Use specific setters instead */
  set,
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
  mutateTips: (remove: TIPS[], add: TIPS[]) => {
    update((state) => {
      const tipsRead = { ...state.tipsRead };
      remove.forEach((tip) => delete tipsRead[tip]);
      // idea : after add, if tips > 10, auto archive oldest
      return {
        ...state,
        tips: [
          ...state.tips.filter((tip) => !remove.includes(tip)),
          ...(add || []),
        ],
      };
    });
  },
  historizeTip: (tip: TIPS) => {
    update((state) => ({
      ...state,
      tips: state.tips.filter((t) => t !== tip),
      tipsHistory: [...state.tipsHistory, tip],
    }));
  },
};
