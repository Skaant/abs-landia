<script lang="ts">
  import { TIPS } from "../../enums/tips.enum";
  import { selectTip } from "../../stores/helpers/selectTip";
  import { tutorial } from "../../stores/tutorial.store";
  import TipModal from "../TipModal.svelte";
</script>

<TipModal
  tip={TIPS.ATTERRISSAGE_REUSSI}
  actions={[
    {
      label: "Continuer l'aventure",
      action: () => {
        tutorial.mutateTips(
          [TIPS.ATTERRISSAGE_REUSSI],
          [TIPS.CONNEXION_REQUISE]
        );
        selectTip(TIPS.CONNEXION_REQUISE);
      },
    },
  ]}
  disabledArchive={true}
>
  <p>
    Dans un grand fracas, la capsule-graine s'est écrasé à la surface d'une
    terre inconnue.
  </p>
  <p>
    Les ZUMS sont sortis de leur long sommeil et commencent déjà à générer des
    idées, au contact de ce nouveau WIGHLD.
  </p>
</TipModal>
