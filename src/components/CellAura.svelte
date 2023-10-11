<script lang="ts">
  import { AURA_EFFECTS } from "../enums/aura-effects.enum";
  import type { AuraEffect } from "../types/AuraEffects";
  import SvgConnectivityModification from "./svg/auras/SVGConnectivityModification.svelte";
  import SvgWighldModificationNegative from "./svg/auras/SVGWighldModificationNegative.svelte";
  import SvgWighldModificationPositive from "./svg/auras/SVGWighldModificationPositive.svelte";

  export let aura: AuraEffect;
  let picture;

  switch (aura.id) {
    case AURA_EFFECTS.WIGHLD_MODIFICATION:
      picture =
        aura.value >= 0
          ? SvgWighldModificationPositive
          : SvgWighldModificationNegative;
      break;
    case AURA_EFFECTS.CONNECTIVITY_MODIFICATION:
      picture = SvgConnectivityModification;
      break;
  }
</script>

<div class="cell-aura">
  <svelte:component this={picture} />
</div>

<style lang="scss">
  .cell-aura {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 38px);
    height: calc(100% + 38px);
    margin: -19px;
  }
</style>
