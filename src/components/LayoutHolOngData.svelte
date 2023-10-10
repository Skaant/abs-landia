<script lang="ts">
  import { globalRessources } from "../stores/global-ressources.store";
  import { UIState } from "../stores/ui-state.store";
  import SvgHolOng from "./svg/SVGHolOng.svelte";
  import { HOL_ONG_DATA_GOAL } from "../data/game.data";
  import { RESSOURCES } from "../enums/ressources.enum";
  import { UI_ELEMENTS } from "../enums/ui-elements.enum";

  $: holOngData = $globalRessources[RESSOURCES.HOL_ONG_DATA];
  $: dataCores = $globalRessources[RESSOURCES.DATA_CORES];
</script>

<div id="hol-ong-data">
  <SvgHolOng />
  <div id="data-content">
    <h2>Idées transférées au HOL-ONG</h2>
    <p>{holOngData.value} / {HOL_ONG_DATA_GOAL}</p>
    <button
      class={`data-cores${dataCores.value > 0 ? " data-cores--available" : ""}`}
      on:click={() => UIState.toggleElement(UI_ELEMENTS.RESEARCHES)}
    >
      {dataCores.value > 0
        ? `Noyaux de données disponibles (${dataCores.value})`
        : "Research virtual VAULT"}
    </button>
  </div>
</div>

<style lang="scss">
  #hol-ong-data {
    position: fixed;
    z-index: 16;
    top: 0;
    right: 0;
    background-color: #fffe;
    border-bottom-left-radius: 16px;
    display: flex;
    align-items: center;
    padding: 8px;
  }
  h2 {
    font-size: 12px;
    font-weight: normal;
    margin-bottom: 0;
    order: 1;
  }
  p {
    order: 2;
  }
  .data-cores {
    order: 3;
  }
  .data-cores--available {
    background-color: #5fd;
  }
</style>
