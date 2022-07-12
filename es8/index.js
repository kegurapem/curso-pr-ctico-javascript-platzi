const data = {
    // trailing commas kevin,
    fronted : 'Kevin',
    bakend : 'Harold',
    design : 'Kumi',
}

// Object.entries devuelve una matriz
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object.values devuelve los valores de un objeto a un array.
const data2 = {
    fronted : 'Kevin',
    bakend : 'Harold',
    design : 'Kumi',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

// padding
const string = 'pepe';
console.log(string.padStart(7,'el '));
console.log(string.padEnd(9,' dijo'));

// Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'));
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

// como ejecutar correctamente el async await
const anotheFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotheFunction();