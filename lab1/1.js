/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
      // return str.split(' ').map(element => element[0].toUpperCase() + element.slice(1)).join(' ');
    return str.split(" ").map(word => word ? word[0].toUpperCase() + word.slice(1) : word).join(" ");
}

module.exports = capitalize;
