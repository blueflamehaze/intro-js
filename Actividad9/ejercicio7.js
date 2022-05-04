/**
 * Ejercicio 7
 * Crea un código para llenar un objecto vacio:
 *
 * const objeto = {}
 *
 * Con las siguiente propiedades:
 * color
 * tamaño
 * peso
 * cantidad
 *
 */

const objeto = {};

Object.defineProperties(objeto, {
  color: {
    writable: true,
    enumerable: true,
  },
  tamaño: {
    writable: true,
    enumerable: true,
  },
  peso: {
    writable: true,
    enumerable: true,
  },
  cantidad: {
    writable: true,
    enumerable: true,
  },
});

console.log(objeto);
