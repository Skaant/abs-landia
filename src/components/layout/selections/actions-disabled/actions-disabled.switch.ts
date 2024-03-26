import { ACTIONS } from "../../../../enums/actions.enum";
import { isCollectWaDisabled } from "./isCollectWaDisabled";
import { isHarvestJingDisabled } from "./isHarvestJingDisabled";
import { isMeditateDisabled } from "./isMeditateDisabled";

export const ACTIONS_DISABLED: { [key in ACTIONS]?: (...args: any[]) => void } =
  {
    [ACTIONS.COLLECT_WA]: isCollectWaDisabled,
    [ACTIONS.HARVEST_JING]: isHarvestJingDisabled,
    [ACTIONS.MEDITATE]: isMeditateDisabled,
  };
