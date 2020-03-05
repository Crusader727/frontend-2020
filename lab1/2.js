/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '22 и 3.35, -2, 28, а потом 13, может 1.2 и -134' -> {min: -134, max: 28}
 */
function getMinMax(str) {
    re = /[+-]?([0-9]*[.])?[0-9]+/g;
    strNums = str.match(re);
    nums = strNums.map(el => parseFloat(el))
    return {
      min: Math.min(...nums),
      max: Math.max(...nums),
      }
}

module.exports = getMinMax;
