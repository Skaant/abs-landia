<script lang="ts">
  import "./style.scss";
  import LayoutHolOngData from "./components/LayoutHolOngData.svelte";
  import LayoutCycles from "./components/LayoutCycles.svelte";
  import { tutorial } from "./stores/tutorial.store";
  import { UIState } from "./stores/ui-state.store";
  import { UI_ELEMENTS } from "./enums/ui-elements.enum";
  import ResearchesModal from "./components/ResearchesModal.svelte";
  import LayoutTips from "./components/LayoutTips.svelte";
  import TipSwitch from "./components/TipSwitch.svelte";
  import Grid from "./components/grid/Grid.svelte";
  import LayoutFooter from "./components/layout/LayoutFooter.svelte";
  import LayoutSelection from "./components/layout/selections/LayoutSelection.svelte";
  import LayoutHeader from "./components/layout/LayoutHeader.svelte";
  import ZumAffinitiesModal from "./components/layout/ZumAffinitiesModal.svelte";
  import Dialog from "./components/dialog/Dialog.svelte";

  $: tutorialStep = $tutorial.step;
  $: researchesOpen = $UIState[UI_ELEMENTS.RESEARCHES];
  $: zumAffinities = $UIState[UI_ELEMENTS.ZUM_AFFINITIES];
</script>

<div id="layout">
  <LayoutHeader />
  {#if $UIState.tip}
    <!-- TipSwitch tip={$UIState.tip} /-->
  {/if}
  {#if zumAffinities}
    {@const zum = zumAffinities.zum}
    {@const tribe = zumAffinities.tribe}
    <ZumAffinitiesModal {zum} {tribe} />
  {/if}
  {#if researchesOpen}
    <ResearchesModal />
  {/if}
  {#if tutorialStep >= 1}
    <LayoutHolOngData />
  {/if}
  <!-- LayoutTips /-->
  <div id="grid-dialog">
    <Grid />
    <Dialog />
  </div>
  {#if tutorialStep >= 1}
    <LayoutCycles />
  {/if}
  <LayoutSelection />
  <LayoutFooter />
</div>

<style>
  #layout {
    background-color: #444;
    height: calc(100% - 128px);
    position: relative;
    padding: 64px 0;
  }
  #grid-dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
