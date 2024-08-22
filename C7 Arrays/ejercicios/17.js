function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  // let suma = 0;
  // for (let i = 0; i < arrayOfNums.length; i++) {
  // suma = suma + arrayOfNums[i]    
  // }
  // return suma
  //? solucion de clase 
 let suma = arrayOfNums.reduce(function(acu, ele) {
  acu = acu + ele
  return acu
}, 0)
// 0 es como inicialisamos el acumulador
return suma
}

module.exports = agregarNumeros;
