import { ACTIONS_DATA } from "../data/actions.data";
import { BUILDINGS_DATA } from "../data/buildings.data";
import { PASSIVES_DATA } from "../data/passives.data";
import { ACTIONS } from "../enums/actions.enum";
import { BUILDINGS } from "../enums/buildings.enum";
import { PASSIVES } from "../enums/passives.enum";

export function getActionBuildingPassiveName({
  type,
  id,
}:
  | {
      type: "action";
      id: ACTIONS;
    }
  | {
      type: "building";
      id: BUILDINGS;
    }
  | {
      type: "passive";
      id: PASSIVES;
    }) {
  switch (type) {
    case "action":
      return ACTIONS_DATA[id].name;
    case "building":
      return BUILDINGS_DATA[id].name;
    case "passive":
      return PASSIVES_DATA[id].name;
  }
}
