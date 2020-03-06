/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    // code here
    if (!str) return str;
    return str.split(' ').map(item=>item[0].toUpperCase()+str.slice(1)).join(' ');
}

module.exports = capitalize;
