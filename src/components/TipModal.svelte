<script lang="ts">
  import Modal from "./Modal.svelte";
  import { TIPS_DATA } from "../data/tips.data";
  import { UIState } from "../stores/ui-state.store";
  import { tutorial } from "../stores/tutorial.store";
  import { TIPS } from "../enums/tips.enum";
  import { getTipTypeIcon } from "../helpers/getTipTypeIcon";

  export let tip: TIPS;
  export let actions:
    | undefined
    | {
        label: string;
        action: () => void;
      }[] = undefined;
  export let disabledArchive = false;

  function selectTip(tip: TIPS) {
    UIState.setTip(tip);
    tutorial.readTip(tip);
  }

  function dismissTip() {
    UIState.setTip(undefined);
  }

  $: _tip = TIPS_DATA[tip];

  $: indexOf = $tutorial.tips.indexOf(tip);
  $: prevTip =
    $tutorial.tips.length > 1 && indexOf > 0 && $tutorial.tips[indexOf - 1];
  $: prevTipData = prevTip && TIPS_DATA[prevTip];
  $: nextTip =
    $tutorial.tips.length > 1 &&
    indexOf < $tutorial.tips.length - 1 &&
    $tutorial.tips[indexOf + 1];
  $: nextTipData = nextTip && TIPS_DATA[nextTip];

  $: archived = $tutorial.tipsHistory.includes(tip);
</script>

<Modal dismiss={dismissTip}>
  <div class="tip-modal-buttons">
    <button
      class="ui-button"
      title={prevTipData?.name}
      on:click={() => selectTip(prevTip)}
      disabled={!prevTip}
    >
      {"<"}
    </button>
    <button
      class="ui-button"
      title={nextTipData?.name}
      on:click={() => selectTip(nextTip)}
      disabled={!nextTip}
    >
      {">"}
    </button>
  </div>
  <h2>
    {getTipTypeIcon(_tip.type)}
    {_tip.name}
  </h2>
  <slot />
  <div class="tip-modal-actions">
    {#each actions || [] as { label, action }}
      <button class="ui-button" on:click={action}>{label}</button>
    {/each}
    {#if !disabledArchive && !archived}
      <button
        class="ui-button"
        on:click={() => {
          tutorial.historizeTip(tip);
          selectTip(nextTip);
        }}
      >
        Archiver
      </button>
    {/if}
    <button class="ui-button" on:click={dismissTip}>Fermer</button>
  </div>
</Modal>

<style lang="scss">
  .tip-modal-actions {
    margin-top: 34px;
    > button {
      margin-bottom: 8px;
    }
  }
  :global(#toolbar-tutorial-image) {
    max-height: 300px;
    display: flex;
    justify-content: center;
  }
</style>
