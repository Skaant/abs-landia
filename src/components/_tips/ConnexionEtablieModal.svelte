<script lang="ts">
  import { TIPS_TRANSITIONS } from "../../enums/tips-transitions.enum";
  import { TIPS } from "../../enums/tips.enum";
  import { mutateTips } from "../../stores/helpers/mutateTips";
  import TipModal from "../TipModal.svelte";
  import SvgHolOng from "../svg/SVGHolOng.svelte";
</script>

<TipModal
  tip={TIPS.CONNEXION_ETABLIE}
  actions={[
    {
      label: "Continuer",
      action: () => mutateTips(TIPS_TRANSITIONS.CONNEXION_ETABLIE),
    },
  ]}
  disabledArchive={true}
>
  <div id="toolbar-tutorial-image">
    <SvgHolOng />
  </div>
  <p>Ca y est nous sommes connectés au HOL-ZONG !</p>
  <p>
    Les idées vont et viennent dans les deux sens, même si c'est encore un peu
    laborieux.
  </p>
  <p>
    Cela devrait être suffisant pour récupérer la donnée nécessaire pour
    développer la colonie.
  </p>
</TipModal>
