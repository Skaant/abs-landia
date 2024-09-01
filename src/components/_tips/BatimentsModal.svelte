<script lang="ts">
  import { TIPS } from "../../enums/tips.enum";
  import TipModal from "../TipModal.svelte";
</script>

<TipModal tip={TIPS.BATIMENTS}>
  <p>
    Grâce aux ressources comme le WA et la JING, des bâtiments peuvent être
    cultivés afin de remplir diverses fonctions.
  </p>
  <p>Assurez-vous d'avoir suffisament moyens de produire ces ressources !</p>
  <p>
    Par le biais de la VAULT virtuelle de recherche, débloquez de nouveaux
    bâtiments.
  </p>
</TipModal>
