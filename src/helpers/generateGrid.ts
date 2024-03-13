import { cellFactory } from "../factories/cell.factory";
import { CellsIndex } from "../types/Cell";
import { getRandomWetness } from "./values/getRandomWetness";
import { getRandomWighld } from "./values/getRandomWighld";

export function generateGrid(
  radius: number,
  revealRadius?: number,
  /** Used in some specs to avoid random value checking */
  skipWetness?: true,
  /** Used in some specs to avoid random value checking */
  skipWighld?: true
) {
  if (!skipWighld && skipWetness) skipWighld = true;
  if (revealRadius !== undefined && revealRadius > radius)
    throw new Error("revealRadius > radius");
  const cells: CellsIndex = {};
  const wetness = getRandomWetness();
  for (let x = -radius; x <= radius; x++) {
    for (let y = -radius + Math.abs(x); y <= radius - Math.abs(x); y++) {
      const id = `${x}-${y}`;
      cells[id] = cellFactory({
        x,
        y,
        ...(revealRadius !== undefined &&
        Math.abs(x) + Math.abs(y) <= revealRadius
          ? { revealed: true }
          : {}),
        ...(skipWetness ? {} : { wetness }),
        ...(skipWighld ? {} : { wighld: getRandomWighld(wetness) }),
      });
    }
  }
  return {
    xMin: -radius,
    xMax: radius,
    yMin: -radius,
    yMax: radius,
    cells,
  };
}
