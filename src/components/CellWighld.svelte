<script lang="ts">
  import { type Cell } from "../types/Cell";
  import SvgHighGrass from "./svg/SVGHighGrass.svelte";
  import SvgPathTile from "./svg/SVGPathTile.svelte";

  export let cell: Cell;
</script>

<div
  class={`cell-wighld${
    cell.effectiveWighld < 0
      ? " cell-wighld--burning"
      : cell.burned
      ? " cell-wighld--burned"
      : ""
  }`}
  title={`Niveau de WIGHLD

Un niveau négatif rend stérile la cellule, même revenu à un niveau supérieur à 0, jusqu'à correction par une balise BLIX.`}
>
  {cell.effectiveWighld}
  {#if cell.burned}
    <SvgPathTile />
  {:else}
    <SvgHighGrass />
  {/if}
</div>

<style lang="scss">
  .cell-wighld {
    top: 0;
    right: 0;
    position: absolute;
    height: 16%;
    font-size: 12px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
    cursor: help;
    &--burned {
      background-color: #333;
      color: #fff;
    }
  }
</style>
