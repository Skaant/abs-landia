<script lang="ts">
  import { tutorial } from "../stores/tutorial.store";
  import { UIState } from "../stores/ui-state.store";
  import { TIPS_DATA } from "../data/tips.data";
  import { TIPS } from "../enums/tips.enum";

  function selectTip(tip: TIPS) {
    UIState.setTip(tip);
    tutorial.readTip(tip);
  }

  $: tips = $tutorial.tips;
  $: tipsRead = $tutorial.tipsRead;
</script>

<div id="layout-tips">
  {#each tips as tip}
    {@const _tip = TIPS_DATA[tip]}
    <button class="ui-button" on:click={() => selectTip(tip)} title={_tip.name}>
      {_tip.type === "tutorial" ? "💡" : _tip.type === "quest" ? "🏆" : "✅"}
      {tipsRead[tip] ? "📜" : `👀${_tip.type === "tutorial" ? "❕" : "❗"}`}
    </button>
  {/each}
</div>

<style lang="scss">
  #layout-tips {
    position: fixed;
    top: 64px;
    right: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    z-index: 103;
  }
</style>
