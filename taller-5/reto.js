// option-1
function calcCapacidadEndeudamiento1(gastosMensuales, ingresosTotales) {
    const PORCENTAJE_CAPACIDAD = 40;
    const operacion1 = gastosMensuales/ingresosTotales;
    const porcentajeDeEndeudamiento = (operacion1 * 100);
     

    if (porcentajeDeEndeudamiento < PORCENTAJE_CAPACIDAD) {
        return "Capacidad de endeudamiento positivo";
    } else {
        return "Capacidad de endeudamiento negativo";
    }
}

// option-2
function calcCapacidadEndeudamiento2(gastosMensuales, ingresosTotales) {
    const PORCENTAJE_CAPACIDAD = 0.4;
    const ingresoNetoMensual = ingresosTotales - gastosMensuales;

    if (ingresoNetoMensual > 0) {
        const montoMaxDeuda = (ingresoNetoMensual * PORCENTAJE_CAPACIDAD);
        return `"La capacidad máxima de dinero que puedes usar para endeudarte es de ${montoMaxDeuda} soles"`;
    } else {
        return "No tienes capacidad de endeudamiento";
    }
}


function capacidadDeEndeudamiento1() {
    const inputGastos = document.getElementById("GastoMensual");
    const valueGastos = inputGastos.value;

    const inputIngresos = document.getElementById("IngresoMensuales");
    const valueIngresos = inputIngresos.value;

    const resultado = calcCapacidadEndeudamiento1(valueGastos, valueIngresos);
    alert(resultado);
}

function capacidadDeEndeudamiento2() {
    const inputGastos = document.getElementById("GastoMensual");
    const valueGastos = inputGastos.value;

    const inputIngresos = document.getElementById("IngresoMensuales");
    const valueIngresos = inputIngresos.value;

    const resultado = calcCapacidadEndeudamiento2(valueGastos, valueIngresos);
    alert(resultado);
}


