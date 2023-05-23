<script lang="ts">
  import { type Cell } from "../types/Cell";
  import SvgHighGrass from "./svg/SVGHighGrass.svelte";
  import SvgPathTile from "./svg/SVGPathTile.svelte";
  import SvgCloudUpload from "./svg/SvgCloudUpload.svelte";

  export let cell: Cell;
</script>

<div
  class={`cell-connectivity${
    cell.connectivity < 0
      ? " cell-connectivity--burning"
      : cell.burned
      ? " cell-connectivity--burned"
      : ""
  }`}
  title={`Connectivité.
Quantité de données transférable depuis cette case au HOL-ONG chaque cycle.`}
>
  {cell.connectivity}
  <SvgCloudUpload />
</div>

<style lang="scss">
  .cell-connectivity {
    top: 16%;
    right: 0;
    position: absolute;
    height: 16%;
    font-size: 12px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
  }
</style>
