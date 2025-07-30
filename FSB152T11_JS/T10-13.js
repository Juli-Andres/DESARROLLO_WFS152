// Ejercicio 13: Calculadora de números perfectos

//Un número perfecto es aquel que es igual a la suma de sus divisores propios (excluyendo el número mismo). Encuentra todos los números perfectos menores a 30.

let limite = 30;
let numerosPerfectos = [];      

for (let num = 1; num < limite; num++) {
    let sumaDivisores = 0;

    for (let divisor = 1; divisor < num; divisor++) {
        if (num % divisor === 0) {
            sumaDivisores += divisor;
        }
    }

    if (sumaDivisores === num) {
        numerosPerfectos.push(num);
    }
}

console.log(`Los números perfectos menores a ${limite} son: ${numerosPerfectos.join(", ")}`);


numerosPerfectos.forEach(num => {   
    let divisores = [];
    for (let divisor = 1; divisor < num; divisor++) {
        if (num % divisor === 0) {
            divisores.push(divisor);
        }
    }
    console.log(`Divisores de ${num}: ${divisores.join(", ")}`)
});