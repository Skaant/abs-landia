<script lang="ts">
  import { type SelectionZum } from "../stores/selection.store";
  import { zums } from "../stores/zums.store";
  import { type Cell } from "../types/Cell";
  import { moveZum } from "../use-cases/moveZum/moveZum";
  import CellConnectivity from "./CellConnectivity.svelte";
  import CellWighld from "./CellWighld.svelte";
  import CellZum from "./CellZum.svelte";

  export let selection: SelectionZum;
  export let cell: Cell;

  $: selectedZumId = selection.zumId;
  $: zumOnCell = $zums[cell.zumId];
</script>

<td
  class={`cell sz-cell${cell.zumId ? " sz-cell--zum" : ""}`}
  on:click={() => moveZum(selectedZumId, cell)}
  on:keydown={() => moveZum(selectedZumId, cell)}
>
  {#if zumOnCell}
    <CellZum zum={zumOnCell} />
  {/if}
  <CellWighld {cell} />
  <CellConnectivity {cell} />
</td>

<style lang="scss">
  .sz-cell {
    &--zum {
      background-color: blueviolet;
    }
    &:not(.sz-cell--zum) {
      background-color: rgb(201, 145, 252);
      cursor: pointer;
    }
  }
</style>
