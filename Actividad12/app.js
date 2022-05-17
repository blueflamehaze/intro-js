//Variables

const formBusqueda = document.querySelector("#form-busqueda");
const inputName = document.querySelector("#inputNombre");
const inputModel = document.querySelector("#inputModelo");
const inputMovie = document.querySelector("#inputPelicula");
const boxTransformers = document.querySelector("#box-transformers");
//Crear objeto que reciba los datos del formulario que ingresa el usuario
const datosBusqueda = {
  nombre: "",
  modelo: "",
  peliculaId: "",
};

// Cuando termine de cargar el contenido de la página llama a esa función con el parametro transformers
document.addEventListener("DOMContentLoaded", () => {
  mostrarHTML(transformers);
});

// Que pasa cuando le damos buscar, esta función
formBusqueda.addEventListener("submit", (e) => {
  //Previene que se recargue la página
  e.preventDefault();

  // Asignar los datos de la búsqueda al objeto
  datosBusqueda.nombre = inputName.value.toLowerCase();
  datosBusqueda.modelo = inputModel.value;
  datosBusqueda.peliculaId = inputMovie.value;

  filtrarTransformers();

  //Limpia todos los inputs del form
  formBusqueda.reset();
});

function mostrarHTML(transformers) {
  transformers.forEach((transformer) => {
    // Deestructurar arreglo
    const { nombre, modelo, peliculaId, peliculaName, description, image } =
      transformer;

    //Crear elemento HTML. Crear div para las tarjetas
    const cardTransformer = document.createElement("div");
    //Asignar clases que queremos
    cardTransformer.classList.add("col", "mb-3", "d-flex");

    // Contenido interno. Inyectar contenido
    cardTransformer.innerHTML = `<div class="card bg-secondary d-flex flex-row rounded-3">
    <div class="w-50">
      <img src="${image}" class="img-fluid object-fit" />
    </div>
    <div class="card-body w-50">
      <h2 class="card-text mb-0 text-capitalize">${nombre}</h2>
      <p class="card-text mb-3 text-capitalize">${modelo}</p>
      <p class="card-text mb-3 text-capitalize">
        Primera aparición: ${peliculaName}
      </p>
      <p class="card-text mb-0">
        ${description}
      </p>
    </div>
  </div>`;

    //Publicar dentro de boxTransformers
    boxTransformers.appendChild(cardTransformer);
  });
}

function filtrarTransformers() {
  // Para que solo se muestren los elementos de la búsqueda, se debe limpiar el contenido HTML previamente
  limpiarHTML();

  // Hay que almacenar la respuesta al filtro y los filtros pueden tener filtros anidados
  const resultado = transformers
    .filter(filtrarName)
    .filter(filtrarModelo)
    .filter(filtrarPelicula);

  if (resultado.length) {
    mostrarHTML(resultado);
  } else {
    // Para mostrar que no hya resultados con HTML
    sinResultado("Tu búsqueda no tiene coincidencia con nuestra base de datos");
  }

  // En esta parte vamos a validar si hay resultados en el submit. Convertimos el  objeto a array de valores
  const hayContenido = Object.values(datosBusqueda).filter((e) => e);

  if (hayContenido.length) {
    mostrarHTML(resultado);
  } else {
    sinResultado("Tienes que especificar tu búsqueda");
  }
}

function sinResultado(mensaje) {
  // Limpiar para asegurarnos de que no hay nada
  limpiarHTML();

  // Asignar contenido HTML
  const sinResultado = document.createElement("div");
  sinResultado.classList.add(
    "bg-danger",
    "text-white",
    "border-danger",
    "p-4",
    "text-center"
  );
  sinResultado.textContent = mensaje;

  // Mostrar sin resultado en boxTransformers
  boxTransformers.parentElement.appendChild(sinResultado);
}

// Limpia el contenido HTML
function limpiarHTML() {
  //Siempre que exista un primer hijo se va a ejecutar
  while (boxTransformers.firstChild) {
    boxTransformers.firstChild.remove();
  }
}

// Función para filtrar el nombre
function filtrarName(transformer) {
  const { nombre } = datosBusqueda;
  if (nombre) {
    return transformer.nombre == nombre;
  }
  return transformer;
}

// Función para filtrar el modelo
function filtrarModelo(transformer) {
  const { modelo } = datosBusqueda;
  if (modelo) {
    return transformer.modelo == modelo;
  }
  return transformer;
}

// Función para filtrar Película
function filtrarPelicula(transformer) {
  const { peliculaId } = datosBusqueda;
  if (peliculaId) {
    return transformer.peliculaId == peliculaId;
  }
  return transformer;
}
