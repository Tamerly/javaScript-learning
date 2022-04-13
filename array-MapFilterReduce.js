let myArray = ['victor', 'ariana', 'tartaglia']
console.log(myArray, 'array before changing')

function Capitalize(item) {
    let first_letter = item.charAt(0).toUpperCase();
    return first_letter + item.slice(1);
}
let mapArray = myArray.map(Capitalize)

console.log(mapArray, 'array after changing')

let array_numbers = [1, 2, 3, 4, 5, 6]
console.log('Original array', array_numbers)

let evenNumbers = array_numbers.filter(function(item){
    return (item % 2 == 0); // ставится проверка на true/false. Подходящие элементы собираются в новый массив
})
console.log('Filtered array with evens', evenNumbers)

let array_with_numbers = [1, 2, 3, 4, 5];
let total = array_with_numbers.reduce(function(total, current) {
    return total + current;
});

console.log('Сумма  элементов', total)

/*
Принципы функционального программирования
- функции работают внутри других функций
- функции избегают совместного использования и изменения состояния
- возвращают один и тот же вывод для одного и того же ввода
*/