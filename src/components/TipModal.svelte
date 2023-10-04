<script lang="ts">
  import Modal from "./Modal.svelte";
  import { TIPS_DATA } from "../data/tips.data";
  import { UIState } from "../stores/ui-state.store";
  import { tutorial } from "../stores/tutorial.store";
  import { TIPS } from "../enums/tips.enum";

  export let tip: TIPS;
  export let actions:
    | undefined
    | {
        label: string;
        action: () => void;
      }[] = undefined;

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
    {_tip.type === "tutorial" ? "💡" : _tip.type === "quest" ? "🏆" : "✅"}
    {_tip.name}
  </h2>
  <slot />
  {#if actions}
    <div class="tip-modal-actions">
      {#each actions as { label, action }}
        <button class="ui-button" on:click={action}>{label}</button>
      {/each}
    </div>
  {/if}
</Modal>

<style lang="scss">
  .tip-modal-actions {
    margin-top: 34px;
  }
</style>
