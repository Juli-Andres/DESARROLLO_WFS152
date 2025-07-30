// Ejercicio 11: Sistema de votación

//En una elección estudiantil, se registraron votos para diferentes candidatos. Necesitas determinar quién ganó, cuántos votos obtuvo y si hay empate. Procesa los resultados electorales.

let votos = ["Ana", "Carlos", "Ana", "María", "Carlos", "Ana", "Luis", "María", "Carlos", "Ana"]

let conteo = {};
for (let i = 0; i < votos.length; i++) {
    let candidato = votos[i];
    if (conteo[candidato]) {
        conteo[candidato]++;
    } else {
        conteo[candidato] = 1;
    }
}
let ganador = null;
let maxVotos = 0;

for (let candidato in conteo) {
    console.log(`${candidato} recibió ${conteo[candidato]} votos.`);
    let votos = conteo[candidato];
    if (votos > maxVotos) {
        maxVotos = votos;
        ganador = candidato;
    } else if (votos === maxVotos) {
        ganador = null; 
       }
}

if (ganador) {
    console.log(`El ganador es ${ganador} con ${maxVotos} votos.`);
} else {
    console.log(`Hay un empate con ${maxVotos} votos.`);
}
