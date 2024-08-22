function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  
  // arguments = crea un arreglo con valores que le enviamos a la funcion
  // pero NO enviamos un arreglo
  //!arguments = NO SE LE PUEDE APLICAR LOS METODOS DE LOS ARRAYS 
  let mul = 1
  if(arguments.length == 0){
    return 0
  }
  for (let i = 0; i < arguments.length; i++) {
   mul = arguments[i] * mul 
  }
  return mul
  
}



module.exports = multiplicarArgumentos;
