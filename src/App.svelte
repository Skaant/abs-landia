<script lang="ts">
  import { LENGTH_X, LENGTH_Y, cells } from "./stores/map.store";
  import Cell from "./components/Cell.svelte";

  const _rows = [...(new Array(LENGTH_X))].map((_, i) => [
    ...(new Array(LENGTH_Y))
  ].map((_, j) => `${i}-${j}`))
</script>

<div>
  <table>
  {#if _rows}
  {#each _rows as cellsId}
    <tr class="row">
      {#each cellsId as cellId}
        <Cell cell={$cells[cellId]} />
      {/each}
      </tr>
  {/each}
  {/if}
</table>
</div>

<style>
  .row {
    display: flex;
  }
</style>
