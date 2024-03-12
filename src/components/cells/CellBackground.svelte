<script lang="ts">
  import Cell from "./Cell.svelte";
  import { type Cell as CellType } from "../../types/Cell";
  import { hover } from "../../stores/hover.store";
  import { GRID_CELL_PX } from "../../data/grid.data";
  import SvgCellWighld0 from "../svg/cells-wighld/SVGCellWighld0.svelte";
  import SvgCellWighld1 from "../svg/cells-wighld/SVGCellWighld1.svelte";
  import SvgCellWighld2 from "../svg/cells-wighld/SVGCellWighld2.svelte";
  import SvgCellWighld3 from "../svg/cells-wighld/SVGCellWighld3.svelte";
  import SvgCellWighld4 from "../svg/cells-wighld/SVGCellWighld4.svelte";
  import SvgCellWighld5 from "../svg/cells-wighld/SVGCellWighld5.svelte";
  import SVGCellWighldBurned from "../svg/cells-wighld/SVGCellWighldBurned.svelte";
  import SvgCellHidden from "../svg/cells-wighld/SVGCellHidden.svelte";

  const BACKGROUNDS = {
    hidden: SvgCellHidden,
    burned: SVGCellWighldBurned,
    0: SvgCellWighld0,
    1: SvgCellWighld1,
    2: SvgCellWighld2,
    3: SvgCellWighld3,
    4: SvgCellWighld4,
    5: SvgCellWighld5,
  };

  export let cell: CellType;
  export let offsetX: number;
  export let offsetY: number;

  $: background = !cell.revealed
    ? BACKGROUNDS.hidden
    : cell.burned
      ? BACKGROUNDS.burned
      : BACKGROUNDS[cell.effectiveWighld];
</script>

<Cell
  className="background"
  {offsetX}
  {offsetY}
  onHover={() => hover.select({ type: "cell", cell })}
>
  <svelte:component
    this={background}
    height={GRID_CELL_PX}
    width={GRID_CELL_PX}
  />
</Cell>
