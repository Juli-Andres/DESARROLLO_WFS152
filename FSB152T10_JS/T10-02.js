// Ejercicio 2: Buscador de contraseña
//Un usuario ha olvidado su contraseña de 4 dígitos, pero recuerda que está entre 1000 y 1010. Ayúdale a encontrar su contraseña probando todos los números hasta encontrar el correcto.

const password = 1007;

for (i = 1000; i <= 1010; i++) {
    if (i === password) {
        console.log(`¡Contraseña encontrada: ${password}¡`)
        break;
    }
    console.log(`${i}`)
}