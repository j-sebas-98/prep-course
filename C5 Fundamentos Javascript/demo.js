//! TIPOS DE DATOS 
// tipo string = datos que son de tipo cadena o caractares 
var nomnbreCompleto = "juan";
//tipo number = datos que son de tipo numero 
var edad = 10;
//tipo boolean = valores de verdad si existe o no existe
var valor = true // verdadero
var valor1 = false//false 
//valor null = tipo de dato nada, no hay nada en la variable, el tipo de null es de tipo object(objeto)
var variable = null;
//valor undefined = valor que no esta definido 
var variable = undefined // ejmeplo = var variable; 
console.log(nomnbreCompleto)//forma de imprimir los resultados en las variables 


//!OTRAS FORMAS DE DECLASAR VARIABLES
let apellido ="muñoz"
// ejemplo de repeticion de var nomnbreCompleto = 10;
// let = declara variables unicas, NO se pueden repetir, mientras que con var si 
// ejemeplo = let apellido; //genera error 
const pi = 3.14;
// const = varible que NO va a cambiar


//!SABER EL TIPO DE DATO DE UNA VARIABLE
console.log(typeof edad);//con typeof podemos ver el tipo de dato de la variable


//!OPERADORES, PRECEDENCIA, CONCATENACION 
console.log(3 + 5);//suma 
console.log(14 - 7);//resta
console.log(8 * 6); //Multiplicacion
console.log(30 / 9);//Division
//Resto = muestra el residuo de la division NO el resultado del porcentaje 
console.log(95 % 4);
//Prueba de precedencia = las operaciones de multiplicacion y division se resuelven primero que la suma y la resta 
console.log(3 + 5 / 2 - 8 * 10);
let concatenar = nomnbreCompleto + "" + ":" + apellido + " " + "edad" + ":" + edad
// el concatenar es unir diferentes variables o elementos con el +
console.log(concatenar)


//!OPERADORES DE COMPARACION, IGUALDAD, IGUALDAD ESTRICTA, ASIGNACION y ASOCIATIVIDAD
// estos operadores siempre regresan un valor booleano
//? operadores de comparacion 
console.log (4 < 7); //menor que
console.log (4 > 7); //mayor que 
console.log (4 == 7);//igual
//?igualdad e igualdad estricta
console.log (3 == 3); //preguntar igualdad de caracter
console.log (3 === "3"); //preguntar igualdad estricta de caracter y tipo de dato
//?asignacion y asociatividad
var a = 1;//asignamos un valor a una variable 
var b = 2
var c = a = b //asociatividad para el igual se inicia de derecha a izquierda 
// asociatividad = cuando los operadores son los mismos la asociatividad me dice el orden en que se ejecutan 


//!FUNCIONES 
// es un bloque de codigo reutilizable 
function saludar(){//forma en la que declaramos la funcion
console.log("buenas tardes");
}
saludar();//de esta forma llamamos la funcion

// ejemplo con argumentos
function saludarPersona(name){
console.log("hola"+ " " + name)
}
// puedo utilizar varias veces la funcion, esa es la gracia
saludarPersona("ines")
saludarPersona("carlos")
saludarPersona("hamilton")


//!CONDICIONALES 
//condicion que me direcciona el codigo dependiendo de la respuesta 
//en el if se devuelve un valor boolean, dependiendo de la respuesta el codigo se ejecuta  
if(3 > 10){
console.log("es mayor")
}
else{
console.log("es menor")
}

//!OBJETO MATH 
//objeto que sirve para resolver problemas matematicos
//dentro del objeto existen funciones especificas para los problemas 
console.log(Math.pow(5, 2))//funcioon para elevar un numero







