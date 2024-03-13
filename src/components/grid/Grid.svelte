<script lang="ts">
  import { gridSize, rows } from "../../stores/grid.store";
  import { GRID_CELL_PX } from "../../data/grid.data";
  import BackgroundLayer from "./layers/BackgroundLayer.svelte";
  import ZumsLayer from "./layers/ZumsLayer.svelte";
  import WetnessLayer from "./layers/WetnessLayer.svelte";

  $: height = $gridSize[1] * GRID_CELL_PX;
  $: width = $gridSize[0] * GRID_CELL_PX;
</script>

<div id="grid-container">
  <div id="grid" style={`height: ${height}px; width: ${width}px`}>
    <BackgroundLayer rows={$rows} />
    <WetnessLayer rows={$rows} />
    <ZumsLayer rows={$rows} />
    <!-- {#if $selection?.type === "toolbar-building"}
      <ClickableLayer rows={$rows} selection={$selection} />
    {/if} -->
  </div>
</div>

<style lang="scss">
  #grid-container {
    margin: auto;
    height: 100%;
    max-height: 840px;
    width: 100%;
    max-width: 840px;
    overflow: auto;
  }
  #grid {
    margin: auto;
    height: max-content;
    width: max-content;
    position: relative;
  }
</style>
