// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// Escriba dos funciones que conviertan temperaturas de Fahrenheit a Celsius y viceversa:

const ftoc = function(f) {
  return Math.round((f-32) * (5/9) * 10) / 10
};

const ctof = function(c) {
  return Math.round(((c * 9/5) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
