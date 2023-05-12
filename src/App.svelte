<script lang="ts">
  import { BUILDINGS } from "./enums/buildings.enum";
  import { LENGTH_X, LENGTH_Y, cells } from "./stores/map.store";
  import { buildings } from "./stores/buildings.store";
  import type { Cell } from "./types/Cell";

  function onClick(cell: Cell) {
    buildings.addBuilding(cell, BUILDINGS.KOLOS_SEED);
  }

  const _rows = [...(new Array(LENGTH_X))].map((_, i) => [
    ...(new Array(LENGTH_Y))
  ].map((_, j) => `${i}-${j}`))
</script>

<div>
  <table>
  {#if _rows}
  {#each _rows as cellsId}
    <tr class="row">
      {#each cellsId as cellId}
        {@const cell = $cells[cellId]}
        {@const building = cell.buildingId && $buildings[cell.buildingId]}
        <td
          class={`cell ${cell.burned ? 'burned' : `wighld-${cell.wighld}`}`}
          on:click={() => onClick(cell)}
          on:keydown={() => onClick(cell)}
        >
          {cell.wighld}
          {building?.type || ''}
          {cell.burned ? '🔥' : ''}
        </td>
      {/each}
      </tr>
  {/each}
  {/if}
</table>
</div>

<style>
  .row {
    display: flex;
  }
  .cell {
    width: 40px;
    height: 40px;
    border: 1px solid black;
    margin: 5px;
    border-radius: 5px;
  }
  .burned {
    background-color: #333;
    color: #fff;
  }
  .wighld-0 {
    background-color: #fff;
  }
  .wighld-1 {
    background-color: rgb(233, 255, 189);
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
