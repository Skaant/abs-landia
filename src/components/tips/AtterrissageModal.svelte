<script lang="ts">
  import { BUILDINGS } from "../../enums/buildings.enum";
  import { TIPS } from "../../enums/tips.enum";
  import { selection } from "../../stores/selection.store";
  import { UIState } from "../../stores/ui-state.store";
  import TipModal from "../TipModal.svelte";
  import SvgKolosSeedTravelling from "../svg/SVGKolosSeedTravelling.svelte";

  function selectKolosSeed() {
    selection.set({
      type: "toolbar-building",
      buildingType: BUILDINGS.KOLOS_SEED,
    });
    UIState.setTip(undefined);
  }
</script>

<TipModal
  tip={TIPS.ATTERRISSAGE}
  actions={[
    {
      label: "Choisir un point d'atterissage",
      action: selectKolosSeed,
    },
  ]}
>
  <div id="toolbar-tutorial-image">
    <SvgKolosSeedTravelling />
  </div>
  <p>
    <b>La capsule-graine</b> s'apprête à tomber au sol, après une longue traversée
    dans Grand-Arbre, la forêt-univers.
  </p>
  <p>
    À son bord, les ZUMS, ces primates très évolués, attendent de débarquer pour
    <b>amplifier la vie</b> qu'iels trouveront là.
  </p>
</TipModal>

<style lang="scss">
  #toolbar-tutorial-image {
    max-height: 300px;
    display: flex;
    justify-content: center;
  }
</style>
