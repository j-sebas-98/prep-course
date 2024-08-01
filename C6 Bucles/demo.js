//!OPERADORES LOGICOS
// estos operadores siempre regresan un valor booleano
// estos operadores se pueden usar sin if 
//? ejemplo de y
let a = 10
let b = 2
let c = 20
let d = 30
// con el operador Y todas las condiiones se deben cumplir 
if(a > b && a < d ){
console.log(true + ": " + "todas las condiciones se cumplieron")
}
else {
console.log(false)
}
//?ejeplo de o  
// con el operador O algunas de las condiiones se deben cumplir 
if(a > b || d < b ){
    console.log(true + ": " + "alguna de las condiciones se cumplio")
    }
    else {
    console.log(false)
    }
    
    
//!BUCLE FOR 
// secuencia repetitiva para resolver un ejercicio
//todo: Se usa cuando conozco la cantidad de pasos exactos que quiero dar
for (let i = 0; i <= 100; i = i + 10) {//cantidad de veces que aumenta el bucle
    // i = es un iterador el cual me dice en que paso voy del bucle
    // i <= 10 = condicion para el bucle
    // i = i + 2 = lo que aumenta el iterador 
     console.log(i)
}
//!BUCLE WHILE
console.log("ejemplo while")
// secuencia repetitiva para resolver un ejercicio
//todo: Se usa cuando NO conozco la cantidad de pasos exactos que quiero dar
let i = 0 //creo el iterador, es obligatorio 
while(i < 9) {//condicion que se cumplan para que el bucle finalice 
//todo: el iterador simpre tiene que aumentar o disminuir, por que si no el bucle se rompe
console.log(i)// llamo la primera vez la variable para que se ejecute correctamente la condicion
i = i + 3
}

//!BUCLE DO WHILE
//todo: la diferencia entre while y do while es que el codigo que esta dentro del do while se ejecuta al menos 1 vez
console.log("ejemplo de bucle do while")
let iterador = 1;//se declara el iterador fuera del bucle
do{
console.log(iterador)
iterador++
}while(iterador < 1)//condicion para que el bucle pare

//!SWITCH 
// switch es un menu 
console.log("ejemplo de switch")
let color ="rojo";
switch(color){//variable para el menu 
case "amarillo":
console.log("color amarillo")
break;//el break es para cortar la ejecucion del switch, NO se ejecute lo demas 
case "azul":
console.log("color azul")
break;case "rojo":
console.log("color rojo")
break;
default:
    console.log("no hay color")
    break;
}

//! BREAK Y CONTINUO
console.log("ejemplo de break")
// break es para cortar una ejecucion 
// continuo es para saltarce una iteracion
// en el siguiente ejemplo vemos como se salta el 5
for (let i = 0; i <= 10; i++) {
if(i == 5){
continue;
}
console.log(i)
}
