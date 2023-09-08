import { AURA_EFFECTS } from "../enums/aura-effects.enum";

type AuraEffectWighldModification = {
  id: AURA_EFFECTS.WIGHLD_MODIFICATION;
  value: number;
};

type AuraEffectConnectivityModification = {
  id: AURA_EFFECTS.CONNECTIVITY_MODIFICATION;
  value: number;
};

export type AuraEffect =
  | AuraEffectWighldModification
  | AuraEffectConnectivityModification;
