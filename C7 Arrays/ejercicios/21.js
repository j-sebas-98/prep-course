function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  //?solucion de la clase
  function filtrar(ele){
  if(ele == "Enero" || ele == "Marzo" || ele == "Noviembre"){
        return ele
    }
  } 
let filtrarMeses = array.filter(filtrar)

if(filtrarMeses.length >= 3){
return filtrarMeses
}
else {
  return "No se encontraron los meses pedidos"
}


}




module.exports = mesesDelAño;
