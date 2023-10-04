<script lang="ts">
  import { type Cell } from "../types/Cell";
  import SVGCellWighldBurned from "./svg/cells-wighld/SVGCellWighldBurned.svelte";

  const BACKGROUNDS = {
    burned: SVGCellWighldBurned,
  };

  export let cell: Cell;

  $: background = cell.burned ? BACKGROUNDS["burned"] : null;
</script>

<div class="cell-background">
  <svelte:component this={background} />
</div>

<style lang="scss">
  .cell-background {
    width: 100%;
    height: 100%;
  }
</style>
