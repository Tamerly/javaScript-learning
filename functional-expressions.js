// вместо объявления функции можно использовать функциональные выражения
const logString = function() {
    console.log('functional-expressions.js')
}

// преимущество перед объявлением функции в том, что выражения не записываются в память

// передача аргументов
const logString_withArg = function(item, message) {
    console.log(`${item} ${message}`)
} 

logString_withArg('Name', 'in function')

// возвращение значения
const returnString_withArg = function(item, message) {
    return `${item} ${message}`
}

console.log(returnString_withArg('Name', 'returned from function'))

// значения по умолчанию like in Python
const func_withDef_args = function(item = 'some Name', message = 'defined by default') {
    return `${item} ${message}`
}

// стрелочные функции от ES6
const lordify = function(name) {
    return `${name} of CanterBury`
}

const arrow_lordify = name => `${firstName} of Canterbury`;
//^ прописывать аргументы в круглых скобках при передаче нескольких

// если функция из нескольких строк, то заключить ее тело в фигурные скобки
const arrow_func = (name, lastname) => {
    if (!name) {
        throw new Error('Here is should be a name!')
    };
    if (!lastname) {
        throw new Error('lastname is important too')
    };
};

// как вернуть объект
const arrow_func_returns_object = (name, lastname) => ( // заключить его в круглые скобки
    {
        firstname: name,
        last: lastname
    }
);


// стрелочные функции также используются для ограничения области видимости
// пример из книги
/*
const tahoe = {
    mountains: ['Freel', 'Rose', 'Tallac'],
    print: function(delay = 1000) {
        setTimeout(function() {
            console.log(this.mountains.join(', '))
        }, delay)
    }
}
*/
// отдаст ошибку, поскольку невозможно прочитать join свойство от undefined
const tahoe = {
    mountains: ['Freel', 'Rose', 'Tallac'],
    print: function(delay = 1000) {
        // решает проблему стрелочная функция
        setTimeout(() => {
            console.log(this.mountains.join(', '))
        }, delay)
    }
}

tahoe.print()
