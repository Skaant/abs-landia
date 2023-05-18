<script lang="ts">
  import "./styles/grid.scss";
  import { LENGTH_X, LENGTH_Y, cells } from "./stores/map.store";
  import Cell from "./components/Cell.svelte";
  import Toolbar from "./components/Toolbar.svelte";
  import { selection } from "./stores/selection.store";
  import ToolbarBuildingSelectionCell from "./components/ToolbarBuildingSelectionCell.svelte";
  import { cycles } from "./stores/cycles.store";

  const _rows = [...new Array(LENGTH_X)].map((_, i) =>
    [...new Array(LENGTH_Y)].map((_, j) => `${i}-${j}`)
  );
</script>

<div>
  <div>{$cycles}</div>
  <table id="grid">
    {#if _rows}
      {#each _rows as cellsId}
        <tr class="row">
          {#each cellsId as cellId}
            {@const cell = $cells[cellId]}
            {#if $selection?.type === "toolbar-building"}
              <ToolbarBuildingSelectionCell {cell} />
            {:else}
              <Cell {cell} />
            {/if}
          {/each}
        </tr>
      {/each}
    {/if}
  </table>
  <Toolbar />
</div>

<style>
  #grid {
    margin-bottom: 144px;
  }
  .row {
    display: flex;
  }
</style>
