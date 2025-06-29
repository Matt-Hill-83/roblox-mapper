// Main Block Generator - Combines all shapes into one JSON file
import fs from "fs";
import { generateSquare } from "./baseAssets/makeSquare.js";
import { makeBar } from "./baseAssets/makeBar.js";
import { generateCylinder } from "./baseAssets/makeCylinder.js";
import { createRectangles } from "./createRectangles.js";
import { makeHexagon } from "./makeHexagon.js";
import { makeHexStack } from "./makeHexStack.js";
import { config } from "./config.js";

// Read current project file
const projectPath = "./default.project.json";
const project = JSON.parse(fs.readFileSync(projectPath, "utf8"));

// Clear existing blocks from MyStuff (keep only folder definition)
project.tree.Workspace.MyStuff = {
  $className: "Folder",
};

let currentX = 0;
const spacing = config.spacing;

// Generate rectangles
// currentX = createRectangles({
//   project,
//   count: config.rectangles,
//   startX: currentX,
//   spacing,
// });

// Generate a single bar
console.log(`🟫 Generating 1 bar...`);
const barProps = {
  Color: [1, 1, 0.8], // Light yellow RGB
};
const bar = makeBar({
  id: 1,
  position: { x: currentX, y: 2, z: 0 },
  rotation: { x: 0, y: 30, z: 0 }, // Apply rotation during creation
  props: barProps,
});

Object.assign(project.tree.Workspace.MyStuff, bar);
currentX += spacing;
const bar2 = makeBar({
  id: 2,
  position: { x: currentX, y: 2, z: 0 },
  rotation: { x: 0, y: -30, z: 0 }, // Apply rotation during creation
  props: barProps,
});

Object.assign(project.tree.Workspace.MyStuff, bar2);
currentX += spacing;

//
// Generate a hexagonsafd
makeHexagon({
  project,
  id: "hex1",
  centerPosition: [currentX, 2, 0],
  width: 10,
  height: 4,
});
currentX += spacing;

// Generate a hex stack
// makeHexStack({
//   project,
//   id: "hexStack1",
//   centerPosition: [currentX, 2, 0],
//   width: 8,
//   height: 1,
//   count: 1,
// });
currentX += spacing;
// Write back to file
fs.writeFileSync(projectPath, JSON.stringify(project, null, 2));

const totalObjects =
  config.rectangles + config.squares + config.cylinders + 1 + 3 + 12; // +12 for hex stack (4 levels × 3 bars)
console.log(`✅ Generated ${totalObjects} objects in default.project.json:`);

//
