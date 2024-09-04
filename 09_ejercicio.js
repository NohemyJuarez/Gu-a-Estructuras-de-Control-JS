/**EJERCICIO 9:
 *Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
 *•Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
 *•Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
 *•Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
 *•Si no está entre ningún caso anterior la frase “Temperatura desconocida”
 * 
 * Convierte una temperatura de Celsius a Fahrenheit.
 *
 * @param {number} celsius - La temperatura en grados Celsius.
 * @returns {number} - La temperatura convertida en grados Fahrenheit.
*/

// función para convertir Celsius a Fahrenheit
function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

/**
 * Evalúa la temperatura en grados Fahrenheit y devuelve una descripción adecuada.
 *
 * @param {number} fahrenheit - La temperatura en grados Fahrenheit.
 * @returns {string} - Una descripción de la temperatura.
*/

// función para evaluar temperatura
function evaluarTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit < 32) {
        return "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        return "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}

// Igresae temperatura en Celsius
const temperaturaCelsius = 20; 
const temperaturaFahrenheit = convertirCelsiusAFahrenheit(temperaturaCelsius);
const resultado = evaluarTemperatura(temperaturaFahrenheit);

// salida
console.log(`Temperatura en Celsius: ${temperaturaCelsius}°C`);
console.log(`Temperatura en Fahrenheit: ${temperaturaFahrenheit}°F`);
console.log(`Evaluación: ${resultado}`);
