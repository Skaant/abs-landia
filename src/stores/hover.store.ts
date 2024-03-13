import { writable } from "svelte/store";
import { Cell } from "../types/Cell";
import { Zum } from "../types/Zum";
import { ACTIONS } from "../enums/actions.enum";

export type HoverCell = {
  type: "cell";
  cell: Cell;
};
export type HoverZum = {
  type: "zum";
  zum: Zum;
};
type HoverAction = {
  type: "action";
  action: ACTIONS;
};

export type Hover = undefined | HoverCell | HoverZum | HoverAction;

const { subscribe, set, update } = writable<Hover>(undefined);

export const hover = {
  subscribe,
  set,
  update,
  select(target: Hover) {
    set(target);
  },
  unselect() {
    set(undefined);
  },
};
