<script lang="ts">
  import { buildings } from "../stores/buildings.store";
  import { zums } from "../stores/zums.store";
  import { type Cell } from "../types/Cell";
  import CellBuilding from "./CellBuilding.svelte";
  import CellConnectivity from "./CellConnectivity.svelte";
  import CellWighld from "./CellWighld.svelte";
  import CellZum from "./CellZum.svelte";

  export let cell: Cell;
  $: building = $buildings[cell.buildingId];
  $: zum = $zums[cell.zumId];
</script>

<td
  class={`cell ${cell.burned ? "burned" : `wighld-${cell.wighld}`}${
    cell.zumId ? " cell--zum" : ""
  }`}
>
  <CellWighld {cell} />
  <CellConnectivity {cell} />
  {#if building}
    <CellBuilding {building} />
  {/if}
  {#if zum}
    <CellZum {zum} />
  {/if}
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
