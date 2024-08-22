function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  // let arrNuevo = []
  // for (let i = 0; i < array.length; i++) {
  //    arrNuevo.push(array[i] * i)
  // }
  // return arrNuevo
  //?solucion en clase
  let nuevoArr = array.map(function(ele, index) {
     return  ele * index 
  })
  return nuevoArr
}

module.exports = multiplicarElementosPorIndice;
