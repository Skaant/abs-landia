import { Writable, derived, writable } from "svelte/store";
import { Grid } from "../types/Grid";
import { generateGrid } from "../helpers/generateGrid";
import { Cell, CellsIndex } from "../types/Cell";

function createGridStore() {
  const grid = generateGrid(3, 1);
  grid.cells["1-1"].zumId = "zum-alpha";

  const { subscribe, set, update } = writable<Grid>(grid);

  return {
    subscribe,
    set,
    update,
    updateCells: (cells: CellsIndex) => update((grid) => ({ ...grid, cells })),
  };
}
export const grid = createGridStore();
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
export const gridSize = derived(grid, ($grid) => [
  Math.abs($grid.xMin) + $grid.xMax + 1,
  Math.abs($grid.yMin) + $grid.yMax + 1,
]);
