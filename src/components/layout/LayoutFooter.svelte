<script lang="ts">
  import { cycles } from "../../stores/cycles.store";
  import { hover } from "../../stores/hover.store";
  import { passTurn } from "../../use-cases/passTurn/passTurn";
  import { ACTIONS_DATA } from "../../data/actions.data";

  $: _hover = $hover;
</script>

<div id="layout-footer">
  <div>
    {#if _hover?.type === "cell"}
      {@const cell = _hover.cell}
      <span>
        CASE // {cell.x}, {cell.y} /
        {#if cell.revealed}
          <span>
            🌳 WIGHLD : {cell.effectiveWighld} / 💦 Humidité : {cell.effectiveWetness}</span
          >
        {:else}
          <span>Non révélée</span>
        {/if}
      </span>
    {/if}
    {#if _hover?.type === "zum"}
      {@const zum = _hover.zum}
      <span>ZUM // 💡 DATA : {zum.data}</span>
    {/if}
    {#if _hover?.type === "action"}
      {@const action = ACTIONS_DATA[_hover.action]}
      <span
        >ACTION {action.name} // {action.summary}{action.prerequisites
          ? ` // ${action.prerequisites}`
          : ""}</span
      >
    {/if}
  </div>
  <div>
    <span>{$cycles}</span>
    <button on:click={passTurn}>Tour suivant</button>
  </div>
</div>

<style lang="scss">
  #layout-footer {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
  }
</style>
