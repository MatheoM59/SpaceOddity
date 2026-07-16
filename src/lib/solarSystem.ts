export type Planet = {
  id: number;
  name: string;
  color: string; // couleur pour le dégradé de l'orbe
  diameter: number; // diamètre en km
  moons: number; // nombre de lunes
  dayHours: number; // durée d'une rotation (jour) en heures
};

export const planets: Planet[] = [
  {
    id: 1,
    name: "Mercury",
    color: "#b7a99a",
    diameter: 4879,
    moons: 0,
    dayHours: 1408,
  },
  {
    id: 2,
    name: "Venus",
    color: "#e6c37a",
    diameter: 12104,
    moons: 0,
    dayHours: 2802,
  },
  {
    id: 3,
    name: "Earth",
    color: "#5b9bd5",
    diameter: 12742,
    moons: 1,
    dayHours: 24,
  },
  {
    id: 4,
    name: "Mars",
    color: "#d1613c",
    diameter: 6779,
    moons: 2,
    dayHours: 24.7,
  },
  {
    id: 5,
    name: "Jupiter",
    color: "#c9a06a",
    diameter: 139820,
    moons: 95,
    dayHours: 9.9,
  },
  {
    id: 6,
    name: "Saturn",
    color: "#d8c187",
    diameter: 116460,
    moons: 146,
    dayHours: 10.7,
  },
  {
    id: 7,
    name: "Uranus",
    color: "#8fd3d8",
    diameter: 50724,
    moons: 28,
    dayHours: 17.2,
  },
  {
    id: 8,
    name: "Neptune",
    color: "#4a6fd4",
    diameter: 49244,
    moons: 16,
    dayHours: 16.1,
  },
];
