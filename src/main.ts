// import './app.css'
import { get } from "svelte/store";
import App from "./App.svelte";
import { selection } from "./stores/selection.store";
import { UIState } from "./stores/ui-state.store";
import { move } from "./use-cases/_actions/move/move";

const target = document.getElementById("app");
if (!target) throw new Error("No target element found");

const app = new App({
  target,
});

document.addEventListener("keydown", (e) => {
  const _selection = get(selection);
  if (_selection?.type === "zum") {
    if (e.key === "Escape") {
      selection.set(undefined);
      return;
    }
    if (["z", "q", "s", "d"].includes(e.key)) {
      move(_selection.zum, e.key as "z" | "q" | "s" | "d");
      return;
    }
  }
  const _UIState = get(UIState);
  if (_UIState.tip && e.key === "Escape") {
    UIState.setTip(undefined);
  }
});

export default app;
