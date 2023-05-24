<script>
  import { holOngData } from "../stores/hol-ong-data.store";
  import SvgHolOng from "./svg/SVGHolOng.svelte";
  import { HOL_ONG_DATA_GOAL } from "../data/game.data";
</script>

<div id="hol-ong-data">
  <h2>Idées transférées au HOL-ONG</h2>
  <SvgHolOng />
  <p>{$holOngData} / {HOL_ONG_DATA_GOAL}</p>
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
</style>
