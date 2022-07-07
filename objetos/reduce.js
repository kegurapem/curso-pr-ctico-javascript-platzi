var kevin = {
    nombre: 'kevin',
    apellido: 'gutierrez',
    edad: 29,
    peso: 93,
    altura: 1.74,
    cantidadDeLibros: 132
}
var kumi = {
    nombre: 'kumi',
    apellido: 'ruiz',
    edad: 29,
    peso: 93,
    altura: 1.68,
    cantidadDeLibros: 200
}
var kegura = {
    nombre: 'kegura',
    apellido: 'gutierrez',
    edad: 29,
    peso: 93,
    altura: 1.1,
    cantidadDeLibros: 78
}
var marvin = {
    nombre: 'marvin',
    apellido: 'gutierrez',
    edad: 29,
    peso: 93,
    altura: 1.72,
    cantidadDeLibros: 55
}

personas = [kevin, kumi, kegura, marvin];
var acumumulador = 0;

for (var i = 0; i < personas.length; i++) {
    acumumulador = acumumulador + personas[i].cantidadDeLibros;
}

const totalLibros = personas.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.cantidadDeLibros;
}, 0);

const totalLibros2 = personas.reduce(
    (accumulator, currentValue) => accumulator + currentValue.cantidadDeLibros, 0
);

console.log(`En total se tienen ${acumumulador} libros`);

console.log(`En total se tienen ${totalLibros} libros`);

console.log(`En total se tienen ${totalLibros2} libros`); //output 465