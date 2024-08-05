function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
// todo: analizar muy bien el problema matematico
// todo: ejercicio mal redactado
// todo: ver clase de soy henry
  while(numero > 1){
    if(numero % 2 == 0){
      numero = numero / 2
    }
    else {
      return false 
    }
 }
 return true

}

module.exports = esPotenciaDeDos;
