// Constructor
// function herdaDe(prototipoHijo, prototipoPadre) {
//     var fn = function () {}
//     fn.prototype = prototipoPadre.prototype; 
//     prototipoHijo.prototype = new fn;
//     prototipoHijo.prototype.constructor = prototipoHijo;
// }

// function Persona(nombre, apellido, altura) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.altura = altura;
// }
// Persona.prototype.saludar = function () {
//     console.log(`Hello, my name is ${this.nombre} ${this.apellido}`);
// }

// Persona.prototype.decirTalla = function () {
//     return this.altura > 1.8;
// }

// function Desarrollador(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
// }

// Desarrollador.prototype.saludar = function () {
//     console.log(`Hola my name is ${this.nombre} ${this.apellido} and I'm developer`)
// }


// var kevin = new Persona('Kevin', 'Gutierrez', 1.77);
// kevin.saludar();
// kevin.decirTalla();

// var kumi = new Persona('Kumi', 'Ruiz', 1.7);
// kevin.saludar();
// kevin.decirTalla();

// var kevin = new Persona('Kegura', 'Gutierrez', 1.2);
// kevin.saludar();
// kevin.decirTalla();

// var marvin = new Persona('Marvin', 'Gutierrez', 1.75);
// kevin.saludar();
// kevin.decirTalla();

// --------------- NO ENTENDÍ NADA LA PRIMERA CLASE DE JS -------------------

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
     }

     saludar() {
        console.log(`Hello, my name is ${this.nombre} ${this.apellido}`);
    }

    soyAlto() {
        return this.altura > 1.75;
    }

}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }

    saludar() {
        console.log(`Hola my name is ${this.nombre} ${this.apellido} and I'm developer`);
    }
}
