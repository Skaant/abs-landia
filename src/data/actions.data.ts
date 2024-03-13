import { ACTIONS } from "../enums/actions.enum";

type ActionData<T extends ACTIONS> = {
  id: T;
  name?: string;
  summary?: string;
  prerequisites?: string;
};

export const ACTIONS_DATA: { [key in ACTIONS]: ActionData<key> } = {
  [ACTIONS.EXPLORE]: {
    id: ACTIONS.EXPLORE,
    name: "Explorer",
    summary: "Ajoute des cases non-révélées autour.",
  },
  [ACTIONS.COLLECT_WA]: {
    id: ACTIONS.COLLECT_WA,
    name: "Collecter du 💧 WA",
    summary: "Utilise l'humidité d'une case pour collecter du 💧 WA.",
    prerequisites: "💦 Humidité de la case > 2",
  },
  [ACTIONS.HARVEST_JING]: {
    id: ACTIONS.HARVEST_JING,
    name: "Ramasser du 🫘 JING",
    summary: "Récolte du 🫘 JING depuis le 🌳 WIGHLD de la case. +2🫘 JING",
    prerequisites: "🌳 WIGHLD de la case > 2",
  },
  [ACTIONS.MEDITATE]: {
    id: ACTIONS.MEDITATE,
    name: "Méditer",
    summary: "Fait le calme pour générer de la 💡 DATA. +5💡 DATA",
    prerequisites: "🌳 WIGHLD de la case < 4",
  },
};
