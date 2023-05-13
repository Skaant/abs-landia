<script lang="ts">
  import { buildings } from "../stores/buildings.store";
  import { zums } from "../stores/zums.store";
  import { type Cell } from "../types/Cell";
  import { addKolosSeedOnCell } from "../use-cases/addKolosSeedOnCell";
  import SvgHighGrass from "./svg/SVGHighGrass.svelte";
  import SvgPathTile from "./svg/SVGPathTile.svelte";
  import SvgWildfires from "./svg/SVGWildfires.svelte";

  export let cell: Cell;
  $: building = $buildings[cell.buildingId];
  $: zum = $zums[cell.zumId];

  function onClick(cell: Cell) {
    addKolosSeedOnCell(cell);
  }
</script>

<td
  class={`cell ${cell.burned ? 'burned' : `wighld-${cell.wighld}`}`}
  on:click={() => onClick(cell)}
  on:keydown={() => onClick(cell)}
>
  <div class={`cell-wighld${cell.wighld < 0 ? ' cell-wighld--burning' : cell.burned ? ' cell-wighld--burned' : ''}`}>
    {cell.wighld}
    {#if cell.wighld < 0}
      <SvgWildfires/>
    {:else if cell.burned}
      <SvgPathTile />
    {:else}
      <SvgHighGrass />
    {/if}
  </div>
  {building?.type || ''}
  {cell.burned ? '🔥' : ''}
  {zum ? zum.id : ''}
</td>

<style lang="scss">
  .cell {
    width: 80px;
    height: 80px;
    border: 1px solid black;
    margin: 5px;
    border-radius: 10px;
    position: relative;
  }
  .cell-wighld {
    position: absolute;
    top: -4px;
    right: -4px;
    height: 25%;
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    border: #fff 2px solid;
    box-shadow: 0 0 4px 0 #000;
    padding: 2px 12px;
    &--burning {
      background-color: red;
      color: white;
    }
    &--burned {
      background-color: #333;
      color: #fff;
    }
  }
  .burned {
    background-color: #333;
    color: #fff;
  }
  .wighld-0 {
    background-color: #fff;
    .cell-wighld {
      background-color: #aaa;
    }
  }
  .wighld-1 {
    background-color: rgb(233, 255, 189);
    .cell-wighld {
      background-color: rgb(233, 255, 189);
    }
  }
  .wighld-2 {
    background-color: rgb(166, 241, 125);
    .cell-wighld {
      background-color: rgb(166, 241, 125);
    }
  }
  .wighld-3 {
    background-color: rgb(49, 213, 74);
    .cell-wighld {
      background-color: rgb(49, 213, 74);
    }
  }
  .wighld-4 {
    background-color: rgb(0, 138, 126);
    .cell-wighld {
      background-color: rgb(0, 138, 126);
    }
  }
  .wighld-5 {
    background-color: rgb(191, 104, 253);
    .cell-wighld {
      background-color: rgb(191, 104, 253);
    }
  }
</style>