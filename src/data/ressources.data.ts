import { RESSOURCES } from "../enums/ressources.enum";

export type RessourceData = {
  id: RESSOURCES;
  name: string;
  summary?: string;
};

export const RESSOURCES_DATA: { [id in RESSOURCES]?: RessourceData } = {
  [RESSOURCES.WA]: {
    id: RESSOURCES.WA,
    name: "WA",
    summary: `La WA est une des deux ressources de base, avec le JING.
    
Elle est utilisée pour faire pousser des bâtiments.

Elle est produite par divers bâtiments.

- La WA c'est la fraîcheur et l'humidité.`,
  },
  [RESSOURCES.JING]: {
    id: RESSOURCES.JING,
    name: "JING",
    summary: `Le JING est une des deux ressources de base, avec la WA.

Il est utilisé pour faire pousser des bâtiments.

Il est produit par divers bâtiments.

- Le JING c'est le fluide et la vitalité.`,
  },
  [RESSOURCES.ZUMS]: {
    id: RESSOURCES.ZUMS,
    name: "ZUMS",
  },
  [RESSOURCES.DATA_CORES]: {
    id: RESSOURCES.DATA_CORES,
    name: "Noyau de données",
  },
};
