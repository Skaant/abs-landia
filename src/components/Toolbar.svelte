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

  function selectBuilding(buildingType: BUILDINGS) {
    selection.toggle({
      type: "toolbar-building",
      buildingType,
    });
  }
</script>

<div id="toolbar-container">
  <div id="toolbar">
    {#each buildingsList as buildingId}
      {@const disabled = !checkBuildingCost(buildingId, $globalRessources)}
      {@const selected = selectedBuildingType == buildingId}
      <div
        class={`toolbar-cell${disabled ? " toolbar-cell--disabled" : ""}${
          selected ? " toolbar-cell--selected" : ""
        }`}
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
          <div class="building-name">{BUILDINGS_DATA[buildingId].name}</div>
          <div class="building-picture">
            <svelte:component this={BUILDINGS_PICTURE[buildingId]} />
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  #toolbar-container {
    width: 100%;
    position: fixed;
    bottom: 24px;
    display: flex;
    justify-content: center;
  }
  #toolbar {
    width: max-content;
    display: flex;
    gap: 8px;
    box-sizing: border-box;
  }
  .toolbar-cell {
    width: 124px;
    height: 178px;
    background-color: #eee;
    color: #111;
    border-radius: 16px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 8px 12px;
    box-shadow: #8886 0 0 8px 8px;
    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    &--selected {
      justify-content: center;
      background-color: #5fd;
    }
  }
  .building-name {
    margin-bottom: 16px;
  }
  .building-picture {
    width: 96px;
  }
</style>
