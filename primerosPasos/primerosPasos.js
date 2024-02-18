/*
Valores Primitivos
    string
    number
    boolean
    null
    undefined
    Nan

Valores Compuestos
    objet = {}
    array  []
    function (){}
    clase {}
    etc
*/


// Variables en JavaScript
var hola = "Hola mundo"; // 
let hello = "Hola mundo con let"; // buena practica


// Constantes en Javascript
const PI = 3.1416;
const NUEVE = 9;
console.log(PI);

// Objeto
let objeto = {
    nombre: "Jon",
    edad: 25,
}
console.log(objeto)
objeto.correo = "Jonmircha@gmail.com";


// Arreglo
let colores = [
    "blanco", "negro", "azul"
]

colores.push("Anaranjado");
console.log(colores);



/**************************************************************** */
//                     Cadenas de Texto String
/*******************************************************************/

let nombre = "Jhon";
let apellido = "Mircha";
let saludo = new String("Hello");
let lorem = "lorem"
console.log(nombre.length,apellido.length,saludo.length);
console.log(nombre.toUpperCase());
console.log(apellido.toLocaleLowerCase());
console.log(lorem.includes("amet")); // vefificar si incluye
console.log(lorem.trim()); // eliminar espacios al inicio y final
console.log(lorem.split(",")) // separa la cadena por el simbolo que le pasamos



/**************************************************************** */
//         TEMPLATES STRING, CONCATENACION, INTERPOLACION ETC
/*******************************************************************/

let nombre1 = "Jon";
let apellido1 = "Mircha";
let saludo1 = "Hola mi nombre es: " + nombre1 + " " + apellido1 + ".";
console.log(saludo1);

// Interpolacion 
let saludo2 = `Hola mi nombre es ${nombre1} ${apellido1}.`;
console.log(saludo2);




