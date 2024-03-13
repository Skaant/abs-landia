<script lang="ts">
  import { selection } from "../../../stores/selection.store";
  import SelectionZum from "./SelectionZum.svelte";

  $: _selection = $selection;
</script>

{#if $selection}
  <div id="layout-selection">
    <div id="selection">
      {#if _selection.type === "zum"}
        <SelectionZum />
      {/if}
    </div>
  </div>
{/if}

<style lang="scss">
  #layout-selection {
    position: absolute;
    bottom: 64px;
    left: calc(50vw - 350px);
    max-height: calc(100% - 64px);
  }
  #selection {
    width: 700px;
    margin: 0 auto;
    padding: 16px;
    border-radius: 8px;
    background-color: #eee;
    height: max-content;
  }
</style>
