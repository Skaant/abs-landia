<script lang="ts">
  import { rows } from "../stores/grid.store";
  import Cell from "./Cell.svelte";
</script>

<div id="grid-container">
  <div id="grid">
    {#each $rows as cells}
      <div class="row">
        {#each cells as cell}
          {#if cell}
            <Cell {cell} />
          {:else}
            <div class="cell"></div>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  #grid-container {
    width: 100%;
    overflow: auto;
  }
  #grid {
    margin: 0 auto;
  }
  .row {
    display: flex;
  }
</style>
