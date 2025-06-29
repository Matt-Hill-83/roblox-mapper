// Hexagon Stack Creation Module
import { makeHexagon } from "./makeHexagon.js";

export function makeHexStack({
  project,
  id = 1,
  centerPosition = [0, 2, 0],
  width = 10,
  height = 0.5,
  count = 4,
}) {
  console.log(`⬢ Generating hex stack with ${count} hexagons...`);

  const allBars = [];

  // Create stacked hexagons
  for (let level = 0; level < count; level++) {
    const levelY = centerPosition[1] + level * height;
    const levelPosition = [centerPosition[0], levelY, centerPosition[2]];

    // Create a hexagon for this level
    const hexBars = makeHexagon({
      project,
      id: `${id}_level${level + 1}`,
      centerPosition: levelPosition,
      width: width,
      height: height,
    });

    allBars.push(...hexBars);
  }

  return allBars;
}
