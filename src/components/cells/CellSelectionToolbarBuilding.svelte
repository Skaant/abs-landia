<script lang="ts">
  import type { Cell as CellType } from "../../types/Cell";
  import { GRID_CELL_PX } from "../../data/grid.data";
  import { hover } from "../../stores/hover.store";
  import { selection } from "../../stores/selection.store";
  import { addBuildingOnCell } from "../../use-cases/addBuildingOnCell/addBuildingOnCell";

  import Cell from "./Cell.svelte";
  import { BUILDINGS } from "../../enums/buildings.enum";

  export let cell!: CellType;
  export let offsetX: number;
  export let offsetY: number;

  export let building!: BUILDINGS;
</script>

<Cell
  className="selection-toolbar-building"
  {offsetX}
  {offsetY}
  onHover={() => hover.select({ type: "cell", cell })}
  onClick={() => addBuildingOnCell(building, cell)}
>
  <svg
    width={`${GRID_CELL_PX}px`}
    height={`${GRID_CELL_PX}px`}
    viewBox="0 0 365 365"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="55" y="55" width="255" height="255" fill="#78e08f66" />
  </svg>
</Cell>
