/* Variables**************************************************************************/

//string
var cadena = "henry"; //tipo de palabras

//numeros

var numero = 10; //numeros
//booleanos
var bool = true; //dato de verdadero o falso

//undifined

var undi = undefined; // dato no definido 

//null 

var n = null; // el progrador define el valor null (vacio)

/* Operadores**************************************************************************/
console.log(3 + 5); //operador de suma

console.log(3 - 5); //operador de resta 

console.log(3 * 5); //operador de multiplicacion 

console.log(20 / 2); //operador de division 

console.log(20 % 2); //operador de residuo de una division 

  //js tiene una tabla de precedencias de que operacion va primero 
  //los parentecis nos ayudan a dar precedencias

  

console.log("juan" + " "+  "muñoz"); // operador + ayuda a concatenar 

/* Operadores Comparacion**************************************************************************/
//devuelven valor si es true o false
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);

//Igualdad vs igualdad estricta 
console.log (3 == 3);//iguales de valor 
console.log (3 === "5"); //iguales de tipo  y valor

//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b;
console.log (c); 


/* Funciones**************************************************************************/
//formas de declarar funciones 
function sumatres(x){//1
return x + 3;
}

var sumatres = function (x){//2
    return x + 3;
}

var sumaTres = (x) => {//3
    return x + 3;
  }
  
/* Sentencia IF**************************************************************************/
//es una condicion con la cual va hacer algo
function viajar (destino){
    if(destino === "brazil"){
        console.log("izquierda")
    }
    else if(destino === "Argentina"){
        console.log("Derecha")
    }
    else {
        console.log("aad")

    }
}

viajar("Colombia");



