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