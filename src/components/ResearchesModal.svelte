<script lang="ts">
  import { get } from "svelte/store";
  import { UIState } from "../stores/ui-state.store";
  import { researches } from "../stores/researches.store";
  import Modal from "./Modal.svelte";
  import { UI_ELEMENTS } from "../enums/ui-elements.enum";
  import {
    RESEARCHES,
    type RESEARCHES_CATEGORIES,
  } from "../enums/researches.enum";
  import { RESEARCHES_DATA } from "../data/researches.data";
  import {
    RESEARCHES_CATEGORIES_DATA,
    RESEARCHES_CATEGORIES_LIST,
  } from "../data/researches-categories.data";
  import SvgVirtualVaults from "./svg/SVGVirtualVaults.svelte";
  import { globalRessources } from "../stores/global-ressources.store";
  import { RESSOURCES } from "../enums/ressources.enum";
  import { unlockResearch } from "../use-cases/unlockResearch/unlockResearch";

  let selectedCategory: RESEARCHES_CATEGORIES = "colony-development";
  let selectedResearch: RESEARCHES | undefined = undefined;

  $: tribesUnlocked = $researches[RESEARCHES.COLONY_SETUP_PROTOCOLE] === true;
  $: dataCoresCount = $globalRessources[RESSOURCES.DATA_CORES].value;

  function dismiss() {
    UIState.toggleElement(UI_ELEMENTS.RESEARCHES);
  }
</script>

<Modal {dismiss}>
  <div id="illustration">
    <SvgVirtualVaults />
  </div>
  <h2>VAULT virtuelle de recherche</h2>
  <p>
    Noyau{dataCoresCount > 1 ? "x" : ""} de donnée disponible {dataCoresCount >
    1
      ? "s"
      : ""} : {dataCoresCount}
  </p>
  <ul id="categories">
    {#each RESEARCHES_CATEGORIES_LIST as category}
      {@const locked = category !== "colony-development" && !tribesUnlocked}
      <li class={selectedCategory === category ? "selected" : ""}>
        <button
          on:click={() => (selectedCategory = category)}
          disabled={locked}
          {...locked
            ? {
                title: `Tribu verouillée.\n\nTéléchargez d'abord le ${RESEARCHES_DATA[
                  RESEARCHES.COLONY_SETUP_PROTOCOLE
                ].name.toLowerCase()}`,
              }
            : {}}
        >
          {RESEARCHES_CATEGORIES_DATA[category]?.short ||
            category.slice(0, 3).toUpperCase()}
        </button>
      </li>
    {/each}
  </ul>
  <h3>{RESEARCHES_CATEGORIES_DATA[selectedCategory]?.name}</h3>
  <p>{RESEARCHES_CATEGORIES_DATA[selectedCategory]?.description}</p>
  <ul id="category-researches">
    {#each RESEARCHES_CATEGORIES_DATA[selectedCategory]?.researches || [] as research, index}
      {@const prev =
        RESEARCHES_CATEGORIES_DATA[selectedCategory]?.researches[index - 1]}
      {@const locked = index > 0 && $researches[prev] !== true}
      <li class={selectedResearch === research ? "selected" : ""}>
        <button
          on:click={() =>
            (selectedResearch =
              selectedResearch === research ? undefined : research)}
          disabled={locked}
          {...locked
            ? {
                title: `Recherche verrouillée.\n\nTéléchargez d'abord la recherche ${RESEARCHES_DATA[prev].name}`,
              }
            : {}}>{RESEARCHES_DATA[research]?.name}</button
        >
      </li>
    {/each}
  </ul>
  {#if selectedResearch && $researches[selectedResearch] !== true}
    {@const locked = dataCoresCount === 0}
    <button disabled={locked} on:click={() => unlockResearch(selectedResearch)}
      >{locked
        ? "Pas de noyau de donnée disponible pour recevoir la recherche"
        : `Téléchargez la recherche ${RESEARCHES_DATA[selectedResearch].name}
      dans 1 noyau de donnée ?`}</button
    >
  {/if}
</Modal>

<style lang="scss">
  #illustration {
    position: absolute;
    top: -192px;
    left: -64px;
  }
  #categories {
    display: flex;
    list-style: none;
    padding-left: 0;
    gap: 12px;
    > .selected > button {
      background-color: #5fd;
    }
  }
  #category-researches {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 0;
    gap: 8px;
    > .selected > button {
      background-color: #5fd;
    }
  }
</style>
