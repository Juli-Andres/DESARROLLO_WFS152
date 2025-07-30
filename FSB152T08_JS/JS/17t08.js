//Ejercicio 17: Comparador de Igualdades

const aUno = 5;
const bUno = "5";

const aDos = true;
const bDos = 1;

const aTres = false;
const bTres = 0;

const aCuatro = null;
const bCuatro = undefined;

const aCinco = "";
const bCinco = 0;

const guion = "-"

console.log(guion.repeat(30))
console.log(`Comparando ${aUno} y "${bUno}":`)
console.log(`- Con == (Con conversión): ${aUno == bUno}`);
console.log(`- Con === (Sin conversión): ${aUno === bUno}`);

console.log(guion.repeat(30))
console.log(`Comparando ${aDos} y ${bDos}:`)
console.log(`- Con == (Con conversión): ${aDos == bDos}`);
console.log(`- Con === (Sin conversión): ${aDos === bDos}`);

console.log(guion.repeat(30))
console.log(`Comparando ${aTres} y ${bTres}:`)
console.log(`- Con == (Con conversión): ${aTres == bTres}`);
console.log(`- Con === (Sin conversión): ${aTres === bTres}`);

console.log(guion.repeat(30))
console.log(`Comparando ${aCuatro} y ${bCuatro}:`)
console.log(`- Con == (Con conversión): ${aCuatro == bCuatro}`);
console.log(`- Con === (Sin conversión): ${aCuatro === bCuatro}`);

console.log(guion.repeat(30))
console.log(`Comparando "${aCinco}" y ${bCinco}:`)
console.log(`- Con == (Con conversión): ${aCinco == bCinco}`);
console.log(`- Con === (Sin conversión): ${aCinco === bCinco}`);

console.log(guion.repeat(30))