// Ejercicio 9: Menú de opciones
// Simule un menú que se muestre al menos una vez. Utilice do-while para mostrar opciones del 1 al 4, y "salir" cuando la opción sea 4.

let opcion = 0; 
do { 
    console.log("\n=== MENÚ ==="); 
    console.log("1. Opción 1"); 
    console.log("2. Opción 2"); 
    console.log("3. Opción 3"); 
    console.log("4. Salir"); 
    opcion++;
    console.log("Opción seleccionada:", opcion); 
} while (opcion !== 4);