// ARROW FUNCTIONS
//before
const names = [
    {name: 'Kevin', age: 29},
    {name: 'Kumi', age: 30},
]

let listOfNames = names.map(function (item) {
    return console.log(item.name);
})

//now
let listOfNames2 = names.map(item => console.log(item.name));

// const listOfName3 = (name) => {
//     ...
// }

// const listOfNames4 = name => {
//     ...
// }

const square = num => num * num;


//PROMESAS
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Ups!!!')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));


//CLASES ec6
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(5,8));


// importar un modulo
// import {hello} from './module';
// hello();

// GENERATORS: es una función especial que retorna una serie de valores, según el algoritmo definido.

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);