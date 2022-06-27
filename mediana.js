function calcularMediaAritmetica(lista) {
    // con for
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    // con reduce()
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

const lista1 = [100, 200, 500, 4000000];

const mitalLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitalLista1];
    const elemento2 = lista1[mitalLista1- 1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitalLista1];
}