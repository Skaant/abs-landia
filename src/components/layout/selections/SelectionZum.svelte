<script lang="ts">
  import { ACTIONS_DATA } from "../../../data/actions.data";
  import { ACTIONS } from "../../../enums/actions.enum";
  import { hover } from "../../../stores/hover.store";
  import {
    type SelectionZum,
    selection,
  } from "../../../stores/selection.store";
  import { zums } from "../../../stores/zums.store";
  import { ACTIONS_DISABLED } from "./actions-disabled/actions-disabled.switch";
  import { ACTION_HANDLERS } from "./action-handlers/action-handlers.switch";

  $: zum = $zums[($selection as SelectionZum).zum.id];
</script>

<div id="selection-zum">
  <div>
    <h1>ZUM {zum.id}</h1>
    <div>
      🖐 Actions : {zum.actions} / 👣 Mouvements : {zum.movements} / 💡 DATA : {zum.data}
    </div>
    <div>Affinités</div>
  </div>
  <div id="zum-actions">
    {#each [ACTIONS.EXPLORE, ACTIONS.COLLECT_WA, ACTIONS.HARVEST_JING, ACTIONS.MEDITATE] as action}
      {@const data = ACTIONS_DATA[action]}
      {@const handler = ACTION_HANDLERS[action]}
      {@const disabled =
        !handler ||
        zum.actions === 0 ||
        ACTIONS_DISABLED[action]?.(zum) ||
        false}
      <button
        {disabled}
        on:mouseenter={() => hover.set({ type: "action", action })}
        on:mouseleave={() => hover.set(null)}
        on:click={() => handler?.(zum)}
      >
        {data.name}
      </button>
    {/each}
  </div>
</div>

<style lang="scss">
  #selection-zum {
    display: flex;
    > :first-child {
      width: 60%;
    }
    #zum-actions {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 40%;
    }
  }
</style>
