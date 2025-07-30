// Ejercicio 4.1: Contador personalizado con closure

//Crea una función 'crearContadorPersonalizado' que reciba un valor inicial y retorne una función que incremente desde ese valor.

const crearContadorPersonalizado = (inicial) => {
    let contador = inicial;
    return () => {
        contador++;
        return contador;
    };
};

const contador1 = crearContadorPersonalizado(5);
console.log(contador1()); 
console.log(contador1()); 

const contador2 = crearContadorPersonalizado(100);
console.log(contador2()); 
