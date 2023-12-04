let petOnSale = "chinchilla";
let ordersArray = [
  ["rat", 2],
  ["chinchilla", 1],
  ["hamster", 2],
  ["chinchilla", 50],
];

// Write your code below:

// enum Pet {
//   Hamster,
//   Rat,
//   Chinchilla,
// }

// const petOnSaleTS: Pet = Pet.Chinchilla;

// let ordersArrayTS: [Pet, number][] = [
//   [Pet.Rat, 2],
//   [Pet.Chinchilla, 1],
//   [Pet.Hamster, 2],
//   [Pet.Chinchilla, 50],
// ];

// // testing type safety, this line will cause a type error, as .Jerboa is not a property of the Pet enum
// ordersArrayTS.push([Pet.Jerboa, 3]);

//again with string enums
enum Pet {
  Hamster = "HAMSTER",
  Rat = "RAT",
  Chinchilla = "CHINCHILLA",
  Tarantula = "TARANTULA",
}

let petOnSaleTS: Pet = Pet.Chinchilla;

let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
];

ordersArrayTS.push([Pet.Hamster, 1]);