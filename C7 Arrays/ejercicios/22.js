function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let tabla = []
  tabla.push(0)
  for (let i = 1; i <= 10; i++) { 
    tabla.push(i * 6)
  }
  return tabla
}
module.exports = tablaDelSeis;
