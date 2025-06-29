import { makeSmartHexStack } from "./makeSmartHexStack.js";
import { teams } from "./config.js";

export function makeTeamsStack({
  project,
  id = "teamsStack1",
  centerPosition = [0, 2, 0],
  width = 8,
  height = 2,
}) {
  const slicedTeams = teams.slice(0, 1); // Limit to first 3 teams for testing
  const stackItemsTeams = slicedTeams.map((item) => {
    const labels = [
      item.sport,
      item.country,
      item.city,
      item.animal,
      item.stadium,
      item.food,
    ];
    return {
      name: item.name,
      labels,
    };
  });

  const smartHexStackModels = makeSmartHexStack({
    project,
    id,
    centerPosition,
    width,
    height,
    stackItems: stackItemsTeams,
  });

  return smartHexStackModels;
}
