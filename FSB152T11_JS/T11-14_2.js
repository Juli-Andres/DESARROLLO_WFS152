// Ejercicio 14.2: Factory de Objetos con Métodos

//Crear una fábrica de objetos que genere calculadoras con métodos encadenables.

function crearCalculadora(valorInicial = 0) {
    let valor = valorInicial;
    let historial = [];
    
    function registrarOperacion(operacion, operando, resultado) {
        historial.push(`${operacion} ${operando} = ${resultado}`);
    }

    return {
        sumar(num) {
            const anterior = valor;
            valor += num;
            registrarOperacion(`${anterior} +`, num, valor);
            console.log(`Sumando ${num}: ${anterior} + ${num} = ${valor}`);
            return this; 
        },

        restar(num) {
            const anterior = valor;
            valor -= num;
            registrarOperacion(`${anterior} -`, num, valor);
            console.log(`Restando ${num}: ${anterior} - ${num} = ${valor}`);
            return this;
        },

        multiplicar(num) {
            const anterior = valor;
            valor *= num;
            registrarOperacion(`${anterior} ×`, num, valor);
            console.log(`Multiplicando por ${num}: ${anterior} × ${num} = ${valor}`);
            return this;
        },

        dividir(num) {
            if (num === 0) {
                console.log("Error: División por cero");
                return this;
            }
            const anterior = valor;
            valor /= num;
            registrarOperacion(`${anterior} ÷`, num, valor);
            console.log(`Dividiendo por ${num}: ${anterior} ÷ ${num} = ${valor}`);
            return this;
        },

        resultado() {
            console.log(`Resultado final: ${valor}`);
            return valor;
        },

        reset() {
            valor = valorInicial;
            historial = [];
            console.log(`Calculadora reseteada a ${valorInicial}`);
            return this;
        },

        historial() {
            console.log("Historial de operaciones:", historial);
            return this;
        }
    };
}

const calc1 = crearCalculadora(10);
const resultado1 = calc1
    .sumar(5)
    .multiplicar(2)
    .restar(8)
    .dividir(3)
    .resultado();

console.log("\n--- Segunda calculadora ---");
const calc2 = crearCalculadora();
calc2.sumar(100).dividir(4).multiplicar(3).resultado();