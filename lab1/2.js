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
    let max=-Math.pow(2,53), min=Math.pow(2,53);

let NumericArray = str.split(/[А-Яа-я]+|[A-Za-z]+|[\ -,]+/);

for (let i=0;i<NumericArray.length;i++){
    for (let j=i;j<NumericArray.length;j++){
    if (NumericArray[j]==='') NumericArray.splice(j, 1);
    else{ 
            NumericArray[j] = +(NumericArray[j]);
            if (NumericArray[j]>max) max=NumericArray[j];
            if (NumericArray[j]<min) min=NumericArray[j];
        }
        }
    }
    return {min: +min, max: +max};
}

module.exports = getMinMax;
