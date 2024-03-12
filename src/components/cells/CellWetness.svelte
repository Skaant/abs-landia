<script lang="ts">
  import { GRID_CELL_PX } from "../../data/grid.data";
  import { hover } from "../../stores/hover.store";
  import { type Cell as CellType } from "../../types/Cell";
  import SvgCellWetness1 from "../svg/cells-wetness/SVGCellWetness1.svelte";
  import SvgCellWetness2 from "../svg/cells-wetness/SVGCellWetness2.svelte";
  import SvgCellWetness3 from "../svg/cells-wetness/SVGCellWetness3.svelte";
  import SvgCellWetness4 from "../svg/cells-wetness/SVGCellWetness4.svelte";
  import SvgCellWetness5 from "../svg/cells-wetness/SVGCellWetness5.svelte";
  import Cell from "./Cell.svelte";

  export let cell!: CellType;
  export let offsetX: number;
  export let offsetY: number;

  const LEVELS = {
    1: SvgCellWetness1,
    2: SvgCellWetness2,
    3: SvgCellWetness3,
    4: SvgCellWetness4,
    5: SvgCellWetness5,
  };
</script>

<Cell
  className="cell-wetness"
  {offsetX}
  {offsetY}
  onHover={() => hover.select({ type: "cell", cell })}
>
  {#if LEVELS[cell.effectiveWetness]}
    <svelte:component
      this={LEVELS[cell.effectiveWetness]}
      height={GRID_CELL_PX}
      width={GRID_CELL_PX}
    />
  {/if}
</Cell>
