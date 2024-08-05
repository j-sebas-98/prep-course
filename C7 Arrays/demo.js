//! ARREGLOS 

//?funciones vacicas 
// contenedor para almacenar valores y manejarlos 
let arr1 = [];//arreglo vacio
let arr2 = [2, 1, 2, 5, 5, 14];//arreglo lleno
let arr3 = [2, 1, 2, 5, 5, 14];
//posicion del arreglo inica desde el 0
//uno puede llenar los arreglos con todo tipo de datos, incluyendo las funciones
arr2[0]//forma de acceder a la posicion de un arreglo 
//todo: si no hay valor en la posicion del arreglo el valor que se regresa es undefined 
arr2[0] = "hello"//forma de cambiar el valor de la posicion del arreglo
//las posiciones de los arreglos son exactas 
console.log(arr2[0])

//?recorrido de un arreglo
console.log("reccorido del arreglo:")  
for (let i = 0; i < arr2.length; i++){
    //condicion de parada del arreglo es la tamaño del arreglo
    console.log(arr2[0])
  } 
  //?metodos de insercion 
  arr2.push("hola")//agregar elemento al final del arreglo
  arr2.pop()//eliminar el ultimo elemento del arreglo
  arr2.unshift("primero")//agregar elemento al inicio del arreglo
  arr2.shift()//eliminar el primer elemento del arreglo
  console.log(arr2) 

//?metodos de transicion 
console.log("ejemplos")
arr2.includes("resultado")//metodo que pr egunta si el valor esta detro del arreglo
let re = arr2.join("")//el arreglo se convierte en un string, DEBO GUARDAR LA RESPUESTA EN UNA VARIABLE
//las comillas dentro del join son para quitar los espacios
console.log(re)
let rel = "hojuan".split("")//convertir un string en un arreglo
//las comillas dentro del split son para separar los caracteres en las posiciones del arreglo
console.log(rel)

//?metodos para recorrer un arreglo 
console.log("FOR EACH")
function cb(elemento){
  //elementos => los elementos que recibe del arreglo 
  return elemento * 10
}
function filtrar(elem){
  if (elem == 5){
    return elem
  }
}

function reducir(acu, elem){
  //acu = es un acumulador en donde se guarda los valores de todas las operaciones
  //suma todos los elementos del array
  acu = acu + elem
  return acu

  }


arr2.forEach(cb)//solo recorre un arreglo, NO retorna valores
//arr2.forEach => los elementos del arreglo se lo pasan a la cb uno x uno 
//el valor que retorna es un undifined 


console.log("map")
let nuevoarr = arr2.map(cb)//recorre el arreglo y devuelve un arreglo nuevo con los valores agregados
console.log(nuevoarr)

console.log("filter")
let nuevoarr1 = arr2.filter(filtrar)//recorre el arreglo y devuelve un nuevo arreglo pero con los elementos filtrados
console.log(nuevoarr1)

console.log("reduce")
let nuevoarr2 = arr3.reduce(reducir)//recoore el arreglo y devuelve un solo elemento
console.log(nuevoarr2)



 