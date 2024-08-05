function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let fact = 1;
  for (let i = a; i <= b; i++) {
    fact = fact * i
  }
  return Math.abs(fact)

}

module.exports = productoEntreNúmeros;