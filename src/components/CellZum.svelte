<script lang="ts">
  import { selection } from "../stores/selection.store";
  import { type Zum } from "../types/Zum";
  import SvgCharacter from "./svg/SVGCharacter.svelte";
  import SvgCharacterSelected from "./svg/SVGCharacterSelected.svelte";

  export let zum: Zum;

  $: selected = $selection?.type === "zum" && $selection?.zumId === zum.id;

  function selectZum() {
    selection.toggle({ type: "zum", zumId: zum.id });
  }
</script>

<div
  class="zum"
  on:click={selectZum}
  on:keydown={selectZum}
  title={`ZUM

Les ZUMS génèrent des idées à chaque cycle, d'autant plus si le niveau de WIGHLD de la case sur laquelle ils se trouvent est élevé.

Évolution des idées : +0.5 (+0.5 x niveau de WIGHLD)

Pour passer les idées au HOL-ONG, les ZUMS sont limités par la connectivité de la case sur laquelle ils se trouvent.

Cliquez sur ce ZUM pour le déplacer.
`}
>
  {#if selected}
    <SvgCharacterSelected />
  {:else}
    <SvgCharacter />
  {/if}
  <span>{zum.data}</span>
</div>

<style lang="scss">
  .zum {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 65%;
    height: 65%;
    display: flex;
    cursor: pointer;
  }
</style>
