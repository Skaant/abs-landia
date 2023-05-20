<script lang="ts">
  import { BUILDINGS } from "../enums/buildings.enum";
  import { selection } from "../stores/selection.store";
  import SvgKolosSeed from "./svg/SVGKolosSeed.svelte";
  import { passTurn } from "../use-cases/pass-turn/pass-turn";
  import { getBuildingDescription } from "../helpers/getBuildingDescription";
  import { BUILDINGS_DATA } from "../data/buildings.data";
  import SvgDom from "./svg/SvgDom.svelte";
  import SvgBaliseBlix from "./svg/SVGBaliseBlix.svelte";

  const BUILDINGS_PICTURE = {
    [BUILDINGS.KOLOS_SEED]: SvgKolosSeed,
    [BUILDINGS.DOM]: SvgDom,
    [BUILDINGS.BALISE_BLIX]: SvgBaliseBlix,
  };

  const AVAILABLE_BUILDINGS = [
    BUILDINGS.KOLOS_SEED,
    BUILDINGS.DOM,
    BUILDINGS.BALISE_BLIX,
  ];

  $: type = $selection?.type;
  $: id = $selection?.id;
  $: selectedBuildingId = type === "toolbar-building" && id;

  function selectBuilding(buildingId: BUILDINGS) {
    if (selectedBuildingId === buildingId) {
      selection.set(undefined);
      return;
    }
    selection.set({
      type: "toolbar-building",
      id: buildingId,
    });
  }
</script>

<div id="toolbar">
  {#each AVAILABLE_BUILDINGS as buildingId}
    {@const selected = selectedBuildingId == buildingId}
    <div
      class="toolbar-cell"
      title={selected ? "" : getBuildingDescription(BUILDINGS_DATA[buildingId])}
      on:click={() => selectBuilding(buildingId)}
      on:keydown={() => selectBuilding(buildingId)}
    >
      {#if selected}
        Annuler
      {:else}
        <svelte:component this={BUILDINGS_PICTURE[buildingId]} />
      {/if}
    </div>
  {/each}
  <div
    class="toolbar-cell"
    on:click={() => passTurn()}
    on:keydown={() => passTurn()}
  >
    Prochain tour
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
