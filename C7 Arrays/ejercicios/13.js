function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let arrNuevo = []
  for (let i = 0; i < array.length; i++) {
    if (array[i]% 2 === 0) {
      arrNuevo.push(array[i])
    }    
  }
  return arrNuevo
}

module.exports = filtrarNumerosPares;
