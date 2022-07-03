//* Ciclo for
var kumi = {
    nombre: 'kumi',
    apellido: 'ruiz',
    edad: 29,
    peso: 83
}

const DIAS_DEL_ANHO = 365;
const INCREMENTO_PESO = 0.3;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
// const aumentarDePeso = ({peso}) => peso += 0.2;
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO;
// const bajarDePeso = ({peso}) => peso += 0.2;

console.log(`Al inicio del anho ${kumi.nombre} pesa ${kumi.peso} kg.`);

for (var i = 1; i <= DIAS_DEL_ANHO; i++) {
    var random = Math.random();
    if (random < 0.25) {
        // aumenta de peso
        aumentarDePeso(kumi);
    } else if (random < 0.5) {
        // baja de peso
        bajarDePeso(kumi);
    }
}

console.log(`Al fin del anho ${kumi.nombre} pesa ${kumi.peso.toFixed(1)} kg.`);

//* Ciclo while
var kevin = {
    nombre: 'kevin',
    apellido: 'gutierrez',
    edad: 29,
    peso: 93
}

const META = kevin.peso - 3;
var dias = 0;
const comeMucho = () => Math.random() < 0.1;
const realizaDeporte = () => Math.random() < 0.4;

while (kevin.peso > META) {
    if (comeMucho()) {
        // aumentarDePeso
        aumentarDePeso(kevin);
    }
    if (realizaDeporte()) {
        // bajarDePeso
        bajarDePeso(kevin);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${kevin.nombre} logró su meta y actualmente pesa ${kevin.peso} kg.`);
