<script lang="ts">
  import { BUILDINGS } from "../enums/buildings.enum";
  import SvgKolosSeedTravelling from "./svg/SVGKolosSeedTravelling.svelte";

  export let selectBuilding: (buildingType: BUILDINGS) => void = () => {};
</script>

<div id="toolbar-tutorial">
  <div id="toolbar-tutorial-image">
    <SvgKolosSeedTravelling />
  </div>
  <h2>Capsule-graine en transit, prête à atterir !</h2>
  <p>Ok</p>
  <button on:click={() => selectBuilding(BUILDINGS.KOLOS_SEED)}>
    Choisissez un point d'impact sur la carte
  </button>
</div>

<style lang="scss">
  #toolbar-tutorial {
    width: 500px;
    background-color: #eeea;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    padding: 32px;
    box-sizing: border-box;
  }
  #toolbar-tutorial-image {
    max-height: 300px;
    display: flex;
    justify-content: center;
  }
</style>
