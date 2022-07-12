
//BING INT - permite trabajar con numeros enteros mayores mayor a 2^53= 9,007,199,254,740,992
const aBingNumber = 9007199254740991n; //ok
const anotherBigNumber = BigInt(9007199254740991); //ok

console.log(aBingNumber);
console.log(anotherBigNumber);


// PROMISE ALL SET- allSettled(): Devuleve una promesa que se resuelve despues de que todas las promesas dadas se hayan cumplido o rechazdo en una serie de objetos que se describe el resultado de cada promesa.

//Promise ALL va a ser rechazada en cuando se rechace una de estas promesas, ahí termina su ejecución. 
//En cambio, allSettled no importa el estado de las promesas, solo espera a que todas las promesas sean resueltas, termina y nos devuelve la información.
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))


// GLOBAL THIS: La propiedad de global tiene el valor global de this que es similar al objeto global.
// console.log(globalThis);


//Nullish coalescing operator (??) - OPERADOR LÓGICO NULO.
// const foo = null ?? 'default string';
// console.log(foo);

//Optional chaining (?.)
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail');
}