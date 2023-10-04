<script lang="ts">
  import { TIPS } from "../../enums/tips.enum";
  import TipModal from "../TipModal.svelte";
</script>

<TipModal tip={TIPS.BRULURE}>
  <p>
    La capsule graine a atteri, occasionnant quelques dégâts sur le WIGHLD
    environnant.
  </p>
  <p>
    Elle, et d'autres bâtiments, peuvent diminuer le WIGHLD si fort autour d'eux
    qu'ils peuvent brûler une cellule presque définitivement.
  </p>
  <p>
    Une fois brulée, le WIGHLD ne repousse pas et il faudra utiliser certains
    bâtiments spécialisés pour régénérer le terrain.
  </p>
</TipModal>

<style lang="scss">
  #toolbar-tutorial-image {
    max-height: 300px;
    display: flex;
    justify-content: center;
  }
</style>
