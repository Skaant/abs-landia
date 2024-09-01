<script>
  import { selection } from "../../stores/selection.store";
  import { UIState } from "../../stores/ui-state.store";
  import TipsSwitch from "../tips/TipsSwitch.svelte";
  import SelectionToolbarBuilding from "./selection/SelectionToolbarBuilding.svelte";

  $: _selection = $selection;
</script>

<div id="dialog">
  <div id="dialog-card">
    {#if _selection && _selection.type === "toolbar-building"}
      <SelectionToolbarBuilding />
    {:else if $UIState.tip}
      <TipsSwitch tip={$UIState.tip} />
    {/if}
  </div>
</div>

<style lang="scss">
  #dialog {
    padding: 0 12px;
    width: 420px;
    max-height: 100%;
    overflow: auto;
  }
  #dialog-card {
    background-color: #eee;
    border-radius: 16px;
    padding: 24px 24px 42px;
    overflow: auto;
  }
</style>
