<script lang="ts">
  import { TIPS } from "../../enums/tips.enum";
  import TipModal from "../TipModal.svelte";
  import SvgKolosSeedTravelling from "../svg/SVGKolosSeedTravelling.svelte";
</script>

<TipModal tip={TIPS.ATTERRISSAGE}>
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
  <p>
    <b>Cliquez sur la capsule-graine</b> en bas de l'écran et choisissez l'emplacement
    de son atterissage !
  </p>
</TipModal>
