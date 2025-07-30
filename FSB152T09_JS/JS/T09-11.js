// Ejercicio 11: Propiedades de un estudiante
// Cree un objeto estudiante con propiedades (nombre, edad, curso, nota). Utilice for...in para mostrar todas las propiedades y sus valores.

let estudiante = {
    nombre: "Julian",
    edad: 43,
    curso: "JavaScript",
    nota: 9.2
}

for (est in estudiante){
    console.log(`${est}: ${estudiante[est]}`)
}