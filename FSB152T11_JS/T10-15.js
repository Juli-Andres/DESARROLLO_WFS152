// Ejercicio 15: Generador de pirámide numérica

//Un programador necesita crear una pirámide numérica donde cada fila tenga números consecutivos empezando desde 1. Genera una pirámide de 5 niveles.

const niveles = 5;
let numeroActual = 1;

for (let fila = 1; fila <= niveles; fila++) {
    let lineaTexto = "";
    
    for (let columna = 1; columna <= fila; columna++) {
        lineaTexto += numeroActual;
        if (columna < fila) {
            lineaTexto += " ";
        }
        numeroActual++;
    }
    
    console.log(lineaTexto);
}