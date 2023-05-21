<script lang="ts">
  import { BUILDINGS } from "../enums/buildings.enum";
  import { type Building } from "../types/Building";
  import SvgKolosSeed from "./svg/SVGKolosSeed.svelte";
  import { BUILDINGS_DATA } from "../data/buildings.data";
  import { getBuildingDescription } from "../helpers/getBuildingDescription";
  import SvgDom from "./svg/SvgDom.svelte";
  import SvgBaliseBlix from "./svg/SVGBaliseBlix.svelte";

  export let building: Building;

  $: buildingData = BUILDINGS_DATA[building.type];

  const buildingPictures = {
    [BUILDINGS.KOLOS_SEED]: SvgKolosSeed,
    [BUILDINGS.DOM]: SvgDom,
    [BUILDINGS.BALISE_BLIX]: SvgBaliseBlix,
  };
</script>

<div class="cell-building" title={getBuildingDescription(buildingData)}>
  <svelte:component this={buildingPictures[building.type]} />
</div>

<style lang="scss">
  .cell-building {
    position: absolute;
    top: -25%;
    left: -20%;
    width: 80px;
    height: 80px;
    display: flex;
  }
</style>
