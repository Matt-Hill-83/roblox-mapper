// Main Block Generator - Combines all shapes into one JSON file
import fs from "fs";
import { generateSquare } from "./baseAssets/makeSquare.js";
import { makeBar } from "./baseAssets/makeBar.js";
import { generateCylinder } from "./baseAssets/makeCylinder.js";
import { createRectangles } from "./createRectangles.js";
import { createHexagon } from "./createHexagon.js";
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
currentX = createRectangles({
  project,
  count: config.rectangles,
  startX: currentX,
  spacing,
});

// Generate a single bar
console.log(`🟫 Generating 1 bar...`);
const barProps = {
  Color: [1, 1, 0.8], // Light yellow RGB
  Rotation: [0, -15, 0], // 45 degrees clockwise around Y-axis
};
const bar = makeBar({ id: 1, position: [currentX, 2, 0], props: barProps });
Object.assign(project.tree.Workspace.MyStuff, bar);
currentX += spacing;

// Generate a hexagon
createHexagon({
  project,
  id: "hex1",
  centerPosition: [currentX, 2, 0],
  width: 10,
});
currentX += spacing;
//lkj
// Write back to file
fs.writeFileSync(projectPath, JSON.stringify(project, null, 2));

const totalObjects =
  config.rectangles + config.squares + config.cylinders + 1 + 3; // +3 for hexagon bars
console.log(`✅ Generated ${totalObjects} objects in default.project.json:`);

// adsfsadasfdsafdasdfasdfasdf
