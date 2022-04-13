let myObject = {
    message: 'Blah', // стандартное свойство

    get greeting() {
        return this.message; // для чтения
    },

    set greeting(value) { // для записи
        this.message = value;
    }
}

let myAnotherObject = {}
// добавление свойства объекту
myAnotherObject.someProperty = 'name'
// когда имена свойств генерируются динамически можно делать так
myAnotherObject['anotherProperty'] = 'lastName'

/* 
удаление свойств 
delete object.property
delete object['property']
*/