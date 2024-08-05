function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let valorMas = Math.max(...array)
  if(array.length == 0){
   return 0
  }
 else if ((ind = (elm) => elm === valorMas)){
  return (array.findIndex(ind))
 } 
  }

module.exports = encontrarIndiceMayor;
