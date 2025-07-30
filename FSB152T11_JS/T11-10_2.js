// Ejercicio 10.2: Módulo con Closures

//Crear un módulo de gestión de cuentas bancarias usando closures para datos privados.

function crearCuenta(saldoInicial = 0) {
    let saldo = saldoInicial;
    let historial = [];

    function registrarTransaccion(tipo, monto, saldoAnterior) {
        historial.push({
            fecha: new Date().toLocaleString(),
            tipo: tipo,
            monto: monto,
            saldoAnterior: saldoAnterior,
            saldoNuevo: saldo
        });
    }

    return {
        depositar: function(monto) {
            if (monto <= 0) {
                return "El monto debe ser positivo";
            }
            const saldoAnterior = saldo;
            saldo += monto;
            registrarTransaccion("Depósito", monto, saldoAnterior);
            return `Depósito exitoso. Nuevo saldo: $${saldo}`;
        },

        retirar: function(monto) {
            if (monto <= 0) {
                return "El monto debe ser positivo";
            }
            if (monto > saldo) {
                return "Fondos insuficientes";
            }
            const saldoAnterior = saldo;
            saldo -= monto;
            registrarTransaccion("Retiro", monto, saldoAnterior);
            return `Retiro exitoso. Nuevo saldo: $${saldo}`;
        },

        consultarSaldo: function() {
            return `Saldo actual: $${saldo}`;
        },

        obtenerHistorial: function() {
            return [...historial]; 
        }
    };
}

const miCuenta = crearCuenta(1000);

console.log(miCuenta.consultarSaldo()); 
console.log(miCuenta.depositar(500)); 
console.log(miCuenta.retirar(200)); 
console.log(miCuenta.retirar(2000)); 
console.log(miCuenta.consultarSaldo()); 
console.log("Historial de transacciones:");
console.log(miCuenta.obtenerHistorial());