<script lang="ts">
  import { BUILDINGS } from "../enums/buildings.enum";
  import { type Building } from "../types/Building";
  import SvgKolosSeed from "./svg/SVGKolosSeed.svelte";

  export let building: Building;

  const buildingComponents = {
    [BUILDINGS.KOLOS_SEED]: SvgKolosSeed,
  };
</script>

<div class="cell-building">
  <svelte:component this={buildingComponents[building.type]} />
</div>

<style lang="scss">
  .cell-building {
    position: absolute;
    top: -25%;
    left: -20%;
    width: 100%;
    height: 100%;
  }
</style>
