<script lang="ts">
  import { TIPS } from "../../enums/tips.enum";
  import TipModal from "../TipModal.svelte";
</script>

<TipModal tip={TIPS.NOYAUX_DE_DONNEES}>
  <p>
    Les noyaux de données sont une ressource rare qui sert à stocker les idées
    qu'hébèrge le HOL-ZONG.
  </p>
  <p>
    Grâce à chaque noyau de données utilisé, de nouveaux bâtiments, de nouvelles
    actions et tribus, deviennent disponibles.
  </p>
  <p>
    Dans la <b>VAULT virtuelle de recherche</b>, nous pouvons choisir quel lot
    de données télécharger.
  </p>
  <p>Il ne reste plus qu'à trouver le moyen d'en obtenir d'autres.</p>
</TipModal>
