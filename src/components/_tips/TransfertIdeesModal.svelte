<script lang="ts">
  import { TIPS } from "../../enums/tips.enum";
  import TipModal from "../TipModal.svelte";
</script>

<TipModal tip={TIPS.TRANSFERT_IDEES}>
  <p>
    La quantité d'idées qu'un ZUM peut envoyer au HOL-ZONG est déterminée par
    <b>la connectivité de la case</b> sur laquelle iel se trouve.
  </p>
  <p>
    Certains bâtiments et activités de ZUMS peuvent augmenter la connectivité
    des cases autour.
  </p>
</TipModal>
