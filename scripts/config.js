// Configuration for block generation
export const config = {
  rectangles: 2,
  squares: 2,
  cylinders: 2,
  spacing: 16, // Space between objects
};

// sadf

const actors = [
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

const genres = [
  "action",
  "comedy",
  "drama",
  "fantasy",
  "horror",
  "romance",
  "sci-fi",
  "thriller",
];

export const movies = [
  {
    name: "movie1",
    actors: [actors[0], actors[1]],
    genres: [genres[0], genres[1]],
    title: "movie1",
    year: 2023,
    length: 120,
    rating: 8.5,
  },
  {
    name: "movie2",
    actors: [actors[2], actors[3]],
    genres: [genres[2], genres[3]],
    title: "movie2",
    year: 2022,
    length: 110,
    rating: 7.9,
  },
  {
    name: "movie3",
    actors: [actors[4], actors[5]],
    genres: [genres[4], genres[5]],
    title: "movie3",
    year: 2021,
    length: 95,
    rating: 8.1,
  },
  {
    name: "movie4",
    actors: [actors[6], actors[7]],
    genres: [genres[6], genres[7]],
    title: "movie4",
    year: 2020,
    length: 130,
    rating: 7.5,
  },
  {
    name: "movie5",
    actors: [actors[8], actors[9]],
    genres: [genres[0], genres[2]],
    title: "movie5",
    year: 2019,
    length: 105,
    rating: 8.0,
  },
  {
    name: "movie6",
    actors: [actors[0], actors[2], actors[4]],
    genres: [genres[1], genres[3]],
    title: "movie6",
    year: 2018,
    length: 140,
    rating: 7.8,
  },
  {
    name: "movie7",
    actors: [actors[1], actors[3], actors[5]],
    genres: [genres[2], genres[4]],
    title: "movie7",
    year: 2017,
    length: 100,
    rating: 8.2,
  },
  {
    name: "movie8",
    actors: [actors[6], actors[8]],
    genres: [genres[5], genres[7]],
    title: "movie8",
    year: 2016,
    length: 115,
    rating: 7.6,
  },
  {
    name: "movie9",
    actors: [actors[7], actors[9]],
    genres: [genres[0], genres[6]],
    title: "movie9",
    year: 2015,
    length: 125,
    rating: 8.3,
  },
  {
    name: "movie10",
    actors: [actors[0], actors[5], actors[9]],
    genres: [genres[1], genres[4], genres[7]],
    title: "movie10",
    year: 2014,
    length: 90,
    rating: 7.7,
  },
];

export const data = { movies, actors };
