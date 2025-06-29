// Configuration for block generation
export const config = {
  rectangles: 2,
  squares: 2,
  cylinders: 2,
  spacing: 16, // Space between objects
};

// sadf

const players = [
  { name: "bob", age: 30, eyeColor: "blue" },
  { name: "alice", age: 25, eyeColor: "green" },
  { name: "carol", age: 28, eyeColor: "brown" },
  { name: "dave", age: 35, eyeColor: "hazel" },
  { name: "eve", age: 22, eyeColor: "gray" },
  { name: "frank", age: 40, eyeColor: "amber" },
  { name: "grace", age: 27, eyeColor: "blue" },
  { name: "heidi", age: 31, eyeColor: "green" },
  { name: "ivan", age: 29, eyeColor: "brown" },
  { name: "judy", age: 33, eyeColor: "blue" },
];
const managers = [
  { name: "bob", age: 30, eyeColor: "blue" },
  { name: "alice", age: 25, eyeColor: "green" },
  { name: "carol", age: 28, eyeColor: "brown" },
  { name: "dave", age: 35, eyeColor: "hazel" },
  { name: "eve", age: 22, eyeColor: "gray" },
  { name: "frank", age: 40, eyeColor: "amber" },
  { name: "grace", age: 27, eyeColor: "blue" },
  { name: "heidi", age: 31, eyeColor: "green" },
  { name: "ivan", age: 29, eyeColor: "brown" },
  { name: "judy", age: 33, eyeColor: "blue" },
];

const teamColors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "amber",
  "cyan",
  "magenta",
];

const countries = [
  "USA",
  "Canada",
  "Mexico",
  "UK",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Australia",
  "Japan",
];

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
];

const animals = [
  "lion",
  "tiger",
  "bear",
  "wolf",
  "eagle",
  "shark",
  "dolphin",
  "whale",
  "elephant",
  "giraffe",
];

const stadiums = [
  "camp nou",
  "wembley stadium",
  "luzhniki stadium",
  "fnb stadium",
  "maracanã stadium",
];

const food = [
  "pizza",
  "burger",
  "sushi",
  "pasta",
  "salad",
  "taco",
  "steak",
  "chicken",
  "fish",
  "vegetable",
];

const sports = [
  "football",
  "basketball",
  "baseball",
  "hockey",
  "tennis",
  "golf",
  "cricket",
  "rugby",
  "volleyball",
  "badminton",
];

export const teams = [
  {
    name: "barcalona",
    players: [
      players[0],
      players[1],
      players[2],
      players[3],
      players[4],
      players[5],
    ],
    managers: [managers[0], managers[1]],
    country: countries[0],
    city: cities[0],
    animal: animals[0],
    stadium: stadiums[0],
    food: food[0],
    sport: sports[0],
  },
  {
    name: "manchester",
    players: [
      players[2],
      players[3],
      players[4],
      players[5],
      players[6],
      players[7],
    ],
    managers: [managers[2], managers[3]],
    country: countries[1],
    city: cities[1],
    animal: animals[1],
    stadium: stadiums[1],
    food: food[1],
    sport: sports[1],
  },
  {
    name: "madrid",
    players: [
      players[4],
      players[5],
      players[6],
      players[7],
      players[8],
      players[9],
    ],
    managers: [managers[4], managers[5]],
    country: countries[2],
    city: cities[2],
    animal: animals[2],
    stadium: stadiums[2],
    food: food[2],
    sport: sports[2],
  },
];

export const nations = [
  {
    team: teams[0].name,
    country: countries[0],
    capitalCity: cities[0],
    food: food[0],
    team: teams[0],
    sport: sports[0],
    animal: animals[0],
    stadium: stadiums[0],
    color: teamColors[0],
  },
  {
    team: teams[1].name,
    country: countries[1],
    capitalCity: cities[1],
    food: food[1],
    team: teams[1],
    sport: sports[1],
    animal: animals[1],
    stadium: stadiums[1],
    color: teamColors[1],
  },
  {
    team: teams[2].name,
    country: countries[2],
    capitalCity: cities[2],
    food: food[2],
    team: teams[2],
    sport: sports[2],
    animal: animals[2],
    stadium: stadiums[2],
    color: teamColors[2],
  },
  {
    team: teams[0].name,
    country: countries[3],
    capitalCity: cities[3],
    food: food[3],
    team: teams[0],
    sport: sports[3],
    animal: animals[3],
    stadium: stadiums[3],
    color: teamColors[3],
  },
];

export const data = { teams, nations };
