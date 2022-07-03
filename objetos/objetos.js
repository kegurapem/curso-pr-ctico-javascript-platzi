const kevin = {
    name: 'kevin',
    apellido: 'gutierrez',
    edad: 29
}

const kegura = {
    name: 'kegura',
    apellido: 'gutirrez',
    edad: 4
}

function impimirNombreEdad(persona) {
    const nombre = persona.name.toUpperCase();
    console.log(nombre);
}

function impimirNombreEdad2({name}) {
    const nombre = name.toUpperCase();
    console.log(nombre);
}

function impimirNombreEdad3({name}) {
    console.log(name.toUpperCase());
}

function impimirNombreEdadFinal(persona) {
    var {name} = persona;
    var {edad} = persona;
    console.log(`hola mi nombre es ${name} y tengo ${edad} anhos`);
}

impimirNombreEdad(kevin);
impimirNombreEdad(kegura);

impimirNombreEdad2(kevin);
impimirNombreEdad2(kegura);

impimirNombreEdad3(kevin);
impimirNombreEdad3(kegura);

impimirNombreEdadFinal(kevin);
impimirNombreEdadFinal(kegura);

//* Los objetos en js se modifican desde una función, por ende, si no queremos modificar debemos retornar un nuevo objeto modificado.
function cumpleAnos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1,
    }
}

//*-------------------------------------------------------------------------------------
function mayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.name} tiene ${persona.edad} y es mayor de edad`)
    } else {
        console.log(`${persona.name} tiene ${persona.edad} y es menor de edad`)
    }
}

//*Funciones que retornan valores-------------------------------------------------------
const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.name} tiene ${persona.edad} y es mayor de edad`)
    } else {
        console.log(`${persona.name} tiene ${persona.edad} y es menor de edad`)
    }
}

//*Arror functions-------------------------------------------------------
const MAYORIA_DE_EDAD2 = 18;

//* function (persona) -> se le conoce como, función anónima
//* Esta es una función anónima
// var esMayorDeEdad2 = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD2;
// }

//* Esta es una arrow function
var esMayorDeEdad2 = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD2;
}

const esMayorDeEdad2 = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD2;
}

const esMayorDeEdad2 = persona => persona.edad >= MAYORIA_DE_EDAD2;


function imprimirSiEsMayorDeEdad2(persona) {
    if (esMayorDeEdad2(persona)) {
        console.log(`${persona.name} tiene ${persona.edad} y es mayor de edad`)
    } else {
        console.log(`${persona.name} tiene ${persona.edad} y es menor de edad`)
    }
}
