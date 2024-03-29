<script lang="ts">
  import { UIState } from "../../stores/ui-state.store";
  import Modal from "../Modal.svelte";
  import { TRIBES_LIST, TRIBES_DATA } from "../../data/tribes.data";
  import { UI_ELEMENTS } from "../../enums/ui-elements.enum";
  import { get } from "svelte/store";
  import { Zum } from "../../types/Zum";
  import { TRIBES } from "../../enums/tribes.enum";

  let zum: Zum;
  let tribe: TRIBES;
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
  <div id="tribe-progression">
    
  </div>
</Modal>
