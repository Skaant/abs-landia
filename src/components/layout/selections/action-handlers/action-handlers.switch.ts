import { ACTIONS } from "../../../../enums/actions.enum";
import { collectWa } from "../../../../use-cases/_actions/collectWa/collectWa";
import { explore } from "../../../../use-cases/_actions/explore/explore";

export const ACTION_HANDLERS: { [key in ACTIONS]?: (...args: any[]) => void } =
  {
    [ACTIONS.EXPLORE]: explore,
    [ACTIONS.COLLECT_WA]: collectWa,
  };
