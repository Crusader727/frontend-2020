/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    return str.split(' ').map(value => value.split('').map( (value, index) => (index == 0) ? value.toUpperCase() : value ).join('')).join(' ');
}

module.exports = capitalize;
