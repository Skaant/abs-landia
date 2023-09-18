<script>
  import { get } from "svelte/store";
  import { UIState } from "../stores/ui-state.store";
  import Modal from "./Modal.svelte";
  import { UI_ELEMENTS } from "../enums/ui-elements.enum";

  function dismiss() {
    UIState.set({
      ...get(UIState),
      [UI_ELEMENTS.RESEARCHES]: false,
    });
  }
</script>

<Modal {dismiss}>
  <div>researches</div>
</Modal>
