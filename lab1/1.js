/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    const mas = str.split(' ');
    return mas.map(element => 
        `${element[0].toUpperCase()}${element.substring(1)}`
    ).join(' ');
}
module.exports = capitalize;

console.log(capitalize("Я Вижу Солнце ввв"));