module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}
//Transforma uma string em um array de string;