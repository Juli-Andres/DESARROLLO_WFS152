//Ejercicio 14: Formateador de Códigos

const numFactura = "7";
const codProducto = "42";
const idUsuario = "123";
const oferta = "!OFERTA¡" 
const guion = "-" 

const padNumFactura = "F-"+numFactura.padStart(3, 0);
const padCodProducto = "PROD-"+codProducto.padStart(4, 0);
const padIdUsuario = "USER-"+idUsuario.padStart(5, 0);

console.log(`Factura: ${padNumFactura}`);
console.log(`Producto: ${padCodProducto}`);
console.log(`Usuario: ${padIdUsuario}`);
console.log(guion.repeat(30));
console.log(oferta.repeat(3));