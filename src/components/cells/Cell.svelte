<script lang="ts">
  import { hover } from "../../stores/hover.store";

  export let className: string | undefined = undefined;
  export let offsetX: number;
  export let offsetY: number;
  export let onHover: undefined | (() => void) = undefined;
</script>

<div
  class={`cell${className ? ` cell-${className}` : ""}`}
  style={`top: ${offsetY}px; left: ${offsetX}px`}
  on:mouseenter={onHover}
  on:mouseleave={hover.unselect}
>
  <slot />
</div>

<style lang="scss">
  .cell {
    position: absolute;
  }
</style>
