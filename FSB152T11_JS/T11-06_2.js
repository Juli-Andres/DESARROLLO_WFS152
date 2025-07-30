// Ejercicio 6.2: Función Anónima como Callback

//Crear una función anónima como callback para procesar un array de números.

const numeros = [1, 2, 3, 4, 5];

const duplicados = numeros.map(function(numero) {
    return numero * 2;
});

console.log("Números originales:", numeros);
console.log("Números duplicados:", duplicados);