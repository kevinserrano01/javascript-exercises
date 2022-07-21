// tenemos 2 soluciones aquí, una más fácil y otra más avanzada.
// La forma más fácil de obtener una matriz de todos los argumentos que se pasan a una función 
// está utilizando el operador de propagación. Si esto no te resulta familiar, ¡búscalo!

const removeFromArray = function(...lista) {
// el primer elemento de nuestra lista de argumentos es el array, la sacamos con lista[0]
    const array = lista[0]
// create a new empty array
    const newArray = []
 // use forEach to go through the array
    array.forEach((item) => {
        // inserta cada elemento en la nueva matriz
        // A MENOS QUE esté incluido en los argumentos de la función
        // por lo que creamos una nueva matriz con cada elemento, excepto aquellos que deben eliminarse
        if (!lista.includes(item)) {
            newArray.push(item)
        }
    });
    return newArray; // y devuelve esa matriz
};

//Implemente una función que tome una matriz y algunos otros argumentos y luego elimine los otros argumentos de esa matriz:

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }



// Do not edit below this line
module.exports = removeFromArray;
