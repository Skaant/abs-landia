<script lang="ts">
  import { type Cell } from "../types/Cell";
  import SvgCellWighld0 from "./svg/cells-wighld/SVGCellWighld0.svelte";
  import SvgCellWighld1 from "./svg/cells-wighld/SVGCellWighld1.svelte";
  import SvgCellWighld2 from "./svg/cells-wighld/SVGCellWighld2.svelte";
  import SvgCellWighld3 from "./svg/cells-wighld/SVGCellWighld3.svelte";
  import SVGCellWighldBurned from "./svg/cells-wighld/SVGCellWighldBurned.svelte";
  import SvgCellWighld4 from "./svg/cells-wighld/SVGCellWighld4.svelte";
  import SvgCellWighld5 from "./svg/cells-wighld/SVGCellWighld5.svelte";

  const BACKGROUNDS = {
    burned: SVGCellWighldBurned,
    0: SvgCellWighld0,
    1: SvgCellWighld1,
    2: SvgCellWighld2,
    3: SvgCellWighld3,
    4: SvgCellWighld4,
    5: SvgCellWighld5,
  };

  export let cell: Cell;

  $: background = cell.burned
    ? BACKGROUNDS["burned"]
    : BACKGROUNDS[cell.effectiveWighld];
</script>

<div class="cell-background">
  <svelte:component this={background} />
</div>

<style lang="scss">
  .cell-background {
    width: 100%;
    height: 100%;
    margin: -19px;
  }
</style>
