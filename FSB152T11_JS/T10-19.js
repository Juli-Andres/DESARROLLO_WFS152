// Ejercicio 19: Algoritmo de ordenamiento burbuja

//Un desarrollador necesita implementar el algoritmo de ordenamiento burbuja para ordenar una lista de números. Ordena el array mostrando cada intercambio realizado.
                                                                        
let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length;
console.log("Array inicial:", arr);
for (let i = 0; i < n - 1; i++) {
    let intercambios = false;
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            intercambios = true;
        }
    }
    console.log(`Pasada ${i + 1}:`, [arr]);
    
    if (!intercambios) {
        break;
    }
}
console.log("Array ordenado:", arr);
                                    
