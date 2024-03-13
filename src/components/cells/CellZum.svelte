<script lang="ts">
  import { GRID_CELL_PX } from "../../data/grid.data";
  import { hover } from "../../stores/hover.store";
  import { selection } from "../../stores/selection.store";
  import { type Zum } from "../../types/Zum";
  import SvgCharacter from "../svg/SVGCharacter.svelte";
  import SvgCharacterSelected from "../svg/SVGCharacterSelected.svelte";
  import Cell from "./Cell.svelte";

  export let zum: Zum;
  export let offsetX: number;
  export let offsetY: number;

  $: selected = $selection?.type === "zum" && $selection?.zum.id === zum.id;
</script>

<Cell
  className="zum"
  offsetX={offsetX + GRID_CELL_PX * 0.5}
  offsetY={offsetY + GRID_CELL_PX * 0.1}
  onHover={() => hover.select({ type: "zum", zum })}
  onClick={() => selection.toggle({ type: "zum", zum })}
>
  {#if selected}
    <SvgCharacterSelected
      width={GRID_CELL_PX * 0.6}
      height={GRID_CELL_PX * 1}
    />
  {:else}
    <SvgCharacter width={GRID_CELL_PX * 0.6} height={GRID_CELL_PX * 1} />
  {/if}
</Cell>
