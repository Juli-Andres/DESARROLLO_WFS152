// Ejercicio 19: Números primos del 1 al 30
// Utilice ciclos anidados y condicionales para encontrar todos los números primos del 1 al 30. (Un número primo solo es divisible por 1 y por sí mismo)

for (i = 1; i <= 30; i++) {
    let cont = 0;
    if (i === 2) {
        continue;
    }
    for (j = 1; j <= i; j++) {
        res = i / j;

        if (i % j === 0) {
            cont++;
        }
    }
    if (cont <= 2) {
        console.log(i)
    }
}
