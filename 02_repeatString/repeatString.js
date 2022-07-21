const repeatString = function(cadena, veces) {
    let text = ''

    if (veces<0) return 'ERROR'

    for (let i=0; i<veces; i++) {
        text += cadena
    }
    return text
};






// Do not edit below this line
module.exports = repeatString;
