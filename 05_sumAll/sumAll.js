const sumAll = function(menor, mayor) { //menor = 1, mayor = 4

    if (!Number.isInteger(menor) || !Number.isInteger(mayor)) return 'ERROR' //devuelve error si recibe parametros no numericos

    if (menor<0 || mayor<0 ) return 'ERROR' //devuelve error si recibe numeros negativos

    //si recibe primero un numero mayor que el segundo - intercambiar
    if (menor > mayor) { //4, 1
        const temp = menor // 4 ---> 1
        menor = mayor // mayor=4
        mayor = temp //temp = menor = 1
    }

    let sum = 0
    for (let i=menor; i<mayor+1; i++) {// returns the sum of 1 + 2 + 3 + 4 which is 10
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
