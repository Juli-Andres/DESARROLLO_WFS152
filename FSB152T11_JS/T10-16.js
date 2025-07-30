// Ejercicio 16: Simulador de juego de dados

const dados = [3, 6, 2, 4, 5, 1, 6, 3, 4, 2, 5, 6, 1, 4, 3];
let puntosJugador1 = 0;
let puntosJugador2 = 0;
let turno = 1;
let indiceDado = 0;
let ganador = null;

while (ganador === null && indiceDado < dados.length) {
    
    if (indiceDado < dados.length) {
        let dado = dados[indiceDado];
        puntosJugador1 += dado;
        console.log(`Turno ${turno} - Jugador 1: ${dado}, Total: ${puntosJugador1}`);
        indiceDado++;
        if (puntosJugador1 >= 20) {
            ganador = "Jugador 1";
            break;
        }
    }
    
    if (indiceDado < dados.length) {
        let dado = dados[indiceDado];
        puntosJugador2 += dado;
        console.log(`Turno ${turno} - Jugador 2: ${dado}, Total: ${puntosJugador2}`);
        indiceDado++;
        if (puntosJugador2 >= 20) {
            ganador = "Jugador 2";
            break;
        }
    }
    turno++;
}
if (ganador === "Jugador 1") {
    console.log(`¡Jugador 1 gana con ${puntosJugador1} puntos!`);
} else if (ganador === "Jugador 2") {
    console.log(`¡Jugador 2 gana con ${puntosJugador2} puntos!`);
} else {
    console.log("Juego terminado sin ganador (se acabaron los dados)");
}