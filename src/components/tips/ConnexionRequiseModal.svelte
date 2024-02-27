<script lang="ts">
  import { TIPS } from "../../enums/tips.enum";
  import TipModal from "../TipModal.svelte";
  import SvgHolOng from "../svg/SVGHolOng.svelte";
</script>

<TipModal tip={TIPS.CONNEXION_REQUISE}>
  <div id="toolbar-tutorial-image">
    <SvgHolOng />
  </div>
  <p>Très bien explorateur, passons à la suite du plan :</p>
  <p>
    <b
      >Le HOL-ZONG, la conscience collective, a besoin de nous pour assimiler de
      nouvelles idées</b
    >, et nous avons besoin de lui pour accélerer notre développement.
  </p>
  <p>
    Nous recevons des technologies que nous stockons à l'intérieur de <b
      >noyaux de données</b
    >, pour apprendre à faire pousser de nouveaux bâtiments, ou de nouvelles
    activités.
  </p>
  <p>
    Pour le moment, nous devons établir un premier contact avec le réseau de
    conscience collective depuis notre point d'atterrissage.
  </p>
  <p>
    Passez au cycle suivant autant de fois que nécessaire pour atteindre 10
    idées au HOL-ZONG.
  </p>
</TipModal>
