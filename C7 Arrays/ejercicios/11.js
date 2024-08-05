function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let arrNuevo = []
  for (let i = 0; i < array.length; i++) {
    arrNuevo.push(array[i] * 2)  
    
  }
  return arrNuevo
}

module.exports = duplicarElementos;
