function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   let varM1 = str1.toLocaleLowerCase()
   let varM2 = str2.toLocaleLowerCase()
  let ordenar =  varM1.split("").sort().toString().replace(/,/g, '')
  let ordenar1 =  varM2.split("").sort().toString().replace(/,/g, '')
   if(ordenar == ordenar1)return true
   else return false
   
}

module.exports = esAnagrama;
