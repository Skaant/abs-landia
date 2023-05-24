<script lang="ts">
  import "./styles/grid.scss";
  import { LENGTH_X, LENGTH_Y, cells } from "./stores/map.store";
  import Cell from "./components/Cell.svelte";
  import Toolbar from "./components/Toolbar.svelte";
  import { selection } from "./stores/selection.store";
  import CellSelectionToolbarBuilding from "./components/CellSelectionToolbarBuilding.svelte";
  import LayoutHolOngData from "./components/LayoutHolOngData.svelte";
  import LayoutCycles from "./components/LayoutCycles.svelte";
  import CellSelectionZum from "./components/CellSelectionZum.svelte";

  const _rows = [...new Array(LENGTH_X)]
    .map((_, i) => [...new Array(LENGTH_Y)].map((_, j) => `${i}-${j}`))
    .reverse();
</script>

<div id="layout">
  <h1>ABS-LANDIA - L'EXPANS</h1>
  <LayoutHolOngData />
  <div id="grid-container">
    <table id="grid">
      {#if _rows}
        {#each _rows as cellsId}
          <tr class="row">
            {#each cellsId as cellId}
              {@const cell = $cells[cellId]}
              {#if $selection?.type === "toolbar-building"}
                <CellSelectionToolbarBuilding selection={$selection} {cell} />
              {:else if $selection?.type === "zum"}
                <CellSelectionZum selection={$selection} {cell} />
              {:else}
                <Cell {cell} />
              {/if}
            {/each}
          </tr>
        {/each}
      {/if}
    </table>
  </div>
  <LayoutCycles />
  <Toolbar />
</div>

<style>
  #layout {
    background-color: #444;
    padding: 56px 8px 144px;
  }
  h1 {
    margin-top: 0;
    padding: 20px;
    font-size: 12px;
    color: white;
    text-align: center;
  }
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
