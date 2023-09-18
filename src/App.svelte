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
  import LayoutGlobalRessources from "./components/LayoutGlobalRessources.svelte";
  import { tutorial } from "./stores/tutorial.store";
  import Tutorial1Modal from "./components/Tutorial1Modal.svelte";
  import Tutorial2Modal from "./components/Tutorial2Modal.svelte";
  import { UIState } from "./stores/ui-state.store";
  import { UI_ELEMENTS } from "./enums/ui-elements.enum";
  import ResearchesModal from "./components/ResearchesModal.svelte";

  const _rows = [...new Array(LENGTH_X)]
    .map((_, i) => [...new Array(LENGTH_Y)].map((_, j) => `${i}-${j}`))
    .reverse();

  $: tutorialStep = $tutorial.step;
  $: researchesOpen = $UIState[UI_ELEMENTS.RESEARCHES];
</script>

<div id="layout">
  {#if tutorialStep === 0 && !$selection}
    <Tutorial1Modal />
  {/if}
  {#if tutorialStep === 1 && !researchesOpen}
    <Tutorial2Modal />
  {/if}
  {#if researchesOpen}
    <ResearchesModal />
  {/if}
  {#if tutorialStep >= 2}
    <LayoutGlobalRessources />
    <LayoutHolOngData />
  {/if}
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
  {#if tutorialStep >= 2}
    <LayoutCycles />
    <Toolbar />
  {/if}
</div>

<style>
  #layout {
    background-color: #444;
    padding: 56px 0 144px;
  }
  p {
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
