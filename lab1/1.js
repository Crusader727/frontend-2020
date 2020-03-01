/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    const array_str = str.split(' ')
    let str_return = []
    for(let i = 0; i < array_str.length; i++){
        str_return[i] = array_str[i][0].toUpperCase() + array_str[i].slice(1, array_str[i].length)
    } 
    return str_return.join(' ')
}

module.exports = capitalize;
