import { writable } from "svelte/store";
import { type CellsIndex } from "../types/Cell";
import { generateCells } from "../helpers/generateCells";

export const LENGTH_X = 10;
export const LENGTH_Y = 10;

export const cells = writable<CellsIndex>(generateCells(LENGTH_X, LENGTH_Y));
