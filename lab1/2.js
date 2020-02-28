/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '22 и 3.35, -2, 28, а потом 13, может 1.2 и -134' -> {min: -134, max: 28}
 */
let MinMax = {
	min: Number.MAX_VALUE,
	max: Number.MIN_VALUE
};

function getMinMax(str) {
	str.split(/\ |,/).map((el) => {
		let NumEl = Number(el);
  	  if (NumEl < MinMax.min) {MinMax.min = NumEl;} else
  	  if (NumEl > MinMax.max) {MinMax.max = NumEl;}
	});
return MinMax;
}

module.exports = getMinMax;
