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

var personas = [kevin, kumi, kegura, marvin];

//output TRUE or FALSE
const esAlta = (persona) => {
    return persona.altura > 1.7;
}

const esBaja = (persona) => {
    return persona.altura < 1.7;
}

// otra forma de escribir el arrow function
// const esAlta = persona => persona.altura > 1.7;

var personasAltas = personas.filter(esAlta)

// otra forma de escribir el método filter
var personasAltas2 = personas.filter(function (persona) {
    return persona.altura > 1.7;
})

var personasBajas = personas.filter(esBaja)

// otra forma de escribir el método filter
var personasBajas2 = personas.filter(function (persona) {
    return persona.altura < 1.7;
})

console.log(personasAltas)
console.log(personasAltas2)

console.log(personasBajas)
console.log(personasBajas2)




 //EXPLICACIÓN SOBRE FILTER

// filter() devuelve un nuevo array