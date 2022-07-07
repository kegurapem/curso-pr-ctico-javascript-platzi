// map() devuelve un nuevo array con los elementos modificados.
// !!! También modifica el arreglo principal, realizar un return especial

// transformar la altura de las personas, pasar de metros a centímetros

var kevin = {
    nombre: 'kevin',
    apellido: 'gutierrez',
    edad: 29,
    peso: 93,
    altura: 1.74
}
var kumi = {
    nombre: 'kumi',
    apellido: 'ruiz',
    edad: 29,
    peso: 93,
    altura: 1.68
}
var kegura = {
    nombre: 'kegura',
    apellido: 'gutierrez',
    edad: 29,
    peso: 93,
    altura: 1.1
}
var marvin = {
    nombre: 'marvin',
    apellido: 'gutierrez',
    edad: 29,
    peso: 93,
    altura: 1.72
}

// con esta arrow function modificamos nuestro array principal [personas]
// const pasarAlturaACentrimetros = persona => {
//     // persona.altura = persona.altura * 100
//     persona.altura *= 100;
//     return persona;
// }


// const pasarAlturaACentrimetros = persona => {
//     // persona.altura = persona.altura * 100
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }

// mejor forma de escribir este arrow function
const pasarAlturaACentrimetros = persona => ({
    // persona.altura = persona.altura * 100
        ...persona,
        altura: persona.altura * 100
})


var personas = [kevin, kumi, kegura, marvin];

var personasCentimetros = personas.map(pasarAlturaACentrimetros)

console.table(personasCentimetros);