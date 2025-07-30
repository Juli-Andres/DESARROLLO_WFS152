// Ejercicio 16: Buscar número específico
// Utilice un ciclo for del 1 al 50. Cuando encuentre el número 23, muestre "¡Encontrado!" y salga del ciclo usando break.

for (i = 1; i <= 50; i++) {
    if (i == 23){
        console.log(`¡Encontrado el numero ${i}!`) 
        break
    }
    console.log(i)
}
  