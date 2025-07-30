// Ejercicio 13: Inventario de productos
// Cree un objeto que represente un inventario con al menos 5 productos y sus cantidades. Utilice for...in para mostrar el inventario completo.

let inventario = {
    Aceite: 5,
    Arroz: 10,
    Margarina: 15,
    Sal: 6,
    Azucar: 8
}

for (articulo in inventario){
    console.log(`${articulo}: ${inventario[articulo]}`)
}
