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

const esAlta = (persona) => {
    return persona.altura > 1.7;
} //output TRUE or FALSE

var personasAltas = personas.filter(esAlta)

console.log(personasAltas);

