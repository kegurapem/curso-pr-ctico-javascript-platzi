//.flat() devuelve una matriz con cualquier submatriz aplanada
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

//.flatMap() permite mapear cada elemento, pasarle una funcion y aplanarlo segun el resultado
let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value*2]));

//trimStart() permite eliminar los espacios en blanco de un string
let hello = '     hello world';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello world    ';
console.log(hello2);
console.log(hello2.trimEnd());

//Object.fromEntries(), transforma clave:valor en un objeto
let entries = [["name", "kevin"], ["age", 32]];

console.log(Object.fromEntries(entries))

// Symbol, objeto de tipo simbolo
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);