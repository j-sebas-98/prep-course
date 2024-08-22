function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
//   let valorMas = Math.max(...array)
//   if(array.length == 0){
//    return 0
//   }
//  else if ((ind = (elm) => elm === valorMas)){
//   return (array.findIndex(ind))
//  } 
//?solucion en clase 
  let contador = array[0]
  let indice = 0
     function numeroMayor(ele, index){
        if(ele > contador){
          contador = ele
          indice = index
        }
      }
      array.forEach(numeroMayor)
      return indice
  }

module.exports = encontrarIndiceMayor;
