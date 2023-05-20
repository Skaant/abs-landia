<script lang="ts">
  import "./styles/grid.scss";
  import { LENGTH_X, LENGTH_Y, cells } from "./stores/map.store";
  import Cell from "./components/Cell.svelte";
  import Toolbar from "./components/Toolbar.svelte";
  import { selection } from "./stores/selection.store";
  import ToolbarBuildingSelectionCell from "./components/ToolbarBuildingSelectionCell.svelte";
  import { cycles } from "./stores/cycles.store";
  import { holOngData } from "./stores/hol-ong-data.store";

  const _rows = [...new Array(LENGTH_X)].map((_, i) =>
    [...new Array(LENGTH_Y)].map((_, j) => `${i}-${j}`)
  );
</script>

<div id="layout">
  <h1>ABS-LANDIA - L'EXPANS</h1>
  <div>{$holOngData}</div>
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
  <div>{$cycles}</div>
  <Toolbar />
</div>

<style>
  #layout {
    background-color: #444;
    padding: 56px 20px 144px;
  }
  h1 {
    margin-top: 0;
    padding: 20px;
    font-size: 12px;
    color: white;
    text-align: center;
  }
  #grid {
    margin: 0 auto;
  }
  .row {
    display: flex;
  }
</style>
