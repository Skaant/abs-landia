import { ACTIONS } from "../../../../enums/actions.enum";
import { isCollectWaDisabled } from "./isCollectWaDisabled";

export const ACTIONS_DISABLED: { [key in ACTIONS]?: (...args: any[]) => void } =
  {
    [ACTIONS.COLLECT_WA]: isCollectWaDisabled,
  };
