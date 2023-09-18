<script lang="ts">
  import { BUILDINGS } from "../enums/buildings.enum";
  import { selection } from "../stores/selection.store";
  import Modal from "./Modal.svelte";
  import SvgKolosSeedTravelling from "./svg/SVGKolosSeedTravelling.svelte";

  function selectBuilding() {
    selection.set({
      type: "toolbar-building",
      buildingType: BUILDINGS.KOLOS_SEED,
    });
  }
</script>

<Modal>
  <div id="toolbar-tutorial-image">
    <SvgKolosSeedTravelling />
  </div>
  <h2>Capsule-graine en transit, prête à atterir !</h2>
  <p>
    Une longue traversée dans Grand-Arbre, la forêt-univers, s'achève pour la
    petite caspule-graine.
  </p>
  <p>
    À son bord, les ZUMS, ces primates très évolués, attendent de débarquer pour
    amplifier a vie qu'iels trouveront là.
  </p>
  <button on:click={() => selectBuilding()}>
    Choisissez un point d'impact sur le terrain en contrebas
  </button>
</Modal>

<style lang="scss">
  #toolbar-tutorial-image {
    max-height: 300px;
    display: flex;
    justify-content: center;
  }
</style>
