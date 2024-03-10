<script lang="ts">
  import { hover } from "../../stores/hover.store";

  $: _hover = $hover;
</script>

<div id="layout-hover">
  {#if _hover?.type === "cell"}
    {@const cell = _hover.cell}
    <span>
      CASE // {cell.x}, {cell.y} / 🌳 WIGHLD : {cell.effectiveWighld} / 🌫 Humidité
      : {cell.effectiveWetness}
    </span>
  {/if}
  {#if _hover?.type === "zum"}
    {@const zum = _hover.zum}
    <span>ZUM // 💡 DATA : {zum.data}</span>
  {/if}
</div>

<style lang="scss">
  #layout-hover {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    background-color: #eee;
    transition: height 0.3s ease-out;
  }
</style>
