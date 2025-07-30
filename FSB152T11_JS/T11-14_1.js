// Ejercicio 14.1: Call, Apply y Bind

//Usar call, apply y bind para cambiar el contexto de funciones.

const persona1 = {
    nombre: "Ana",
    edad: 25
};

const persona2 = {
    nombre: "Carlos",
    edad: 30
};


function saludar(saludo = "Hola") {
    return `${saludo}, soy ${this.nombre} y tengo ${this.edad} años`;
}

function presentarse(profesion, ciudad) {
    return `${this.nombre} es ${profesion} y vive en ${ciudad}`;
}

console.log("--- CALL ---");
console.log(saludar.call(persona1)); 
console.log(saludar.call(persona2, "Buenos días")); 
console.log(presentarse.call(persona1, "doctora", "Madrid"));

console.log("--- APPLY ---");
console.log(saludar.apply(persona1, ["¡Hola!"])); 
console.log(presentarse.apply(persona2, ["ingeniero", "Barcelona"]));

console.log("--- BIND ---");
const saludarAna = saludar.bind(persona1);
const saludarCarlos = saludar.bind(persona2, "¡Qué tal!");

console.log(saludarAna()); 
console.log(saludarCarlos()); 

const presentarAna = presentarse.bind(persona1, "diseñadora");
console.log(presentarAna("Valencia")); 