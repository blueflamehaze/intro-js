const transformers = [
  {
    name: "Optomis Prime",
    team: "Autobot",
    form: "Trailer",
  },
  {
    name: "Bumblebee",
    team: "Autobot",
    form: "Camaro",
  },
  {
    name: "Megratron",
    team: "Decepticon",
    form: "Jet",
  },
];

// Obtener nombres de los transformers y retornar un arreglo con dicho nombre como resultado de
// mi función

/* function getNames(transformersArray) {
  // Paso 1. Iterar sobre el arreglo
  const names = [];
  for (let i = 0; i < transformersArray.length; i++) {
    // Guardando en el nuevo arreglo
    names.push(transformersArray[i].name);
  }
  return names;
}

console.log(getNames(transformers));
 */

/* const names = transformers.map((transformer) => transformer.name);

console.log(names);
 */

// Buscar el elemento cuyo team sea Decepticon
/* function team(transformerArray) {
  const team = [];
  for (let i = 0; i < transformerArray.lenght; i++) {
    if (transformerArray[i].team == "Decepticon") {
      team.push(transformerArray[i]);
    }
  }

  return team;
}

console.log(team(transformers)); */

const team = transformers.filter(
  (transformer) => transformer.team == "Decepticon"
);

console.log(team);
