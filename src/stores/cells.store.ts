import { writable } from "svelte/store";
import { type CellsIndex } from "../types/Cell";
import { generateCells } from "../helpers/generateCells";

export const LENGTH_X = 8;
export const LENGTH_Y = 8;

/** @deprecated Use grid store's cells */
export const cells = writable<CellsIndex>(generateCells(LENGTH_X, LENGTH_Y));
