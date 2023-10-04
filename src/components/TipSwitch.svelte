<script lang="ts">
  import { TIPS } from "../enums/tips.enum";
  import AtterrissageModal from "./tips/AtterrissageModal.svelte";
  import AtterrissageReussiModal from "./tips/AtterrissageReussiModal.svelte";
  import BrulureModal from "./tips/BrulureModal.svelte";
  import TerrainModal from "./tips/TerrainModal.svelte";
  import WighldModal from "./tips/WighldModal.svelte";

  export let tip: TIPS;

  const MODALS = {
    [TIPS.ATTERRISSAGE]: AtterrissageModal,
    [TIPS.TERRAIN]: TerrainModal,
    [TIPS.WIGHLD]: WighldModal,
    [TIPS.ATTERRISSAGE_REUSSI]: AtterrissageReussiModal,
    [TIPS.BRULURE]: BrulureModal,
  };

  $: modal = MODALS[tip];
</script>

<svelte:component this={modal} />
