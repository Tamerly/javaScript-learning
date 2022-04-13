let some_array = [1, 2, 3, 4];

let last_item = some_array.pop();
console.log('Удаление и возвращение последнего элемента методом pop -', last_item)

let first_item = some_array.shift();
console.log('Удаление и возвращение первого элемента методом pop -', first_item)

let searching_index_element = some_array.indexOf(1)
console.log('Искомый элемент', searching_index_element, '. Возвращает -1, если элемент не найден')

console.log(some_array)

let some_numbers_array = [5, 8, 9, 11]
let some_letters_array = ['a', 'd', 'g']

let some_nmbers_and_letters_array = some_numbers_array.concat(some_letters_array)
console.log('Метод возвращает новый массив склейкой numbers и letters', some_nmbers_and_letters_array)