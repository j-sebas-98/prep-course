function function1() {
    return "hola"
}
function function3(){
    return "como estas"
}

function function2(nombre, cb, cb1, apellido){ 
    return cb() + " "+ nombre + " " + cb1() + " " + apellido
    // cb() => invocar la funcion 
} 

let rel = function2("camilo", function1, function3, "que tal todo")
//function1 = definir el codigo de la funcion, NO invocarla 
console.log(rel)
console.log(function2("camilo", function1, function3, "todo bien"))
