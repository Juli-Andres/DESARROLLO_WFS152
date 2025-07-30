// Ejercicio 7: Validador de números primos
let num = 17;
let cont = 0;

for (i = 1; i <= num; i++) {
   
    if (num === 2) {
        continue;
    }
    if (num % i === 0) {
        cont++;
    }
}
  
if(cont<=2){
    console.log(`El ${num} es Primo`);
}else{
    console.log(`No es primo`)
}