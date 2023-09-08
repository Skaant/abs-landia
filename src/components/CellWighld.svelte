<script lang="ts">
  import { AURAS_DATA } from "../data/auras.data";
  import { AURA_EFFECTS } from "../enums/aura-effects.enum";
  import { type Cell } from "../types/Cell";
  import SvgHighGrass from "./svg/SVGHighGrass.svelte";
  import SvgPathTile from "./svg/SVGPathTile.svelte";

  export let cell: Cell;

  $: auras = (cell.auraEffects || []).filter(
    (aura) => aura.id === AURA_EFFECTS.WIGHLD_MODIFICATION
  );
</script>

<div
  class={`cell-wighld${
    cell.effectiveWighld < 0
      ? " cell-wighld--burning"
      : cell.burned
      ? " cell-wighld--burned"
      : ""
  }`}
  title={`Niveau effectif de WIGHLD

Un niveau négatif rend stérile la cellule, même revenu à un niveau supérieur à 0, jusqu'à correction par une balise BLIX.`}
>
  {cell.effectiveWighld}
  {#if cell.burned}
    <SvgPathTile />
  {:else}
    <SvgHighGrass />
  {/if}
  {#if cell.effectiveWighld != cell.intrinsicWighld}
    <span
      title={`Niveau intrinséque de WIGHLD

La valeur naturelle de WIGHLD de la cellule.

Cette valeur a 2.5% de chances d'augmenter de 1 à chaque tour et 2.5% de chances de diminuer de 1 à chaque tour.
Ce processus ne peut baisser la valeur en dessous de 0 et la brûler, ni passer au-dessus du niveau maximal de WIGHLD intrinsèque.

- ${auras
        .map((aura) => {
          return aura.id + ": " + aura.value;
        })
        .join("\n -")}`}
    >
      ({cell.intrinsicWighld})
    </span>
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
