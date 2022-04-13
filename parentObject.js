let person = {
    getName: function() {
        return 'The name is ' + this.name + ' ' + this.lastName; 
    }
};

let someGuy = Object.create(person)
someGuy.name = 'Bill'
someGuy.lastName = 'Turner'

console.log(someGuy)

// добавление properties в родительский ОБЪЕКТ аналогично добавлению свойств и методов в КЛАСС

// модель насоедования прототипов