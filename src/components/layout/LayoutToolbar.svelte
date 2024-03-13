<script lang="ts">
  import { tutorial } from "../../stores/tutorial.store";

  $: notReadCount = $tutorial.tips.filter(
    (tip) => !$tutorial.tipsRead[tip]
  ).length;
</script>

<div id="layout-toolbar">
  <button on:click={tutorial.tipsToggle}
    >Tutoriels ({notReadCount} 👀/{$tutorial.tips.length})</button
  >
</div>

<style lang="scss">
  #layout-toolbar {
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
</style>
