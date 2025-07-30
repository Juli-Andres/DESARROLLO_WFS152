// Ejercicio 10.2: Async/Await

//Convertir el código anterior a async/await y manejar múltiples operaciones asíncronas.

function operacionAsincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const resultado = Math.floor(Math.random() * 10) + 1;
            resolve(resultado);
        }, 1000);
    });
}

async function ejecutarOperaciones() {
    try {
        console.log("Ejecutando múltiples operaciones en paralelo...");
        
        const promesas = [
            operacionAsincrona(),
            operacionAsincrona(),
            operacionAsincrona()
        ];
        
        const resultados = await Promise.all(promesas);
        
        const suma = resultados.reduce((acc, num) => acc + num, 0);
        
        console.log("Resultados individuales:", resultados);
        console.log(`Suma total: ${suma}`);
        
        return suma;
    } catch (error) {
        console.log("Error en las operaciones:", error);
        throw error;
    }
}

ejecutarOperaciones()
    .then(resultado => console.log("Proceso completado:", resultado))
    .catch(error => console.log("Falló el proceso:", error));

