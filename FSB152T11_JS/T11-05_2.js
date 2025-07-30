// Ejercicio 5.2: Función con destructuring
//Crea una función 'presentarPersona' que use destructuring para extraer nombre, edad y ciudad (por defecto 'No especificada') de un objeto.

function presentarPersona({nombre, edad, ciudad = "No especificada"}) {
    console.log(`${nombre}, ${edad} años, vive en ${ciudad}`);
}

presentarPersona({nombre: "María", edad: 25, ciudad: "Madrid"});
presentarPersona({nombre: "Pedro", edad: 30});
