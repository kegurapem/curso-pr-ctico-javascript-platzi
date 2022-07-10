// Funciones Helpers/Utils
function esPar(numero) {
    // if (numero % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista
}



//Calculadora de mediana
function mediaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


// Mediana General
const salarioCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);


const salariosColSorted = salarioCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = mediaSalarios(salariosColSorted);


//media top 10%
const spliceStart = (salariosColSorted.length * 90) /100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
const medianaTop10Col = mediaSalarios(salariColTop10); 

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});