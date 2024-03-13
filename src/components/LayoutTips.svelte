<script lang="ts">
  import { tutorial } from "../stores/tutorial.store";
  import { selectTip } from "../stores/helpers/selectTip";
  import { TIPS_DATA } from "../data/tips.data";
  import { getTipTypeIcon } from "../helpers/getTipTypeIcon";

  let open = false;
</script>

{#if $tutorial.tipsOpen}
  <div id="layout-tips">
    {#each $tutorial.tips as tip}
      {@const _tip = TIPS_DATA[tip]}
      <button on:click={() => selectTip(tip)} title={`Ouvrir ${_tip.name}`}>
        {getTipTypeIcon(_tip.type)}
        {$tutorial.tipsRead[tip]
          ? ""
          : `👀${
              _tip.type === "quest" || _tip.type === "quest-achieved"
                ? "❗"
                : "❕"
            }`}
        {_tip.name}
      </button>
    {/each}
    {#if $tutorial.tipsHistory.length}
      <button on:click={() => (open = !open)}>
        Tutoriels archivés ({$tutorial.tipsHistory.length})
        {open ? "▲" : "▼"}
      </button>
    {/if}
    {#if open}
      {#each $tutorial.tipsHistory as tip}
        {@const _tip = TIPS_DATA[tip]}
        <button
          class="tip-archived"
          on:click={() => selectTip(tip)}
          title={`Ouvrir ${_tip.name}`}
        >
          {_tip.type === "gameplay"
            ? "💡"
            : _tip.type === "quest"
              ? "🏆"
              : "🏆✅"}
          {$tutorial.tipsRead[tip]
            ? "📜"
            : `👀${_tip.type === "gameplay" ? "❕" : "❗"}`}
          {_tip.name}
        </button>
      {/each}
    {/if}
  </div>
{/if}

<style lang="scss">
  #layout-tips {
    position: fixed;
    top: 64px;
    right: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
    justify-content: center;
    z-index: 103;
  }
  .tip-archived {
    opacity: 66%;
  }
</style>
