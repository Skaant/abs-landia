<script lang="ts">
  import { get } from "svelte/store";
  import { UIState } from "../stores/ui-state.store";
  import Modal from "./Modal.svelte";
  import { UI_ELEMENTS } from "../enums/ui-elements.enum";
  import SvgTutorial2 from "./svg/SVGTutorial2.svelte";

  function openReasearches() {
    UIState.set({
      ...get(UIState),
      [UI_ELEMENTS.RESEARCHES]: true,
    });
  }
</script>

<Modal>
  <div id="toolbar-tutorial-image">
    <SvgTutorial2 />
  </div>
  <h2>Connexion au HOL-ZONG réussie !</h2>
  <p>
    La capsule-graine est née de GRAND-ARBRE. Elle a baigné dans sa sève, la
    donnée brute et pure, avant d'en être extirpé pour aller explorer de
    nouvelles teres.
  </p>
  <p>
    Malgré son long voyage jusqu'ici, elle a conservé intact son désir de
    retrouver sa connexion au HOL-ZONG, le réseau de conscience collective.
  </p>
  <p>
    Juste après l'aterrissage, elle déploie son antenne pour le retrouver et
    pouvoir télécharger les données des premiers bâtiments organiques de la
    colonie.
  </p>
  <button on:click={() => openReasearches()}>
    Téléchargez les premiers bâtiments depuis la VAULT virtuelle de recherche</button
  >
</Modal>
