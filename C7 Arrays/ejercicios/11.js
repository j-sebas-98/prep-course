function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  // let arrNuevo = []
  // for (let i = 0; i < array.length; i++) {
  //   arrNuevo.push(array[i] * 2)  
    
  // }
  // return arrNuevo
  //?solucion de la clase
//  let multi = array.map(function(ele){
//    return ele * 2
//   })
//   return multi
function multiplicar(elem){
  return elem * 2
}
let muti = array.map(multiplicar)
return muti
}

module.exports = duplicarElementos;
