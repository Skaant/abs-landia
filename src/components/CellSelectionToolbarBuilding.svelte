<script lang="ts">
  import { AURA_EFFECTS } from "../enums/aura-effects.enum";
  import { buildings } from "../stores/buildings.store";
  import { type SelectionToolbarBuilding } from "../stores/selection.store";
  import { type Cell } from "../types/Cell";
  import { addBuildingOnCell } from "../use-cases/addBuildingOnCell/addBuildingOnCell";
  import CellAura from "./CellAura.svelte";
  import CellBackground from "./CellBackground.svelte";
  import CellBuilding from "./CellBuilding.svelte";

  const AURA_EFFECTS_ORDER = [
    AURA_EFFECTS.WIGHLD_MODIFICATION,
    AURA_EFFECTS.CONNECTIVITY_MODIFICATION,
  ];

  export let selection: SelectionToolbarBuilding;
  export let cell: Cell;

  $: selectedBuildingType = selection.buildingType;
  $: buildingOnCell = $buildings[cell.buildingId];
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
  class={`cell tbs-cell${cell.buildingId ? " tbs-cell--building" : ""}`}
  on:click={() => addBuildingOnCell(selectedBuildingType, cell)}
  on:keydown={() => addBuildingOnCell(selectedBuildingType, cell)}
>
  <CellBackground {cell} />
  {#each auras as aura}
    <CellAura {aura} />
  {/each}
  {#if buildingOnCell}
    <CellBuilding building={buildingOnCell} />
  {/if}
</td>

<style lang="scss">
  .tbs-cell {
    &--building {
      background-color: blueviolet;
    }
    &:not(.tbs-cell--building) {
      // background-color: rgb(201, 145, 252);
      cursor: pointer;
    }
  }
</style>
