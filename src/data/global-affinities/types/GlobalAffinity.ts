import { ACTIONS } from "../../../enums/actions.enum";
import { BUILDINGS } from "../../../enums/buildings.enum";
import { PASSIVES } from "../../../enums/passives.enum";

export type GlobalAffinity = (PASSIVES | ACTIONS | BUILDINGS)[][];