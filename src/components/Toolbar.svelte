<script lang="ts">
  import { BUILDINGS } from "../enums/buildings.enum";
  import { selection } from "../stores/selection.store";
  import { buildings } from "../stores/buildings.store";
  import SvgKolosSeed from "./svg/SVGKolosSeed.svelte";
  import { getBuildingDescription } from "../helpers/getBuildingDescription";
  import { BUILDINGS_DATA } from "../data/buildings.data";
  import SvgDom from "./svg/SvgDom.svelte";
  import SvgBaliseBlix from "./svg/SVGBaliseBlix.svelte";
  import SvgCuveVortex from "./svg/SVGCuveVortex.svelte";
  import SvgSiloAJing from "./svg/SVGSiloAJing.svelte";
  import { getToolbarAvailableBuildings } from "../helpers/getToolbarAvailableBuildings";
  import { checkBuildingCost } from "../helpers/checkBuildingCost";
  import { globalRessources } from "../stores/global-ressources.store";
  import SvgBaliseHolOng from "./svg/SVGBaliseHolOng.svelte";
  import SvgBaliseFrff from "./svg/SVGBaliseFrff.svelte";
  import ToolbarTutorial from "./ToolbarTutorial.svelte";

  const BUILDINGS_PICTURE = {
    [BUILDINGS.KOLOS_SEED]: SvgKolosSeed,
    [BUILDINGS.DOM]: SvgDom,
    [BUILDINGS.CUVE_VORTEX]: SvgCuveVortex,
    [BUILDINGS.SILO_A_JING]: SvgSiloAJing,
    [BUILDINGS.BALISE_HOL_ONG]: SvgBaliseHolOng,
    [BUILDINGS.BALISE_FRFF]: SvgBaliseFrff,
    [BUILDINGS.BALISE_BLIX]: SvgBaliseBlix,
  };

  $: type = $selection?.type;
  $: buildingType = $selection?.["buildingType"];
  $: selectedBuildingType = type === "toolbar-building" && buildingType;
  $: buildingsList = getToolbarAvailableBuildings($buildings);
  $: tutorial = buildingsList[0] === BUILDINGS.KOLOS_SEED;

  function selectBuilding(buildingType: BUILDINGS) {
    selection.toggle({
      type: "toolbar-building",
      buildingType,
    });
  }
</script>

<div id="toolbar-container">
  {#if tutorial && !$selection}
    <ToolbarTutorial {selectBuilding} />
  {:else}
    <div id="toolbar">
      {#each buildingsList as buildingId}
        {@const disabled = !checkBuildingCost(buildingId, $globalRessources)}
        {@const selected = selectedBuildingType == buildingId}
        <div
          class={`toolbar-cell${disabled ? " toolbar-cell--disabled" : ""}`}
          title={selected
            ? ""
            : `${getBuildingDescription(BUILDINGS_DATA[buildingId])}
Cliquez sur le bâtiment pour le construire.`}
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
      <div class="toolbar-cell" />
    </div>
  {/if}
</div>

<style lang="scss">
  #toolbar-container {
    width: 100%;
    overflow: auto;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
  }
  #toolbar {
    height: 96px;
    width: max-content;
    display: flex;
    gap: 8px;
    background-color: #eee6;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
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
    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
</style>
