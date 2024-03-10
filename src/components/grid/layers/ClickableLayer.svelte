<script lang="ts">
  import type { Cell as CellType } from "../../../types/Cell";
  import type { Selection } from "../../../stores/selection.store";
  import Layer from "../Layer.svelte";
  import CellSelectionToolbarBuilding from "../../cells/CellSelectionToolbarBuilding.svelte";

  export let rows!: CellType[][];
  export let selection!: Selection;
</script>

<Layer className="clickable" {rows} let:cell>
  {#if selection?.type === "toolbar-building"}
    <CellSelectionToolbarBuilding {selection} {cell} />
  {/if}
</Layer>
