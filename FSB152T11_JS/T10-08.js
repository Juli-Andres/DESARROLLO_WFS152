// Ejercicio 8: Calculadora de promedio de temperaturas

//Una estación meteorológica registró temperaturas durante una semana. Necesita calcular el promedio y determinar cuántos días estuvieron por encima del promedio. Analiza las temperaturas.

let Temperaturas= [22, 25, 19, 27, 24, 21, 26];
let suma = 0;

for(i=0;i<Temperaturas.length;i++){
    suma += Temperaturas[i];
}
let prom = (suma/Temperaturas.length);
console.log("El promedio de las temperaturas es: " + prom.toFixed(2));

let superior = 0;
for(i=0;i<Temperaturas.length;i++){
    if(Temperaturas[i] > prom)
    superior++;
}

console.log("La cantidad de días con temperaturas superiores al promedio es: " + superior);