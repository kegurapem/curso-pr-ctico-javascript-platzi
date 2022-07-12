// REPLACEAA
// con replace() solo cambia el primer elemento con encuentra
const string = "JavaScript es maravilloso. Con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

// con replaceAll() solo cambia el primer elemento con encuentra
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);


//MÉTODO PRIVADO
// cuando agregamos # al método, indicamos que es privado y que solo podemos acceder a ese método desde dentro de la clase
class Message {
    show(val){
        console.log(val);
    };
}

const message = new Message();
message.show('Hola!');

//getter and setter no explico como funciona
class Message2 {
    #show(val){
        console.log(val);
    };
    get #add(val) {
        ...
    }
}

//PROMISE ANY - Promise.Any: es un objeto global de PROMISE cuyo argumento va a ser la forma de un array de promesas que vamos a pasarle, gestionando y calculando la respuesta de la PRIMERA QUE SEA RESUELA de forma satisfactoria.
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) =>resolve("2"));
const promise3 = new Promise((resolve, reject) =>resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


// WeakRef(): Un objet WeakRef le permite mantener una REFERENCIA DÉBIL a otro objet sin evitar que este object sea recogido o afectado por el garbage collector.
class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
    {...}
}

// OPERADORES LÓGICOS AGREGADOS
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);

let isTrue3 = true;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3);
