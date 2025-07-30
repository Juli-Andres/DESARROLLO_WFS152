// Ejercicio 17: Saltar múltiplos de 3
// Utilice un ciclo for del 1 al 20. Use continue para saltar los números que sean múltiplos de 3, pero muestre los demás.

for (i = 1; i <= 20; i++) {
    if (i % 3 == 0){
        continue;
    }
    console.log(i)
}

