<script lang="ts">
  import { TIPS } from "../../enums/tips.enum";
  import TipModal from "../TipModal.svelte";
</script>

<TipModal tip={TIPS.GENERATION_IDEES}>
  <p>Chaque cycle, les ZUMS génèrent des idées.</p>
  <p>
    Plus le WIGHLD de la cellule est élevé, plus la quantité d'idées générée est
    importante.
  </p>
  <p>
    Les ZUMS peuvent stocker quelques idées, mais le but est ensuite de les
    transférer au HOL-ZONG.
  </p>
</TipModal>
