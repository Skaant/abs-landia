<script lang="ts">
  import Cell from "./Cell.svelte";

  export let onClick: () => void;
  export let disabled: boolean = false;
</script>

<Cell
  className={disabled ? "cell-disabled" : "clickable-cell"}
  on:click={onClick}
  on:keydown={onClick}
/>
