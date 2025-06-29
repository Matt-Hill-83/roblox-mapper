// Hexagon Stack Creation Module
import { makeHexagon } from "./makeHexagon.js";

export function makeHexStack({
  project,
  id = 1,
  centerPosition = [0, 2, 0],
  width = 10,
  height = 0.5,
  count = 4,
  colors = [],
}) {
  console.log(`⬢ Generating hex stack with ${count} hexagons...`);

  // Default color palette if none provided
  const defaultColors = [
    [0.9, 0.7, 0.3], // Golden
    [0.8, 0.3, 0.3], // Red
    [0.3, 0.7, 0.3], // Green
    [0.3, 0.3, 0.9], // Blue
    [0.7, 0.3, 0.9], // Purple
    [0.9, 0.5, 0.1], // Orange
    [0.1, 0.8, 0.8], // Cyan
    [0.9, 0.1, 0.5], // Pink
  ];

  const colorPalette = colors.length > 0 ? colors : defaultColors;
  const allBars = [];

  // Create stacked hexagons
  for (let level = 0; level < count; level++) {
    const levelY = centerPosition[1] + level * height;
    const levelPosition = [centerPosition[0], levelY, centerPosition[2]];
    const levelColor = colorPalette[level % colorPalette.length];

    // Create a hexagon for this level
    const hexBars = makeHexagon({
      project,
      id: `${id}_level${level + 1}`,
      centerPosition: levelPosition,
      width: width,
      height: height,
      barProps: {
        Color: levelColor,
      },
    });

    allBars.push(...hexBars);
  }

  return allBars;
}
