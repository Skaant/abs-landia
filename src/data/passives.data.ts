import { PASSIVES } from "../enums/passives.enum";

type PassiveData<T extends PASSIVES> = {
  id: T;
  name?: string;
  summary?: string;
  prerequisites?: string;
};

export const PASSIVES_DATA: { [key in PASSIVES]: PassiveData<key> } = {
  [PASSIVES.INTELLIGENCE_OF_GROWTH]: {
    id: PASSIVES.INTELLIGENCE_OF_GROWTH,
    name: "Intelligence de la croissance",
    summary: "+1💡 DATA/bâtiments en croissance adjacents",
  },
};
