function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let aux = numeros[0]
  for (let i = 0; i < numeros.length; i++) {
   for (let j = 0; j < numeros.length; j++) {
    if(numeros[i] == numeros[j] && i != j){
      return numeros[i]
    }
   }
  }
}


module.exports = encontrarElementoRepetido;