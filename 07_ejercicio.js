/**EJERCICIO 7:
 *Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
 *•La cantidad de valores negativos ingresados.
 *•La cantidad de valores positivos ingresados.
 *La cantidad de múltiplos de 15.
 *•El valor acumulado de los números ingresados que son pares.
 * 
 * Analiza una lista de números enteros y calcula diversas estadísticas.
 *
 * @param {number[]} numeros - Array de números enteros ingresados por el usuario.
 * @returns {object} - Un objeto con las estadísticas calculadas.
 */
function analizarNumeros(numeros) {
    // Inicialización de contadores y acumuladores
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    // Recorrer el array de números y realizar las verificaciones
    for (let numero of numeros) {
        // Contar negativos y positivos
        if (numero < 0) {
            negativos++;
        } else if (numero > 0) {
            positivos++;
        }

        // Contar múltiplos de 15
        if (numero % 15 === 0) {
            multiplosDe15++;
        }

        // Acumular los números pares
        if (numero % 2 === 0) {
            sumaPares += numero;
        }
    }

    // Retornar las estadísticas como un objeto
    return {
        negativos,
        positivos,
        multiplosDe15,
        sumaPares
    };
}

// Ingreso de datos para la función 
const valoresIngresados = [10, -9, 15, 203, 22, -8, 45, 60, 2, -4];
const resultados = analizarNumeros(valoresIngresados);

// Desglosando los resultados
console.log(`Cantidad de valores negativos: ${resultados.negativos}`);
console.log(`Cantidad de valores positivos: ${resultados.positivos}`);
console.log(`Cantidad de múltiplos de 15: ${resultados.multiplosDe15}`);
console.log(`Suma de los valores pares: ${resultados.sumaPares}`);
