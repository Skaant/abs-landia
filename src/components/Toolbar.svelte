<script>
  import { BUILDINGS } from "../enums/buildings.enum";
  import { selection } from "../stores/selection.store";
  import SvgKolosSeed from "./svg/SVGKolosSeed.svelte";

  $: type = $selection?.type;
  $: id = $selection?.id;
  $: kolosSeedSelected =
    type === "toolbar-building" && id === BUILDINGS.KOLOS_SEED;

  function selectKolosSeed() {
    if (kolosSeedSelected) {
      selection.set(undefined);
      return;
    }
    selection.set({
      type: "toolbar-building",
      id: BUILDINGS.KOLOS_SEED,
    });
  }
</script>

<div id="toolbar">
  <div
    class="toolbar-cell"
    on:click={selectKolosSeed}
    on:keydown={selectKolosSeed}
  >
    {#if kolosSeedSelected}
      Annuler
    {:else}
      <SvgKolosSeed />
    {/if}
  </div>
  <div class="toolbar-cell" />
</div>

<style>
  #toolbar {
    position: fixed;
    left: 24px;
    bottom: 24px;
    height: 96px;
    background-color: rgb(201, 145, 252);
    display: flex;
    gap: 8px;
    border-radius: 16px;
    padding: 8px;
    box-sizing: border-box;
  }
  .toolbar-cell {
    width: 80px;
    height: 80px;
    background-color: blueviolet;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
</style>
