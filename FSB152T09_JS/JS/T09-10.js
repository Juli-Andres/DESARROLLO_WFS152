// Ejercicio 10: Contar dígitos
// Utilice do-while para contar cuántos dígitos tiene el número 9876. Divida entre 10 en cada iteración.

let numero = 9876; 
let digitos = 0; 

do { 
    numero = Math.floor(numero / 10);
    digitos++;
    console.log(numero,digitos)
} while (numero > 0);
console.log("El número 9876 tiene", digitos, "dígitos");
