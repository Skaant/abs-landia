<script lang="ts">
  import { buildings } from "../stores/buildings.store";
  import { type SelectionToolbarBuilding } from "../stores/selection.store";
  import { type Cell } from "../types/Cell";
  import { addBuildingOnCell } from "../use-cases/addBuildingOnCell/addBuildingOnCell";
  import CellBuilding from "./CellBuilding.svelte";
  import CellConnectivity from "./CellConnectivity.svelte";
  import CellWighld from "./CellWighld.svelte";

  export let selection: SelectionToolbarBuilding;
  export let cell: Cell;

  $: selectedBuildingType = selection.buildingType;
  $: buildingOnCell = $buildings[cell.buildingId];
</script>

<td
  class={`cell tbs-cell${cell.buildingId ? " tbs-cell--building" : ""}`}
  on:click={() => addBuildingOnCell(selectedBuildingType, cell)}
  on:keydown={() => addBuildingOnCell(selectedBuildingType, cell)}
>
  {#if buildingOnCell}
    <CellBuilding building={buildingOnCell} />
  {/if}
  <CellWighld {cell} />
  <CellConnectivity {cell} />
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
