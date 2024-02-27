import { type TipData } from "../data/tips.data";

export function getTipTypeIcon(type: TipData["type"]) {
  switch (type) {
    case "lore":
      return "📜";
    case "quest":
      return "🏆";
    case "gameplay":
      return "🎮";
    case "quest-achieved":
      return "✅";
  }
}
