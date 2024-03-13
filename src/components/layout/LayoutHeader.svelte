<script lang="ts">
  import { tutorial } from "../../stores/tutorial.store";
  import LayoutGlobalRessources from "./LayoutGlobalRessources.svelte";

  $: notReadCount = $tutorial.tips.filter(
    (tip) => !$tutorial.tipsRead[tip]
  ).length;
</script>

<div id="layout-header">
  <LayoutGlobalRessources />
  <div>
    <button on:click={tutorial.tipsToggle}>
      Tutoriels ({notReadCount} 👀/{$tutorial.tips.length})
    </button>
  </div>
</div>

<style lang="scss">
  #layout-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #eee;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
</style>
