import { Writable, derived, writable } from "svelte/store";
import { Grid } from "../types/Grid";
import { generateGrid } from "../helpers/generateGrid";
import { Cell } from "../types/Cell";

export const grid = writable<Grid>(generateGrid(3, 1));
export const cells = derived(grid, ($grid) => $grid.cells);
/** UI display order : [-y][x] */
export const rows = derived<Writable<Grid>, Cell[][]>(grid, ($grid) =>
  [...new Array(Math.abs($grid.yMin) + $grid.yMax + 1)].map((_, i) => {
    const y = $grid.yMin + i;
    return [...new Array(Math.abs($grid.xMin) + $grid.xMax + 1)].map((_, j) => {
      const x = $grid.xMin + j;
      return $grid.cells[`${x}-${y}`];
    });
  })
);
