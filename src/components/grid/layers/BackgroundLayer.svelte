<script lang="ts">
  import type { Cell as CellType } from "../../../types/Cell";
  import CellBackground from "../../cells/CellBackground.svelte";
  import Layer from "../Layer.svelte";

  export let rows!: CellType[][];
</script>

<Layer {rows} let:cell let:offsetX let:offsetY>
  <CellBackground {cell} {offsetX} {offsetY} />
</Layer>
