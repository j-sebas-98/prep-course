function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   function sumar(acu, ele){
      acu = ele + acu
      return acu
   }
     let sumaArr = arrayOfNumbers.reduce(sumar)
      
   cb(sumaArr)
}

module.exports = sumarArray;
