<script lang="ts">
  import { BUILDINGS } from "./enums/buildings.enum";
  import { buildings, cells, rows } from "./stores/map.store";
  import type { Building } from "./types/Building";
  import type { Cell } from "./types/Cell";

  cells.subscribe(a => console.log(a))

  function onClick(cell: Cell) {
    buildings.update((buildings) => {
      const building = {
        id: Object.values($buildings).length.toString(),
        cellId: cell.id,
        type: BUILDINGS.KOLOS_SEED,
      } as Building;
      $buildings[building.id] = building;
      return buildings;
    });
  }
</script>

<div>
  <table>
  {#each $rows as row}
    <tr class="row">
      {#each row.cells as cell}
        <td
          class={`cell ${cell.burned ? 'burned' : `wighld-${typeof cell.wighldModified == 'number' ? cell.wighldModified : cell.wighld}`}`}
          on:click={() => {
            onClick(cell)
          }}
          on:keydown={() => onClick(cell)}
        >
          {typeof cell.wighldModified == 'number' ? cell.wighldModified : cell.wighld} {cell.wighldModifier || ''}
          {cell.building?.type || ''}
          {cell.burned ? '🔥' : ''}
        </td>
      {/each}
      </tr>
  {/each}
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
