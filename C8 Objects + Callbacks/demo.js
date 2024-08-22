//! OBJECTS
 // objetos => estructuras de datos para organizar y almacenar informacion y tienen propiedades y metodos
//los objetos pueden tener todo tipo de datos 
 let obejto1 = { //sintaxis del objeto
propiedad: "valor"
}
let persona = {
    nombre: "camilo",
    apellido: "muñoz",
    edad: 25,
    amigos: ["juan", "juanse", "camila"],
    mascota: {
        nombre: "firulais",
        edad: 5
    },
    //los objetos pueden tener propiedad que son funciones
    saludar: function(saludar){
        return "hola" +" " +saludar
    }
}

console.log(persona.amigos[2])//forma de acceder a las propiedades de los objetos  
console.log(persona["mascota"])//otra forma de acceder a las propiedades

//modificar una propiedad
persona.edad = 26//si la propiedad no existe la crea 
console.log(persona.edad)
console.log(persona.saludar("juan"))