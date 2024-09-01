<script lang="ts">
  import { TIPS } from "../enums/tips.enum";
  import AtterrissageImminentModal from "./_tips/AtterrissageImminentModal.svelte";
  import AtterrissageReussiModal from "./_tips/AtterrissageReussiModal.svelte";
  import BatimentsModal from "./_tips/BatimentsModal.svelte";
  import BrulureModal from "./_tips/BrulureModal.svelte";
  import ConnexionEtablieModal from "./_tips/ConnexionEtablieModal.svelte";
  import ConnexionRequiseModal from "./_tips/ConnexionRequiseModal.svelte";
  import ExpansModal from "./_tips/ExpansModal.svelte";
  import GenerationIdeesModal from "./_tips/GenerationIdeesModal.svelte";
  import HolZongModal from "./_tips/HolZongModal.svelte";
  import NoyauxDeDonneesModal from "./_tips/NoyauxDeDonneesModal.svelte";
  import PremierPasModal from "./_tips/PremierPasModal.svelte";
  import TerrainModal from "./_tips/TerrainModal.svelte";
  import TransfertIdeesModal from "./_tips/TransfertIdeesModal.svelte";
  import WighldModal from "./_tips/WighldModal.svelte";

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
