<script lang="ts">
  import { selection } from "../../stores/selection.store";
  import { ACTIONS } from "../../enums/actions.enum";
  import { ACTIONS_DATA } from "../../data/actions.data";
  import { hover } from "../../stores/hover.store";
</script>

{#if $selection}
  <div id="layout-selection">
    <div id="selection">
      {#if $selection.type === "zum"}
        {@const zum = $selection.zum}
        <div>
          <h1>ZUM {zum.id}</h1>
          <div>🖐 Action : {0} / 👣 Mouvement : {0} / 💡 DATA : {zum.data}</div>
          <div>Affinités</div>
        </div>
        <div id="zum-actions">
          {#each [ACTIONS.EXPLORE, ACTIONS.COLLECT_WA, ACTIONS.HARVEST_JING, ACTIONS.MEDITATE] as action}
            {@const data = ACTIONS_DATA[action]}
            <button
              on:mouseenter={() => hover.set({ type: "action", action })}
              on:mouseleave={() => hover.set(null)}>{data.name}</button
            >
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}

<style lang="scss">
  #layout-selection {
    position: absolute;
    bottom: 64px;
    left: calc(50vw - 350px);
    max-height: calc(100% - 64px);
  }
  #selection {
    width: 700px;
    margin: 0 auto;
    display: flex;
    padding: 16px;
    border-radius: 8px;
    background-color: #eee;
    height: max-content;
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
