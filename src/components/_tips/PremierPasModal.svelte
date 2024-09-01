<script lang="ts">
  import { TIPS } from "../../enums/tips.enum";
  import { BUILDINGS } from "../../enums/buildings.enum";
  import { BUILDINGS_DATA } from "../../data/buildings.data";
  import TipModal from "../TipModal.svelte";
</script>

<TipModal tip={TIPS.PREMIERS_PAS}>
  <p>Le HOL-ZONG nous fournit en données toutes prêtes.</p>
  <p>
    Par capillarité, les idées que nous envoyons nous permettent d'en
    télécharger de nouvelles en échange.
  </p>
  <p>
    Nous utilisons des <b>noyaux de données</b> pour stocker ces données et pouvoir
    les utiliser.
  </p>
  <p>
    La vaisseau-graine en contenait un, que nous pouvons utiliser dès maintenant
    pour télécharger le <i>Protocole d'installation de la colonie</i>.
  </p>
  <p>
    Grâce à ça nous allons faire germer les premiers bâtiments de ce balbutiant
    établissement ZUM.
  </p>
  <p>
    <b>
      👉 Débloquez la première option de recherche dans la VAULT virtuelle de
      données, puis construisez un {BUILDINGS_DATA[BUILDINGS.DOM].name}, une {BUILDINGS_DATA[
        BUILDINGS.CUVE_VORTEX
      ].name} et un {BUILDINGS_DATA[BUILDINGS.SILO_A_JING].name}</b
    >
  </p>
</TipModal>
