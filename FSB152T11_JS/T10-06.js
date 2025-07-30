// Ejercicio 6: Sistema de inventario

// Una tienda tiene un inventario de productos con sus cantidades. Quiere identificar qué productos necesita reabastecer (cantidad < 10) y cuáles están bien surtidos. Clasifica el inventario.

let inventario= {laptops: 5, mouse: 25, teclados: 8, monitores: 15, cables: 3};

for (producto in inventario){
    let cantidad = inventario[producto];
    if(cantidad<10){
        console.log(`${producto}: !!! Necesita surtir ¡¡¡`)
    }else{
        console.log(`${producto}: No hay que surtir`)
    }
}