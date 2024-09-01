import { TIPS } from "../../enums/tips/tips.enum";
import { tutorial } from "../tutorial.store";
import { UIState } from "../ui-state.store";

export function selectTip(tip: TIPS) {
  UIState.setTip(tip);
  tutorial.readTip(tip);
}
