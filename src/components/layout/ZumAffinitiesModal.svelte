<script lang="ts">
  import { UIState } from "../../stores/ui-state.store";
  import Modal from "../Modal.svelte";
  import { TRIBES_LIST, TRIBES_DATA } from "../../data/tribes.data";
  import { type Zum } from "../../types/Zum";
  import { TRIBES } from "../../enums/tribes.enum";
  import { ZUM_AFFINITIES } from "../../data/zum-affinities/index";

  const TIERS_AMOUNT = [0, 5, 20, 50, 100];

  export let zum: Zum;
  export let tribe: TRIBES;

  let affinity = ZUM_AFFINITIES[tribe] || [];
</script>

<Modal dismiss={UIState.toggleZumTribeAffinities}>
  <div id="tribes-menu">
    {#each TRIBES_LIST as tribe}
      {@const affinity = zum.affinities[tribe]}
      <button disabled={!affinity}>
        {TRIBES_DATA[tribe].name}{affinity ? `: ${affinity}` : ""}
      </button>
    {/each}
  </div>
  <h2>
    Affinité de {zum.name} pour la tribu {TRIBES_DATA[tribe].name} : {zum
      .affinities[tribe]}
  </h2>
  <div id="zum-affinity-progression">
    {#each [0, 1, 2, 3, 4] as tierIndex}
      {@const tier = affinity[tierIndex] || []}
      <div class="tier">
        {TIERS_AMOUNT[tierIndex]}
        {#each tier as item}
          {item}
        {/each}
      </div>
    {/each}
  </div>
  <div id="zum-affinity-links">
    <button>Affinité globale pour la tribu {TRIBES_DATA[tribe].name}</button>
    <button>VAULT de recherches de la tribu {TRIBES_DATA[tribe].name}</button>
  </div>
</Modal>
