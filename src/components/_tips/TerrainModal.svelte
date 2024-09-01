<script lang="ts">
  import { TIPS } from "../../enums/tips.enum";
  import TipModal from "../TipModal.svelte";
</script>

<TipModal tip={TIPS.TERRAIN}>
  <p>
    Le terrain sur lequel les ZUMS ont atterri est représenté par <b
      >une grille</b
    > faite de cases.
  </p>
  <p>
    <b>Ces cases</b> ont de propriétés particulières, telle que le niveau de WIGHLD
    ou de connectivité.
  </p>
  <p>Une case peut également accueillir un bâtiment et un ZUM.</p>
</TipModal>
