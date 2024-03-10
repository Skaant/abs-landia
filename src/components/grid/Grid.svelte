<script lang="ts">
  import { gridSize, rows } from "../../stores/grid.store";
  import { GRID_CELL_PX } from "../../data/grid.data";
  import BackgroundLayer from "./layers/BackgroundLayer.svelte";

  $: height = $gridSize[0] * GRID_CELL_PX;
  $: width = $gridSize[1] * GRID_CELL_PX;
</script>

<div id="grid-container">
  <svg id="grid" viewBox={`0 0 ${height} ${width}`} {height} {width}>
    <BackgroundLayer rows={$rows} />
    <!-- <WetnessLayer rows={$rows} />
    {#if $selection?.type === "toolbar-building"}
      <ClickableLayer rows={$rows} selection={$selection} />
    {/if} -->
  </svg>
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
