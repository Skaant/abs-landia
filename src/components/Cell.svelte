<script lang="ts">
  import { AURA_EFFECTS } from "../enums/aura-effects.enum";
  import { buildings } from "../stores/buildings.store";
  import { zums } from "../stores/zums.store";
  import { type Cell } from "../types/Cell";
  import CellAura from "./CellAura.svelte";
  import CellBackground from "./CellBackground.svelte";
  import CellBuilding from "./CellBuilding.svelte";
  import CellConnectivity from "./CellConnectivity.svelte";
  import CellWighld from "./CellWighld.svelte";
  import CellZum from "./CellZum.svelte";

  const AURA_EFFECTS_ORDER = [
    AURA_EFFECTS.WIGHLD_MODIFICATION,
    AURA_EFFECTS.CONNECTIVITY_MODIFICATION,
  ];

  export let cell: Cell;

  $: building = $buildings[cell.buildingId];
  $: zum = $zums[cell.zumId];
  $: auras = (cell.auraEffects || []).sort((a, b) => {
    if (
      a.id === AURA_EFFECTS.WIGHLD_MODIFICATION &&
      b.id === AURA_EFFECTS.WIGHLD_MODIFICATION
    ) {
      return b.value - a.value;
    }
    return AURA_EFFECTS_ORDER.indexOf(a.id) - AURA_EFFECTS_ORDER.indexOf(b.id);
  });
</script>

<td
  class={`cell ${cell.burned ? "burned" : `wighld-${cell.effectiveWighld}`}${
    cell.zumId ? " cell--zum" : ""
  }`}
>
  <CellBackground {cell} />
  {#each auras as aura}
    <CellAura {aura} />
  {/each}
  {#if building}
    <CellBuilding {building} />
  {/if}
  {#if zum}
    <CellZum {zum} />
  {/if}
  <CellWighld {cell} />
  <CellConnectivity {cell} />
</td>

<style lang="scss">
  .burned {
    background-color: #333;
    color: #fff;
  }
  .wighld-0 {
    background-color: #aaa;
  }
  .wighld-1 {
    background-color: rgb(242, 237, 106);
  }
  .wighld-2 {
    background-color: rgb(166, 241, 125);
  }
  .wighld-3 {
    background-color: rgb(49, 213, 74);
  }
  .wighld-4 {
    background-color: rgb(0, 138, 126);
  }
  .wighld-5 {
    background-color: rgb(191, 104, 253);
  }
</style>
