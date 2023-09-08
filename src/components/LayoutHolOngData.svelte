<script lang="ts">
  import { globalRessources } from "../stores/global-ressources.store";
  import SvgHolOng from "./svg/SVGHolOng.svelte";
  import { HOL_ONG_DATA_GOAL } from "../data/game.data";
  import { RESSOURCES } from "../enums/ressources.enum";

  $: holOngData = $globalRessources[RESSOURCES.HOL_ONG_DATA];
  $: dataCores = $globalRessources[RESSOURCES.DATA_CORES];
</script>

<div id="hol-ong-data">
  <h2>Idées transférées au HOL-ONG</h2>
  <SvgHolOng />
  <p>{holOngData.value} / {HOL_ONG_DATA_GOAL}</p>
  <button
    class={`data-cores${dataCores.value > 0 ? " data-cores--available" : ""}`}
  >
    {dataCores.value > 0
      ? `Noyaux de données disponibles (${dataCores.value})`
      : "Research virtual VAULT"}
  </button>
</div>

<style lang="scss">
  #hol-ong-data {
    position: fixed;
    z-index: 16;
    top: 0;
    right: 0;
    background-color: #eee6;
    border-bottom-left-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    color: white;
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
