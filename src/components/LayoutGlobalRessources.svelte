<script lang="ts">
  import { RESSOURCES } from "../enums/ressources.enum";
  import { globalRessources } from "../stores/global-ressources.store";
  import { RESSOURCES_DATA } from "../data/ressources.data";

  $: _globalRessources = Object.entries($globalRessources).map(
    ([name, value]) => ({
      ressource: name as RESSOURCES,
      value,
    })
  );
</script>

<div id="global-ressources">
  <h2>Ressources courantes</h2>
  <div id="ressources-value">
    {#each _globalRessources as item}
      {@const { name, summary } = RESSOURCES_DATA[item.ressource]}
      <p title={summary}>{name}: {item.value}</p>
    {/each}
  </div>
</div>

<style lang="scss">
  #global-ressources {
    position: fixed;
    z-index: 16;
    top: 0;
    left: 0;
    background-color: #eee6;
    border-bottom-right-radius: 16px;
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
  }
  #ressources-value {
    display: flex;
    gap: 8px;
  }
</style>
