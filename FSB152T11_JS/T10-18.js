// Ejercicio 18: Sistema de calificación ponderada

//Una universidad calcula promedios ponderados donde diferentes materias tienen diferentes pesos. Calcula el promedio ponderado y determina si el estudiante aprueba (>=7.0).

const materias = {
    matematicas: { nota: 8.5, creditos: 4 },
    fisica: { nota: 7.2, creditos: 3 },
    quimica: { nota: 9.0, creditos: 3 },
    literatura: { nota: 6.8, creditos: 2 }
};
let sumaNotasPonderadas = 0;
let totalCreditos = 0;
for (let materia in materias) {
    let nota = materias[materia].nota;
    let creditos = materias[materia].creditos;
    console.log(`${materia}: ${nota} (${creditos} créditos)`);
    sumaNotasPonderadas += nota * creditos;
    totalCreditos += creditos;
}
let promedioPonderado = sumaNotasPonderadas / totalCreditos;
let estado = promedioPonderado >= 7.0 ? "APROBADO" : "REPROBADO";
console.log("Promedio ponderado:", promedioPonderado.toFixed(2));
console.log("Estado:", estado);