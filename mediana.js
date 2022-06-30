


const numberArray = [40, 1, 5, 200];

function compareNumbers(a, b) {
    return a - b;
  }

// ---------------------------------------
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

// const lista1 = [100, 200, 900, 500, 300, 800];

// function compareNumbers(a, b) {
//     return a - b;
//   }

// const listaOrdenada = lista1.sort(compareNumbers);

// const mitalLista1 = parseInt(lista1.length / 2);

// function esPar(numerito) {
//     if (numerito % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let mediana;

// if (esPar(lista1.length)) {
//     const elemento1 = lista1[mitalLista1];
//     const elemento2 = lista1[mitalLista1 - 1];

//     const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
//     mediana = promedioElemento1y2;
// } else {
//     mediana = lista1[mitalLista1];
// }

function calcularMediana(lista) {
    function compareNumbers(a, b) {
        return a - b;
      }
    
    const listaOrdenada = lista.sort(compareNumbers);
    
    const mitalOrdenada = parseInt(listaOrdenada.length / 2);

    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitalOrdenada];
        const elemento2 = listaOrdenada[mitalOrdenada - 1];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
    } else {
        mediana = listaOrdenada[mitalOrdenada];
    }
    return mediana;
}
