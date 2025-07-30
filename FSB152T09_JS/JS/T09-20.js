// Ejercicio 20: Simulador de cajero automático

/* Simule un cajero automático. Utilice do-while para mostrar un menú con opciones:
1. Consultar saldo (saldo inicial: 1000)
2. Retirar dinero (verifica que no sea mayor al saldo)
3. Depositar dinero
4. Salir
Simule las transacciones y muestre el saldo actualizado. */

let saldo = 1000; 
let opcion = 0;
let operaciones = [1, 2, 3,1,4]; 
// Simula selecciones del usuario
let indiceOp = 0; 
do {
    console.log("\n=== CAJERO AUTOMÁTICO ===");
    console.log("1. Consultar saldo");
    console.log("2. Retirar dinero");
    console.log("3. Depositar dinero");
    console.log("4. Salir");
    opcion = operaciones[indiceOp];
    console.log("Opción seleccionada:", opcion); 
    if (opcion === 1) { 
        console.log("Su saldo actual es: $" + saldo); 
    } else if (opcion === 2) { 
        let retiro = 200; 
        // Simula cantidad a retirar 
        if (retiro <= saldo) { 
            saldo = saldo - retiro; 
            console.log("Retiro exitoso. Nuevo saldo: $" + saldo); 
        } else { 
            console.log("Saldo insuficiente"); 
        } 
    } else if (opcion===3) { 
        let deposito=300; 
        // Simula cantidad a depositar
        saldo = saldo + deposito;
        console.log("Depósito exitoso. Nuevo saldo: $" + saldo); 
    }
    indiceOp++; 
    if (indiceOp >= operaciones.length) 
        indiceOp = operaciones.length - 1;
} while (opcion !== 4);
console.log("¡Gracias por usar nuestro cajero!");
                                                    