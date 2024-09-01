<script lang="ts">
  import { TIPS_TUTORIAL } from "../../enums/tips/tips-tutorial.enum";
  import { type TIPS } from "../../enums/tips/tips.enum";
  import AtterrissageImminent from "./tutorial/atterrissage-imminent.svelte";
  import MainGoal from "./tutorial/main-goal.svelte";
  import SelectLocation from "./tutorial/select-location.svelte";
  import Welcome from "./tutorial/welcome.svelte";

  export let tip: TIPS;

  const CONTENTS = {
    [TIPS_TUTORIAL.WELCOME]: Welcome,
    [TIPS_TUTORIAL.ATTERRISSAGE_IMMINENT]: AtterrissageImminent,
    [TIPS_TUTORIAL.MAIN_GOAL]: MainGoal,
    [TIPS_TUTORIAL.SELECT_LOCATION]: SelectLocation,
  };
  $: content = CONTENTS[tip];
</script>

<svelte:component this={content} />
