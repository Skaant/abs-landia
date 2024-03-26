import { ACTIONS } from "../../../../enums/actions.enum";
import { collectWa } from "../../../../use-cases/_actions/collectWa/collectWa";
import { explore } from "../../../../use-cases/_actions/explore/explore";
import { harvestJing } from "../../../../use-cases/_actions/harvestJing/harvestJing";
import { meditate } from "../../../../use-cases/_actions/meditate/meditate";

export const ACTION_HANDLERS: { [key in ACTIONS]?: (...args: any[]) => void } =
  {
    [ACTIONS.EXPLORE]: explore,
    [ACTIONS.COLLECT_WA]: collectWa,
    [ACTIONS.HARVEST_JING]: harvestJing,
    [ACTIONS.MEDITATE]: meditate,
  };
