<script lang="ts">
  import { tutorial } from "../stores/tutorial.store";
  import { selectTip } from "../stores/helpers/selectTip";
  import { TIPS_DATA } from "../data/tips.data";
  import { getTipTypeIcon } from "../helpers/getTipTypeIcon";

  let open = false;

  $: tips = $tutorial.tips;
  $: tipsRead = $tutorial.tipsRead;
  $: tipsHistory = $tutorial.tipsHistory;
</script>

<div id="layout-tips">
  <button
    class="ui-button"
    disabled={!tipsHistory.length}
    on:click={() => {
      open = !open;
    }}
  >
    Quêtes et astuces{tipsHistory.length && !open
      ? ` (${tipsHistory.length})`
      : ""} 📜💡
    {open ? "▼" : "▲"}
  </button>
  {#each tips as tip}
    {@const _tip = TIPS_DATA[tip]}
    <button
      class="ui-button"
      on:click={() => selectTip(tip)}
      title={`Ouvrir ${_tip.name}`}
    >
      {getTipTypeIcon(_tip.type)}
      {tipsRead[tip]
        ? "📜"
        : `👀${
            _tip.type === "quest" || _tip.type === "quest-achieved"
              ? "❗"
              : "❕"
          }`}
      {_tip.name}
    </button>
  {/each}
  {#if open}
    {#each tipsHistory as tip}
      {@const _tip = TIPS_DATA[tip]}
      <button
        class="ui-button tip-archived"
        on:click={() => selectTip(tip)}
        title={`Ouvrir ${_tip.name}`}
      >
        {_tip.type === "gameplay"
          ? "💡"
          : _tip.type === "quest"
          ? "🏆"
          : "🏆✅"}
        {tipsRead[tip] ? "📜" : `👀${_tip.type === "gameplay" ? "❕" : "❗"}`}
        {_tip.name}
      </button>
    {/each}
  {/if}
</div>

<style lang="scss">
  #layout-tips {
    position: fixed;
    top: 64px;
    left: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    justify-content: center;
    z-index: 103;
  }
  .tip-archived {
    opacity: 66%;
  }
</style>
