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


//CLASES
class calculator {
    constructir() {}
}
