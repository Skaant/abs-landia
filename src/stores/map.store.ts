import { derived, writable } from "svelte/store";
import type { Row } from "../types/Row";
import { generateRows } from "../helpers/generateRows";
import {
  CalculatedCell,
  type CalculatedCellsIndex,
  type CellsIndex,
} from "../types/Cell";
import { generateCells } from "../helpers/generateCells";
import type { Building, BuildingsIndex } from "../types/Building";
import { BUILDINGS } from "../enums/buildings.enum";
import { getCellsInExactRange } from "../helpers/getCellsInExactRange";

export const x = 10;
export const y = 10;

let _buildings: BuildingsIndex = {};
export const buildings = writable<BuildingsIndex>({});
buildings.subscribe((value) => console.log("b", value));

export const cells = writable<CellsIndex>(generateCells(x, y));
cells.subscribe((value) => console.log("c", value));

let _calculatedCells: CalculatedCellsIndex;
export const calculatedCells = derived<
  [typeof buildings, typeof cells],
  CalculatedCellsIndex
>([buildings, cells], ([$buildings, $cells]) => {
  console.info("derived");
  if (
    JSON.stringify($buildings) === JSON.stringify(_buildings) &&
    _calculatedCells
  ) {
    console.info("cached");
    return _calculatedCells;
  }
  _buildings = { ...$buildings };
  const processedCells = Object.entries($cells).reduce(
    (acc, [id, cell]) => ({
      ...acc,
      [id]: {
        ...cell,
        wighldModifier: 0,
        wighldModified: cell.wighld,
      },
    }),
    {} as CalculatedCellsIndex
  );
  const burnedCells: CalculatedCell[] = [];
  Object.values<Building>($buildings).forEach((building) => {
    const _cell = { ...processedCells[building.cellId] };
    _cell.building = building;
    if (building.type === BUILDINGS.KOLOS_SEED) {
      [...new Array(3)]
        .map((_, i) => getCellsInExactRange(_cell, processedCells, i))
        .forEach((rangeCells, i) => {
          rangeCells.forEach((cell) => {
            cell.wighldModifier = (cell.wighldModifier || 0) - (3 - i);
            cell.wighldModified = cell.wighld + cell.wighldModifier;
            if (cell.wighldModified < 0) {
              cell.burned = true;
              if (!burnedCells.includes(cell)) {
                burnedCells.push(cell);
              }
            }
            processedCells[cell.id] = cell;
          });
        });
    }
    if (burnedCells.length) {
      cells.update((_cells) => ({
        ..._cells,
        ...burnedCells.reduce((acc, cell) => {
          return {
            ...acc,
            [cell.id]: {
              ..._cells[cell.id],
              burned: true,
            },
          };
        }, {} as CellsIndex),
      }));
    }
    processedCells[building.cellId] = {
      ..._cell,
      ...processedCells[building.cellId],
    };
  });
  _calculatedCells = processedCells;
  return processedCells;
});

export const rows = derived<typeof calculatedCells, Row[]>(
  calculatedCells,
  ($calculatedCells) => generateRows(x, y, $calculatedCells)
);
