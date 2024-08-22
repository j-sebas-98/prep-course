function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  // for (let i = 0; i < array.length; i++) {
  // if (array[i].length > 4){
  //   return array[i]
  // }  
  // }
  //? solucion de clase

  let arreglof = array.filter(function(elemento){
    //lo filtramos con la condicion del if 
      if(elemento.length > 4){
        return elemento
      }
  })
  return arreglof[0]//como retorna todo un arreglo, simplemente devolvemos el primer indice 
}

module.exports = obtenerPrimerStringLargo;