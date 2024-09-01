<script>
  import { TIPS_TUTORIAL } from "../../../enums/tips/tips-tutorial.enum";

  import { selectTip } from "../../../stores/helpers/selectTip";
</script>

<h1>Atterrissage imminent !</h1>
<p>
  Le territoire qui se dévoile sous vos yeux est un espace encore vierge et
  inexploré de
  <b>Grand-Arbre</b>, l'immense forêt spatiale à bord de laquelle voyage les
  <b>ZUMS</b>.
</p>
<p>
  En parlant de voyage, une capsule-graine va bientôt terminer son voyage
  ici-même sous nos yeux !
</p>
<p>
  À son bord, quelques <b>ZUMS</b>, des vivres et, surtout, de la <b>DATA</b>.
</p>
<div class="btn-list">
  <button on:click={() => selectTip(TIPS_TUTORIAL.MAIN_GOAL)}>
    Ok, je suis prêt·e ! Que faut-il faire ? ✊
  </button>
  <button on:click={() => selectTip(TIPS_TUTORIAL.WELCOME)}> Précédent </button>
</div>
