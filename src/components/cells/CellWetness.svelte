<script lang="ts">
  import { type Cell as CellType } from "../../types/Cell";
  import SvgCellWetness1 from "../svg/cells-wetness/SVGCellWetness1.svelte";
  import Cell from "./Cell.svelte";

  export let cell!: CellType;

  const LEVELS = {
    1: SvgCellWetness1,
  };
</script>

<Cell className="cell-wetness">
  {#if LEVELS[cell.effectiveWetness]}
    <svelte:component this={LEVELS[cell.effectiveWetness]} />
  {/if}
</Cell>
