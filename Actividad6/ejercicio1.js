// Concatena los siguientes arreglos
var animals = ["eagle", "parrot", "monkey", "boar", "lion"];
var comingSoonAnimals = ["panter", "dragon", "turtle"];
var allAnimals = animals.concat(comingSoonAnimals);
console.log("Todos los animales", allAnimals);

// Retira el elemento eagle del arreglo de animals
allAnimals.shift();
console.log("Animales sin águila", allAnimals);

// Acomoda el arreglo de menor a mayor
const sortedAnimals = allAnimals.sort();
console.log("Animales ordenados", sortedAnimals);

// Agrega un nuevo animal
allAnimals.push("cow");
console.log("Animales más vaca", allAnimals);
