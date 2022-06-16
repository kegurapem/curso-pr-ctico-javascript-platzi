// Codigo cuadrado
console.group("Cuadrado");
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// Codigo Triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

// Codigo Circulo
console.group("Circulo");
const PI = Math.PI

function diametroCirculo(radio) {
    return radio * radio;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI
}



function areaCirculo(radio) {
    return radio * radio * PI;
}
console.groupEnd();


// HTML

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = parseInt(input.value);

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area)
}

//Triángulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const valueLado1 = parseInt(input1.value);

    const input2 = document.getElementById("InputLado2");
    const valueLado2 = parseInt(input2.value);

    const input3 = document.getElementById("InputBase");
    const valueBase = parseInt(input3.value);

    const inputAltura = document.getElementById("InputAltura");
    const valueAltura = inputAltura.value;

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const input = document.getElementById("InputBase");
    const valueBase = parseInt(input.value);

    const inputAltura = document.getElementById("InputAltura");
    const valueAltura = parseInt(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}
//Círculo