<script lang="ts">
  import type { Cell as CellType } from "../../../types/Cell";
  import Layer from "../Layer.svelte";
  import { zums } from "../../../stores/zums.store";
  import CellZum from "../../cells/CellZum.svelte";

  export let rows!: CellType[][];
</script>

<Layer {rows} let:cell let:offsetX let:offsetY>
  {@const zum = cell.zumId && $zums[cell.zumId]}
  {#if zum}
    <CellZum {zum} {offsetX} {offsetY} />
  {/if}
</Layer>
