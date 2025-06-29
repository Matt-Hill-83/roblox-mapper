// Main Block Generator - Combines all shapes into one JSON file
import fs from "fs";
import { generateSquare } from "./baseAssets/makeSquare.js";
import { generateCylinder } from "./baseAssets/makeCylinder.js";
import { createRectangles } from "./createRectangles.js";
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

// Generate squares
console.log(`🔶 Generating ${config.squares} squares...`);
for (let i = 1; i <= config.squares; i++) {
  const square = generateSquare(i, [currentX, 2, 0]);
  Object.assign(project.tree.Workspace.MyStuff, square);
  currentX += spacing;
}

// Generate cylinders
console.log(`🔵 Generating ${config.cylinders} cylinders...`);
for (let i = 1; i <= config.cylinders; i++) {
  const cylinder = generateCylinder(i, [currentX, 3, 0]);
  Object.assign(project.tree.Workspace.MyStuff, cylinder);
  currentX += spacing;
}

// Write back to file
fs.writeFileSync(projectPath, JSON.stringify(project, null, 2));

const totalObjects = config.rectangles + config.squares + config.cylinders;
console.log(`✅ Generated ${totalObjects} objects in default.project.json:`);
console.log(`   - ${config.rectangles} blue rectangles`);
console.log(`   - ${config.squares} red squares`);
console.log(`   - ${config.cylinders} green cylinders`);
console.log("🔄 Rojo will sync them to Studio automatically!");
