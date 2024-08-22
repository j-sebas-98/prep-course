function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código: 

  //array.includes("hola")//solucion mia que es incorrecta
// //? solucion de la clase 
let valor1 = array[0]
function todos(elem) {
    if(elem == valor1){
      return true
    }
    else return false
  }
  //every => valida si todos los elementos cumplen la misma condicion 
let todoI = array.every(todos)
return todoI
}

module.exports = todosIguales;
