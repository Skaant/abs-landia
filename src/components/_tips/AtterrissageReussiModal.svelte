<script lang="ts">
  import { TIPS } from "../../enums/tips.enum";
  import { tutorial } from "../../stores/tutorial.store";
  import { mutateTips } from "../../stores/helpers/mutateTips";
  import TipModal from "../TipModal.svelte";
  import { TIPS_TRANSITIONS } from "../../enums/tips-transitions.enum";
</script>

<TipModal
  tip={TIPS.ATTERRISSAGE_REUSSI}
  actions={[
    {
      label: "Continuer l'aventure",
      action: () => mutateTips(TIPS_TRANSITIONS.ATTERRISSAGE_REUSSI),
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
