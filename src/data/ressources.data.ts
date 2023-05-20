import { RESSOURCES } from "../enums/ressources.enum";

export type RessourceData = {
  id: RESSOURCES;
  name: string;
};

export const RESSOURCES_DATA: { [id in RESSOURCES]?: RessourceData } = {
  [RESSOURCES.ZUMS]: {
    id: RESSOURCES.ZUMS,
    name: "ZUMS",
  },
};
