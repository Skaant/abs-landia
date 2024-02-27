<script lang="ts">
  import { TIPS } from "../../enums/tips.enum";
  import { selectTip } from "../../stores/helpers/selectTip";
  import { tutorial } from "../../stores/tutorial.store";
  import TipModal from "../TipModal.svelte";
  import SvgHolOng from "../svg/SVGHolOng.svelte";
</script>

<TipModal
  tip={TIPS.CONNEXION_ETABLIE}
  actions={[
    {
      label: "Continuer",
      action: () => {
        tutorial.mutateTips(
          [TIPS.CONNEXION_ETABLIE],
          [TIPS.PREMIERS_PAS, TIPS.NOYAUX_DE_DONNEES, TIPS.BATIMENTS]
        );
        selectTip(TIPS.PREMIERS_PAS);
      },
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
