<script>
  import { BUILDINGS } from "../../../enums/buildings.enum";
  import { TIPS_TUTORIAL } from "../../../enums/tips/tips-tutorial.enum";

  import { selectTip } from "../../../stores/helpers/selectTip";
  import { selection } from "../../../stores/selection.store";
</script>

<h1>Choisir un emplacement</h1>
<p>
  Pour commencer, cliquez sur le bouton <i>Atterrir maintenant 🏳‍🌈</i> puis, sur la
  carte, choisissez une case pour le point d'impact du vaisseau-graine.
</p>
<p>
  Cela risque d'abimer un peu le <b>WIGHLD</b> autour, la nature sauvage, mais nous
  revitaliseront ça très bientôt !
</p>
<div class="btn-list">
  <button
    on:click={() =>
      selection.toggle({
        type: "toolbar-building",
        building: BUILDINGS.KOLOS_SEED,
      })}
  >
    Atterrir maintenant 🏳‍🌈
  </button>
  <button on:click={() => selectTip(TIPS_TUTORIAL.MAIN_GOAL)}>
    Précédent
  </button>
</div>
