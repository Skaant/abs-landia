<script lang="ts">
  import { BUILDINGS } from "../enums/buildings.enum";
  import { type Building } from "../types/Building";
  import SvgKolosSeed from "./svg/SVGKolosSeed.svelte";
  import { BUILDINGS_DATA } from "../data/buildings.data";
  import { getBuildingDescription } from "../helpers/getBuildingDescription";
  import SvgDom from "./svg/SvgDom.svelte";
  import SvgBaliseBlix from "./svg/SVGBaliseBlix.svelte";
  import SvgCuveVortex from "./svg/SVGCuveVortex.svelte";
  import SvgSiloAJing from "./svg/SVGSiloAJing.svelte";
  import SvgBaliseHolOng from "./svg/SVGBaliseHolOng.svelte";
  import SvgBaliseFrff from "./svg/SVGBaliseFrff.svelte";

  export let building: Building;

  $: buildingData = BUILDINGS_DATA[building.type];

  const buildingPictures = {
    [BUILDINGS.KOLOS_SEED]: SvgKolosSeed,
    [BUILDINGS.DOM]: SvgDom,
    [BUILDINGS.CUVE_VORTEX]: SvgCuveVortex,
    [BUILDINGS.SILO_A_JING]: SvgSiloAJing,
    [BUILDINGS.BALISE_HOL_ONG]: SvgBaliseHolOng,
    [BUILDINGS.BALISE_FRFF]: SvgBaliseFrff,
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
    cursor: help;
  }
</style>
