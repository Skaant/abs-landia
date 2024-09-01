<script lang="ts">
  import type { Cell as CellType } from "../../../types/Cell";
  import type { Selection } from "../../../stores/selection.store";
  import Layer from "../Layer.svelte";
  import CellSelectionToolbarBuilding from "../../cells/CellSelectionToolbarBuilding.svelte";

  export let rows!: CellType[][];
  export let selection!: Selection;
</script>

<Layer {rows} let:cell let:offsetX let:offsetY>
  {#if selection?.type === "toolbar-building"}
    <CellSelectionToolbarBuilding
      building={selection.building}
      {cell}
      {offsetX}
      {offsetY}
    />
  {/if}
</Layer>
