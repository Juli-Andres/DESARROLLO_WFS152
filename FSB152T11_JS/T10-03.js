// Ejercicio 3: Calificaciones escolares
// Un profesor tiene las calificaciones de 8 estudiantes y quiere saber cuántos aprobaron (nota >= 6) y cuántos reprobaron. Clasifica las calificaciones y muestra los totales.

const Calificaciones = [8.5, 4.2, 7.0, 5.8, 9.2, 6.5, 3.9, 8.1];
let aprob = 0;
let reprob = 0;

for (pos in Calificaciones) {
    if (Calificaciones[pos] >= 6) {
        aprob++;
    } else {
        reprob++;
    }
}
console.log(`Estudiantes aprobados: ${aprob}`);
console.log(`Estudiantes reprobados: ${reprob}`);