<script lang="ts">
  import { TIPS } from "../../enums/tips.enum";
  import TipModal from "../TipModal.svelte";
</script>

<TipModal tip={TIPS.ATTERRISSAGE_REUSSI}>
  <p>
    Dans un grand fracas, la capsule-graine s'est écrasé à la surface d'une
    terre inconnue.
  </p>
  <p>
    Les ZUMS sont sortis de leur long sommeil et commencent déjà à générer des
    idées, au contact de ce nouveau WIGHLD.
  </p>
</TipModal>

<style lang="scss">
  #toolbar-tutorial-image {
    max-height: 300px;
    display: flex;
    justify-content: center;
  }
</style>
