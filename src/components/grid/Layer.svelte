<script lang="ts">
  import { GRID_CELL_PX } from "../../data/grid.data";
  import type { Cell } from "../../types/Cell";

  export let rows: Cell[][];
</script>

{#each rows as cells, y}
  {#each cells as cell, x}
    {#if cell}
      <slot {cell} offsetX={x * GRID_CELL_PX} offsetY={y * GRID_CELL_PX} />
    {/if}
  {/each}
{/each}

<style lang="scss">
  .layer:not(.background) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .row {
    display: flex;
  }
</style>
