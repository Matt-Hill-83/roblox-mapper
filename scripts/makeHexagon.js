// Hexagon Creation Module
import { makeBar } from "./baseAssets/makeBar.js";

export function makeHexagon({
  project,
  id = 1,
  centerPosition = [0, 2, 0],
  width = 10,
  height = 0.5,
}) {
  console.log(`⬡ Generating hexagon with 3 bars...`);

  // Calculate bar dimensions for a hexagon
  // For a regular hexagon with width W:
  // - Each side length = W/2 (radius)
  // - To form a solid hexagon with 3 overlapping bars, bar width = radius * √3
  const radius = width / 2;
  const barLength = radius;
  const barWidth = radius * Math.sqrt(3); // Proper width for solid hexagon
  const barHeight = height; // Use passed-in height

  // Create 3 bars rotated 60 degrees apart
  const bars = [];

  for (let i = 0; i < 3; i++) {
    const rotation = i * 60; // 0°, 60°, 120°

    const barProps = {
      Size: [barWidth, barHeight, barLength], // Calculated width for proper hexagon
      Color: [0.9, 0.7, 0.3], // Golden color
      Rotation: [0, rotation, 0],
    };

    const bar = makeBar({
      id: `${id}_bar${i + 1}`,
      position: centerPosition,
      props: barProps,
    });

    Object.assign(project.tree.Workspace.MyStuff, bar);
    bars.push(bar);
  }

  return bars;
}
