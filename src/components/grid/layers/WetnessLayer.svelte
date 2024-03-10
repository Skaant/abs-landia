<script lang="ts">
  import type { Cell as CellType } from "../../../types/Cell";
  import CellEmpty from "../../cells/CellEmpty.svelte";
  import CellWetness from "../../cells/CellWetness.svelte";
  import Layer from "../Layer.svelte";

  export let rows!: CellType[][];
</script>

<Layer className="wetness" {rows} let:cell>
  {#if cell?.revealed}
    <CellWetness {cell} />
  {:else}
    <CellEmpty />
  {/if}
</Layer>
