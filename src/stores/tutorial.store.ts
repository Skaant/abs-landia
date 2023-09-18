import { writable } from "svelte/store";

type TutorialState = {
  step: number;
};

export const tutorial = writable<TutorialState>({
  step: 0,
});
