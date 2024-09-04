/**EJERCICIO 8:
 *Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.
 * Muestra la tabla de multiplicar del 1 al 10 para un número dado.
 *
 * @param {number} numero - El número para el cual se generará la tabla de multiplicar.
 */
// función para mostrar la tabla de multiplicar
function mostrarTablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Ingrsar numero
const numeroIngresado = 54; 
mostrarTablaMultiplicar(numeroIngresado);
