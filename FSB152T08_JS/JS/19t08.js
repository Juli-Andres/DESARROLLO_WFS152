//Ejercicio 19: Operaciones Extrañas

const guion = "-"

function imp(){
    console.log(`${guion.repeat(60)}`)
}

imp()
console.log(`true + true = ${true + true} (true se convierte a 1, así que 1 + 1 = 2.)`);
imp()
console.log(`"5" - "2" = ${"5" - "2"} (Ambos son strings, pero el operador - convierte a número: 5 - 2 = 3.)`);
imp()
console.log(`"5" + 2 = ${"5" + 2} (El operador + con string concatena: "5" + 2 = "52".)`);
imp()
console.log(`"5" * "2" = ${"5" * "2"} (Ambos strings se convierten a número: 5 * 2 = 10.)`);
imp()
console.log(`[] + [] = ${[] + []} (Ambos arrays vacíos se convierten a string vacío: "" + "" = "".)`);
imp()
console.log(`[] + {} = ${[] + {}} ([] se convierte a "" y {} a "[object Object]", así que el resultado es "[object Object]".)`);
imp()
console.log(`"10" - 5 + "3" = ${"10" - 5 + "3"} ("10" - 5 convierte "10" a número: 10 - 5 = 5. Luego, 5 + "3" concatena: "53".)`);
imp()