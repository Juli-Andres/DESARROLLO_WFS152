// Ejercicio 18: Patrón de asteriscos
/* Utilice ciclos anidados (for dentro de for) para crear este patrón de asteriscos:
*
**
***
****
***** */

for (let i = 1; i <= 5; i++) { 
    let fila = ""; 
    for (let j = 1; j <= i; j++) { 
        fila += "*"; 
    } 
    console.log(fila); 
}