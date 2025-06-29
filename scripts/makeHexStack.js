// Hexagon Stack Creation Module
import { makeBar } from "./baseAssets/makeBar.js";

export function makeHexStack({
  project,
  id = 1,
  centerPosition = [0, 2, 0],
  width = 10,
  height = 0.5,
  count = 4,
}) {
  console.log(`⬢ Generating hex stack with ${count} hexagons...`);

  // Color palette for different levels
  const colors = [
    [0.9, 0.7, 0.3], // Golden
    [0.8, 0.3, 0.3], // Red
    [0.3, 0.7, 0.3], // Green
    [0.3, 0.3, 0.9], // Blue
    [0.7, 0.3, 0.9], // Purple
    [0.9, 0.5, 0.1], // Orange
    [0.1, 0.8, 0.8], // Cyan
    [0.9, 0.1, 0.5], // Pink
  ];

  // Calculate bar dimensions for a hexagon
  const radius = width / 2;
  const barLength = radius;
  const barWidth = radius * Math.sqrt(3); // Proper width for solid hexagon
  const barHeight = height;

  const allBars = [];

  // Create stacked hexagons
  for (let level = 0; level < count; level++) {
    const levelY = centerPosition[1] + level * height;
    const levelPosition = [centerPosition[0], levelY, centerPosition[2]];
    const levelColor = colors[level % colors.length];

    // Create 3 bars for this hexagon level
    for (let i = 0; i < 3; i++) {
      const rotation = i * 60; // 0°, 60°, 120°

      const barProps = {
        Size: [barWidth, barHeight, barLength],
        Color: levelColor,
        Rotation: [0, rotation, 0],
      };

      const bar = makeBar({
        id: `${id}_level${level + 1}_bar${i + 1}`,
        position: levelPosition,
        props: barProps,
      });

      Object.assign(project.tree.Workspace.MyStuff, bar);
      allBars.push(bar);
    }
  }

  return allBars;
}
