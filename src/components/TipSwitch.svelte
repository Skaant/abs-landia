<script lang="ts">
  import { TIPS } from "../enums/tips.enum";
  import AtterrissageImminentModal from "./tips/AtterrissageImminentModal.svelte";
  import AtterrissageReussiModal from "./tips/AtterrissageReussiModal.svelte";
  import BatimentsModal from "./tips/BatimentsModal.svelte";
  import BrulureModal from "./tips/BrulureModal.svelte";
  import ConnexionEtablieModal from "./tips/ConnexionEtablieModal.svelte";
  import ConnexionRequiseModal from "./tips/ConnexionRequiseModal.svelte";
  import ExpansModal from "./tips/ExpansModal.svelte";
  import GenerationIdeesModal from "./tips/GenerationIdeesModal.svelte";
  import HolZongModal from "./tips/HolZongModal.svelte";
  import NoyauxDeDonneesModal from "./tips/NoyauxDeDonneesModal.svelte";
  import PremierPasModal from "./tips/PremierPasModal.svelte";
  import TerrainModal from "./tips/TerrainModal.svelte";
  import TransfertIdeesModal from "./tips/TransfertIdeesModal.svelte";
  import WighldModal from "./tips/WighldModal.svelte";

  export let tip: TIPS;

  const MODALS = {
    [TIPS.EXPANS]: ExpansModal,
    [TIPS.ATTERRISSAGE_IMMINENT]: AtterrissageImminentModal,
    [TIPS.TERRAIN]: TerrainModal,
    [TIPS.WIGHLD]: WighldModal,
    [TIPS.ATTERRISSAGE_REUSSI]: AtterrissageReussiModal,
    [TIPS.CONNEXION_REQUISE]: ConnexionRequiseModal,
    [TIPS.HOL_ZONG]: HolZongModal,
    [TIPS.GENERATION_IDEES]: GenerationIdeesModal,
    [TIPS.TRANSFERT_IDEES]: TransfertIdeesModal,
    [TIPS.BRULURE]: BrulureModal,
    [TIPS.CONNEXION_ETABLIE]: ConnexionEtablieModal,
    [TIPS.PREMIERS_PAS]: PremierPasModal,
    [TIPS.NOYAUX_DE_DONNEES]: NoyauxDeDonneesModal,
    [TIPS.BATIMENTS]: BatimentsModal,
  };

  $: modal = MODALS[tip];
</script>

<svelte:component this={modal} />
