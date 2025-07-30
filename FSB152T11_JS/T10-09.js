// Ejercicio 9: Generador de tabla de multiplicar personalizada

//Un profesor quiere generar tablas de multiplicar para varios números, pero solo hasta cierto límite. Genera las tablas del 3, 7 y 9 hasta el 6.

let numeros = [3, 7, 9];


    for (let j=0;j<numeros.length;j++) {
        for (let i=0;i<6;i++) {
            console.log(numeros[j] + " x " + (i+1) + " = " + (numeros[j] * (i+1)));
        }
        console.log("------------");
    }  