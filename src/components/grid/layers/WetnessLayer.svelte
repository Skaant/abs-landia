<script lang="ts">
  import type { Cell as CellType } from "../../../types/Cell";
  import CellEmpty from "../../cells/CellEmpty.svelte";
  import CellWetness from "../../cells/CellWetness.svelte";
  import Layer from "../Layer.svelte";

  export let rows!: CellType[][];
</script>

<Layer {rows} let:cell let:offsetX let:offsetY>
  {#if cell?.revealed}
    <CellWetness {cell} {offsetX} {offsetY} />
  {/if}
</Layer>
