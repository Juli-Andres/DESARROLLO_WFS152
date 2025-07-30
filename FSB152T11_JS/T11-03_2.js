// Ejercicio 3.2: Arrow function que retorna objeto

//Crea una arrow function 'crearEstudiante' que reciba nombre y nota y retorne un objeto con {nombre, nota, aprobado} donde aprobado es true si nota >= 60.



const crearEstudiante = (nombre, nota) => {
    return {
        nombre,
        nota,
        aprobado: nota >= 60
    };
};
console.log(crearEstudiante("Ana", 75)); 
console.log(crearEstudiante("Luis", 55)); 