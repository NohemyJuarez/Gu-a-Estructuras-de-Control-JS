/**EJERCICIO 10:
 *Se cuenta con la siguiente información:
 *•Las edades de 5 estudiantes del turno mañana.
 *•Las edades de 6 estudiantes del turno tarde.
 *•Las edades de 11 estudiantes del turno noche.
 *
 *Nota: Las edades de cada estudiante se deberán ingresar por la web.
 *Lo que queremos devolver:
 *•Obtener el promedio de las edades de cada turno (tres promedios).
 *•Imprimir dichos promedios (promedio de cada turno).
 *•Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un promedio de edades mayor.
 * 
 * Calcula el promedio de un array de números.
 *
 * @param {number[]} edades - Array de edades.
 * @returns {number} - El promedio de las edades.
*/

//función para calcular los promedidios 
function calcularPromedio(edades) {
    const suma = edades.reduce((acumulador, edad) => acumulador + edad, 0);
    return suma / edades.length;
}

/**
 * Compara los promedios de las edades de los tres turnos y determina el mayor.
 *
 * @param {number} promedioMañana - Promedio del turno mañana.
 * @param {number} promedioTarde - Promedio del turno tarde.
 * @param {number} promedioNoche - Promedio del turno noche.
 * @returns {string} - Mensaje indicando cuál turno tiene el promedio más alto.
*/

//función para comparar los proedios 
function compararPromedios(promedioMañana, promedioTarde, promedioNoche) {
    let mayorPromedio = Math.max(promedioMañana, promedioTarde, promedioNoche);

    if (mayorPromedio === promedioMañana) {
        return "El turno mañana tiene el promedio de edades más alto.";
    } else if (mayorPromedio === promedioTarde) {
        return "El turno tarde tiene el promedio de edades más alto.";
    } else {
        return "El turno noche tiene el promedio de edades más alto.";
    }
}

// Ingreso de datos
const edadesMañana = [9, 10, 11, 12, 13, 7, 8, 6, 5]; // Aquí se ingresan las edades del turno mañana
const edadesTarde = [17, 16, 15, 14, 18, 19]; // Aquí se ingresan las edades del turno tarde
const edadesNoche = [20, 21, 22, 23, 24, 25, 26, 27]; // Aquí se ingresan las edades del turno noche

const promedioMañana = calcularPromedio(edadesMañana);
const promedioTarde = calcularPromedio(edadesTarde);
const promedioNoche = calcularPromedio(edadesNoche);

// Salida de resultados
console.log(`Promedio de edades - Turno mañana: ${promedioMañana}`);
console.log(`Promedio de edades - Turno tarde: ${promedioTarde}`);
console.log(`Promedio de edades - Turno noche: ${promedioNoche}`);

const resultado = compararPromedios(promedioMañana, promedioTarde, promedioNoche);
console.log(resultado);
