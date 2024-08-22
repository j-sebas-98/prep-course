function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  // let aux = 0
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] > 10) {
  //     aux++
  //   }
  // }
  // return aux
  //?solucion de la clase
let aux = 0
  array.forEach(function(ele) {
   if(ele > 10){
    aux++
   }
  })
  return aux
}

module.exports = contarElementosMayoresA10;
