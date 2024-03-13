<script lang="ts">
  import "./style.scss";
  import Toolbar from "./components/Toolbar.svelte";
  import LayoutHolOngData from "./components/LayoutHolOngData.svelte";
  import LayoutCycles from "./components/LayoutCycles.svelte";
  import LayoutGlobalRessources from "./components/LayoutGlobalRessources.svelte";
  import { tutorial } from "./stores/tutorial.store";
  import { UIState } from "./stores/ui-state.store";
  import { UI_ELEMENTS } from "./enums/ui-elements.enum";
  import ResearchesModal from "./components/ResearchesModal.svelte";
  import LayoutTips from "./components/LayoutTips.svelte";
  import TipSwitch from "./components/TipSwitch.svelte";
  import Grid from "./components/grid/Grid.svelte";
  import LayoutFooter from "./components/layout/LayoutFooter.svelte";
  import LayoutToolbar from "./components/layout/LayoutToolbar.svelte";
  import LayoutSelection from "./components/layout/LayoutSelection.svelte";

  $: tutorialStep = $tutorial.step;
  $: researchesOpen = $UIState[UI_ELEMENTS.RESEARCHES];
</script>

<div id="layout">
  <LayoutToolbar />
  {#if $UIState.tip}
    <TipSwitch tip={$UIState.tip} />
  {/if}
  {#if researchesOpen}
    <ResearchesModal />
  {/if}
  {#if tutorialStep >= 1}
    <LayoutHolOngData />
  {/if}
  {#if tutorialStep >= 2}
    <LayoutGlobalRessources />
  {/if}
  <LayoutTips />
  <Grid />
  {#if tutorialStep >= 1}
    <LayoutCycles />
  {/if}
  <LayoutSelection />
  <LayoutFooter />
</div>

<style>
  #layout {
    background-color: #444;
    height: 100%;
    position: relative;
  }
</style>
