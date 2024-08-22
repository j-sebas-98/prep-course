function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  // let arrNuevo = []
  // for (let i = 0; i < array.length; i++) {
  //       arrNuevo.push(array[i].toUpperCase())
  // }
  // return arrNuevo
  function modi(ele){
      return ele.toUpperCase()
  }
let modificacion = array.map(modi)

return modificacion


}

module.exports = convertirStringAMayusculas;
