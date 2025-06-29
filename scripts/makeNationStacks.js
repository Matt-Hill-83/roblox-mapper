// makeNationStacks.js
import { makeNationsStack } from "./makeNationsStack.js";

/**
 * Adds n nation stacks to the project in a line.
 * @param {object} params
 * @param {object} params.project - The project object to modify
 * @param {number} params.currentX - The starting X position (will be incremented)
 * @param {number} params.spacing - The spacing between stacks
 * @param {number} params.count - The number of nation stacks to create
 */
export function makeNationStacks({ project, currentX, spacing, count }) {
  for (let i = 0; i < count; i++) {
    const nationsStackModels = makeNationsStack({
      project,
      id: `nationsStack${i + 1}`,
      centerPosition: [currentX, 2, 0],
      width: 8,
      height: 2,
      maxItems: 100,
    });
    currentX += spacing;
    for (const modelObj of nationsStackModels) {
      Object.assign(project.tree.Workspace.MyStuff, modelObj);
    }
  }
  return currentX;
}
