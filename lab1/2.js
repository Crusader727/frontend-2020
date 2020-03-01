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
    let array_str = str.split(/\s*,*;*:*\s/)
    let max = Number.NEGATIVE_INFINITY
    let min = Number.POSITIVE_INFINITY
    for(let i = 0; i < array_str.length; i++){
        if(+array_str[i] > max) max = array_str[i]
        if(+array_str[i] < min) min = array_str[i]
    }
    return { max: +max, min: +min }
}

module.exports = getMinMax;
