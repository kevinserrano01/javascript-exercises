const add = function(a, b) { //suma
	return a+b
};

const subtract = function(a , b) { //resta
	return a-b
};

const sum = function(lista) { //obtener la suma
  return lista.reduce((total, current) => total + current, 0)
};

const multiply = function() { //multiplicar

};

const power = function(a, b) { //obtener la potencia
	return Math.pow(a, b)
};

const factorial = function() { //obtener el factorial
	
};





// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
