import { ACTIONS } from "../enums/actions.enum";

type ActionData<T extends ACTIONS> = {
  id: T;
  name?: string;
  summary?: string;
  prerequisites?: string;
};

export const ACTIONS_DATA: { [key in ACTIONS]: ActionData<key> } = {
  [ACTIONS.INSTALL_BUILDING_PLANT]: {
    id: ACTIONS.INSTALL_BUILDING_PLANT,
    name: "🙇‍♀️🌱 Installer (bâtiment/plante) 🌾",
  },
  [ACTIONS.NURTURE]: {
    id: ACTIONS.NURTURE,
    name: "Choyer 🌾",
  },
  [ACTIONS.EXPLORE]: {
    id: ACTIONS.EXPLORE,
    name: "Explorer",
    summary:
      "Révèle les cases adjacentes, et en ajoute des non-révélées si il n'y en a pas.",
  },
  [ACTIONS.COLLECT_WA]: {
    id: ACTIONS.COLLECT_WA,
    name: "Collecter du 💧 WA",
    summary:
      "Utilise l'humidité d'une case pour collecter du 💧 WA // +0.5💧 WA +0.25💧 WA/💦 humidité de la case // +1 affinité tribu KOLOS",
    prerequisites: "💦 Humidité de la case > 2",
  },
  [ACTIONS.HARVEST_JING]: {
    id: ACTIONS.HARVEST_JING,
    name: "Ramasser du 🫘 JING",
    summary:
      "Récolte du 🫘 JING depuis le 🌳 WIGHLD de la case // +0.5 🫘 JING +0.25🫘 JING/🌳 WIGHLD de la case // +1 affinité 🍀 tribu PERMA",
    prerequisites: "🌳 WIGHLD de la case > 2",
  },
  [ACTIONS.MEDITATE]: {
    id: ACTIONS.MEDITATE,
    name: "Méditer",
    summary: "Fait le calme pour générer de la 💡 DATA. +5💡 DATA",
    prerequisites: "🌳 WIGHLD de la case < 4",
  },
};
