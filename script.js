// Primero se crea una variable con un array de 10 elementos.

let ingredientes = [
    "queso", 
    "salsa",
    "masa",
    "peperoni",
    "piña",
    "tomate",
    "jamon",
    "aceituna",
    "huevo",
    "morron"
] 

// Creamos dos arrays que estarán vacíos, luego los usaremos para pushear en el bucle for.

let pares = [];
let impares = [];

// Creamos una funcion que aceptará al array como parámetro, le damos un bucle for, asignamos la variable del indice que será 0 (el primer elemento del array: queso)
// si índice es menor a la longitud de los textos en el array, entonces contará de a uno los elementos del array hasta el último en este caso, morron.
// Con if indicaremos una operación para calcular los pares, utilizando índice en la variable ingredientes (% 2 == 0 buscará si hay palabras con una cantidad de letras pares), entonces haremos un push de las palabras pares contadas a la variable pares que estaba vacía.
// De lo contrario (else) solo haremos que pushee los elementos que no se contaron, que en éste caso serán los impares

// :D

function armarPizza(ingredientes){
    for (let i = 0; i<ingredientes.length; i++){
        if (ingredientes[i].length % 2 == 0){
            pares.push(ingredientes[i]);
        } else {
            impares.push(ingredientes[i]);
        }
    }
}

// Llamamos a la función o no funcionará (?

armarPizza(ingredientes);

// Console log para mostrár los resultados.

console.log("Los ingredientes pares son: ", pares);
console.log("Los ingredientes impares son: ", impares);
