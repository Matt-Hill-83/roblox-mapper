import { makeSmartHexStack } from "./makeSmartHexStack.js";
import { teams } from "./config.js";

export function makeTeamsStack({
  project,
  id = "teamsStack1",
  centerPosition = [0, 2, 0],
  width = 8,
  height = 2,
}) {
  const stackItemsTeams = teams.map((item) => {
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
