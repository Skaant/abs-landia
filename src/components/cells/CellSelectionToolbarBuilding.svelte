<script lang="ts">
  import { addBuildingOnCell } from "../../use-cases/addBuildingOnCell/addBuildingOnCell";
  import { type Cell } from "../../types/Cell";
  import ClickableCell from "./ClickableCell.svelte";
  import { type SelectionToolbarBuilding } from "../../stores/selection.store";

  export let cell!: Cell;
  export let selection!: SelectionToolbarBuilding;

  $: selectedBuildingType = selection.buildingType;
</script>

<ClickableCell
  onClick={() => addBuildingOnCell(selectedBuildingType, cell)}
  disabled={!cell.revealed || cell.buildingId !== undefined}
/>
