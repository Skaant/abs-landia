<script lang="ts">
  import { RESSOURCES } from "../../enums/ressources.enum";
  import { globalRessources } from "../../stores/global-ressources.store";
  import { RESSOURCES_DATA } from "../../data/ressources.data";

  $: ressources = [RESSOURCES.WA, RESSOURCES.JING].map((ressource) => ({
    ressource,
    ...$globalRessources[ressource],
  }));
</script>

<div id="global-ressources">
  <div id="ressources-value">
    {#each ressources as item}
      {@const { name, summary } = RESSOURCES_DATA[item.ressource]}
      <span title={summary}>
        {name}: {item.value}{item.production !== 0
          ? ` (+${item.production})`
          : ""}{item.maximum !== 0 ? ` / ${item.maximum}` : ""}
      </span>
    {/each}
  </div>
</div>

<style lang="scss">
  #ressources-value {
    display: flex;
    align-items: center;
    gap: 12px;
  }
</style>
