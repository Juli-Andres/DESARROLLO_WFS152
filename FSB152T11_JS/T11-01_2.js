// Ejercicio 1.2: Calculadora de descuentos

//Crea una función 'calcularDescuento' que reciba precio y descuento (por defecto 10) y retorne el precio final después del descuento.

function calcularDescuento(precio, descuento = 10) {
    const precioFinal = precio - (precio * (descuento / 100));
    return `El precio final después de aplicar un descuento del ${descuento}% es: $${precioFinal.toFixed(1)}`;
}   

console.log(calcularDescuento(100));
console.log(calcularDescuento(100, 20));