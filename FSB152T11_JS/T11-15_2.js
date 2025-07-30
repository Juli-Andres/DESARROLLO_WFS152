// Ejercicio 15.2: Función Once y Partial

//Implementar patrones once y partial para crear funciones especializadas.

function once(fn) {
    let executed = false;
    let result;

    return function(...args) {
        if (!executed) {
            executed = true;
            result = fn.apply(this, args);
            console.log("✅ Función ejecutada por primera vez");
        } else {
            console.log("❌ Función ya ejecutada, retornando resultado anterior");
        }
        return result;
    };
}

function partial(fn, ...argsIniciales) {
    return function(...argsRestantes) {
        return fn.apply(this, [...argsIniciales, ...argsRestantes]);
    };
}

function inicializar() {
    console.log("🚀 Inicializando sistema...");
    console.log("📊 Cargando configuración...");
    console.log("🔗 Conectando a base de datos...");
    return "Sistema inicializado correctamente";
}

const inicializarUnaVez = once(inicializar);

console.log("=== PROBANDO FUNCIÓN ONCE ===");
console.log("Primera llamada:", inicializarUnaVez());
console.log("Segunda llamada:", inicializarUnaVez());
console.log("Tercera llamada:", inicializarUnaVez());

function calcular(operacion, a, b, c) {
    switch(operacion) {
        case 'suma':
            return a + b + c;
        case 'producto':
            return a * b * c;
        case 'promedio':
            return (a + b + c) / 3;
        default:
            return 0;
    }
}

console.log("\n=== PROBANDO FUNCIÓN PARTIAL ===");

const sumar = partial(calcular, 'suma');
const multiplicar = partial(calcular, 'producto');
const promediar = partial(calcular, 'promedio');

console.log("Suma 2+3+4:", sumar(2, 3, 4)); 
console.log("Producto 2×3×4:", multiplicar(2, 3, 4)); 
console.log("Promedio (10,20,30):", promediar(10, 20, 30)); 

const sumarCon10 = partial(sumar, 10); 
console.log("Sumar 10+5+3:", sumarCon10(5, 3)); 

const inicializarBaseDatos = once(partial(calcular, 'inicializar'));