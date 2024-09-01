<script lang="ts">
  import { BUILDINGS_DATA } from "../../../data/buildings.data";
  import { BUILDINGS } from "../../../enums/buildings.enum";
  import { selection } from "../../../stores/selection.store";
  import SvgDom from "../../svg/SvgDom.svelte";
  import SvgKolosSeed from "../../svg/buildings/SVGKolosSeed.svelte";

  const PICTURES = {
    [BUILDINGS.KOLOS_SEED]: SvgKolosSeed,
    [BUILDINGS.DOM]: SvgDom,
  };

  $: building = $selection.type === "toolbar-building" && $selection.building;
  $: DATA = BUILDINGS_DATA[building];
</script>

<svelte:component this={PICTURES[building]} />
<h1>{DATA.name}</h1>
<p>{DATA.description}</p>
