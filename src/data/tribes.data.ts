import { TRIBES } from "../enums/tribes.enum";

export const TRIBES_LIST: TRIBES[] = [
  TRIBES.KOLOS,
  TRIBES.NOV,
  TRIBES.PERMA,
  TRIBES.PSIKCX,
  TRIBES.TRAK,
];

type TribeData = {
  name: string;
  description?: string;
};

export const TRIBES_DATA: { [id in TRIBES]?: TribeData } = {
  [TRIBES.KOLOS]: {
    name: "Tribu KOLOS",
    description:
      "Spécialistes de l'établissement de nouvelles colonies. Favorisent la génération de ZUMS, la connectivité et stabilisent le WIGHLD.",
  },
  [TRIBES.NOV]: {
    name: "Tribu NOV",
  },
  [TRIBES.PERMA]: {
    name: "Tribu PERMA",
  },
  [TRIBES.PSIKCX]: {
    name: "Tribu PSIKCX",
  },
  [TRIBES.TRAK]: {
    name: "Tribu TRAK",
  },
};
