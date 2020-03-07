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
    let num_arr = [];
    str.split(/\ |, |,| , /).map((e) => {
        e = parseFloat(e);
        if (Number.isFinite(e)) { num_arr.push(e); }
    })
    let min_num = Math.min(...num_arr);
    let max_num = Math.max(...num_arr);
    return {min: +min_num, max: +max_num};
}

module.exports = getMinMax;
