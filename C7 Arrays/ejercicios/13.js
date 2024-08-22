function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  // let arrNuevo = []
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i]% 2 === 0) {
  //     arrNuevo.push(array[i])
  //   }    
  // }
  // return arrNuevo
  function pares(elementos) {
    return elementos % 2 === 0
  }
  let parasN = array.filter(pares)
  return parasN

}

module.exports = filtrarNumerosPares;
