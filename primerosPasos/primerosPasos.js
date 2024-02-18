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



/**************************************************************** */
//                            NUMEROS(NUMBERS)
/*******************************************************************/

let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

console.log(typeof a, typeof b, typeof c, typeof d);
console.log(a);
console.log(b);
console.log(c.toFixed(2)); // Redondea con dos decimales
console.log(parseInt(c));  // Convierte a entero sin decimales
console.log(a + b);
console.log(c + parseInt(d));
console.log(c + parseFloat(d));



/**************************************************************** */
//                           BOOLEANS
/*******************************************************************/

let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);
console.log(verdadero);
console.log(falso);
console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(""));
console.log(Boolean(" "));



/**************************************************************** */
//                       UNDEFINED, NULL, NaN
/*******************************************************************/

// UNDEFINED : no se ha asignado ningún valor a una variable o un elemento de matriz
// NULL       : Es el valor que se le da a las variables cuando no tienen nada asignado

let indefinida;
console.log(indefinida);

let nulo = null;
console.log(nulo);

// NaN : Not a Number (No es número)
let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero);