<script lang="ts">
  import { buildings } from "../stores/buildings.store";
  import { type Cell } from "../types/Cell";
  import { addKolosSeedOnCell } from "../use-cases/addKolosSeedOnCell";
  import CellBuilding from "./CellBuilding.svelte";
  import CellWighld from "./CellWighld.svelte";

  export let cell: Cell;

  $: building = $buildings[cell.buildingId];
</script>

<td
  class={`cell tbs-cell${cell.buildingId ? " tbs-cell--building" : ""}`}
  on:click={() => addKolosSeedOnCell(cell)}
  on:keydown={() => addKolosSeedOnCell(cell)}
>
  {#if building}
    <CellBuilding {building} />
  {/if}
  <CellWighld {cell} />
</td>

<style lang="scss">
  .tbs-cell {
    &--building {
      background-color: blueviolet;
    }
    &:not(.tbs-cell--building) {
      background-color: rgb(201, 145, 252);
      cursor: pointer;
    }
  }
</style>
