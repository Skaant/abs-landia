import { TRIBES } from "../enums/tribes.enum";

export type Zum = {
  id: string;
  cellId: string;
  actions: number;
  movements: number;
  data: number;
  affinities: {[tribe in TRIBES]?: number }
};

export type ZumsIndex = { [id: string]: Zum };
