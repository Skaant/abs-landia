<script lang="ts">
  import { gridSize, rows } from "../../stores/grid.store";
  import { GRID_CELL_PX } from "../../data/grid.data";
  import BackgroundLayer from "./layers/BackgroundLayer.svelte";
  import ZumsLayer from "./layers/ZumsLayer.svelte";

  $: height = $gridSize[0] * GRID_CELL_PX;
  $: width = $gridSize[1] * GRID_CELL_PX;
</script>

<div id="grid-container">
  <div id="grid" style={`height: ${height}px; width: ${width}px`}>
    <BackgroundLayer rows={$rows} />
    <ZumsLayer rows={$rows} />
    <!-- <WetnessLayer rows={$rows} />
    {#if $selection?.type === "toolbar-building"}
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
    display: flex;
  }
  #grid {
    margin: auto;
    height: max-content;
    width: max-content;
    position: relative;
  }
</style>
