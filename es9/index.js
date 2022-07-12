const obj = {
    name : 'Kevin',
    age : 29,
    country : 'PEM',
}

// extraigo el nombre, y todo los demas lo guardo en all
let {name, ...all} = obj;
console.log(name, all);

let {country, ...all2} = obj;
console.log(all2);

let {age} = obj;
console.log(age);


// OPERADOR DE PROPAGACION - unir objetos
const obj2 = {
    name : 'Kevin',
    age : 29,
}

const obj3 = {
    ...obj2,
    country : 'PEM',
}

console.log(obj2);
console.log(obj3);

//PROMISE .finally() sirve para avisar cuando termino la ejecucion de una PROMESA.
const helloWorld2 = () => {
    return new Promise((resolve, reject) => {
        //esta es una operacion terneria
        (true)
            // ? resolve('Hello World')
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
}

//llamar promesa
helloWorld2()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


// como agrupar bloques del regex y poder acceder de ellos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
