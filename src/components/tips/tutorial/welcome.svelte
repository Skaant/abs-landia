<script>
  import { TIPS_TUTORIAL } from "../../../enums/tips/tips-tutorial.enum";

  import { selectTip } from "../../../stores/helpers/selectTip";
</script>

<h1>Bienvenue 😀</h1>
<p>
  Vous êtes à l'<b>EXPANS-ERA</b>, une époque fabuleuse où les <b>ZUMS</b>, en
  association avec la nature, sont partis à la conquête de l'univers pour y
  répandre la vie, et la conscience.
</p>
<button
  class="btn-list"
  on:click={() => selectTip(TIPS_TUTORIAL.ATTERRISSAGE_IMMINENT)}
>
  Wow, so nice ! 🌱
</button>
