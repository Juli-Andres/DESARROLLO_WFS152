// Ejercicio 15.1: Throttle y Debounce

//Implementar throttle y debounce para controlar la frecuencia de ejecución de funciones.

function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return func.apply(this, args);
        }
    };
}

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function buscar(termino) {
    console.log(`🔍 Buscando: "${termino}" - ${new Date().toLocaleTimeString()}`);
}

function onScroll(posicion) {
    console.log(`📜 Scroll en posición: ${posicion} - ${new Date().toLocaleTimeString()}`);
}

const busquedaDebounced = debounce(buscar, 500); 
const scrollThrottled = throttle(onScroll, 200); 

console.log("=== SIMULANDO BÚSQUEDA RÁPIDA (DEBOUNCE) ===");
busquedaDebounced("j");
setTimeout(() => busquedaDebounced("ja"), 100);
setTimeout(() => busquedaDebounced("jav"), 200);
setTimeout(() => busquedaDebounced("java"), 300);
setTimeout(() => busquedaDebounced("javas"), 400);
setTimeout(() => busquedaDebounced("javascript"), 450);

setTimeout(() => {
    console.log("\n=== SIMULANDO SCROLL RÁPIDO (THROTTLE) ===");
    for (let i = 0; i < 10; i++) {
        setTimeout(() => scrollThrottled(i * 100), i * 50);
    }
}, 2000);