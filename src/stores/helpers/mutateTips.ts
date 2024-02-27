import { TIPS_TRANSITIONS_DATA } from "../../data/tips-transitions.data";
import { TIPS_TRANSITIONS } from "../../enums/tips-transitions.enum";
import { tutorial } from "../tutorial.store";
import { selectTip } from "./selectTip";

export function mutateTips(transition: TIPS_TRANSITIONS) {
  const [remove, add] = TIPS_TRANSITIONS_DATA[transition];
  tutorial.update((state) => {
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
  selectTip(add[0]);
}
