<script>
  import { TIPS_TUTORIAL } from "../../../enums/tips/tips-tutorial.enum";

  import { selectTip } from "../../../stores/helpers/selectTip";
</script>

<h1>But du jeu</h1>
<p>
  La <b>DATA</b> est primordiale pour la civilisation des <b>ZUMS</b> et de la vie.
</p>
<p>
  Ce sont les idées qu'ils ont et qu'ils se partagent sur le <b>HOL-ONG</b>, le
  réseau de conscience collective.
</p>
<p>
  En s'installant sur cette terre, la mission des <b>ZUMS</b> est non seulement
  d'y amplifier sa diversité et sa productivité, mais aussi de générer un
  maximum de
  <b>DATA</b>
  pour alimenter le <b>HOL-ONG</b>.
</p>
<p>
  <i
    >On gagne la partie en ayant produit et transféré 1000 <b>DATA</b> au
    <b>HOL-ONG</b>.</i
  >
</p>
<div class="btn-list">
  <button on:click={() => selectTip(TIPS_TUTORIAL.SELECT_LOCATION)}>
    Je vais relever le défi 🏆
  </button>
  <button on:click={() => selectTip(TIPS_TUTORIAL.ATTERRISSAGE_IMMINENT)}>
    Précédent
  </button>
</div>
