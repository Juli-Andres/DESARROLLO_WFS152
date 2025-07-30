// Ejercicio 10.1: Promise Básico

//Crear una función que retorne una Promise que simule una operación asíncrona.

function operacionAsincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 100) + 1;
            const exito = Math.random() > 0.2;
            
            if (exito) {
                resolve(numero);
            } else {
                reject("Error en la operación");
            }
        }, 2000);
    });
}

console.log("Iniciando operación asíncrona...");
operacionAsincrona()
    .then(resultado => {
        console.log(`Operación completada: ${resultado}`);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });

console.log("Esta línea se ejecuta inmediatamente");