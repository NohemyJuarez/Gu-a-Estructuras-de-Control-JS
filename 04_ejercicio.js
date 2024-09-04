/*EJERCICIO 4: 
 * Crear una función que en base a 2 números enteros que ingrese el usuario, 
 * calcular cual número es el mayor y devolverlo.
*/

//Función para calcular que numero es Mayor
function numeroMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Ambos números son iguales";
    }
}

// Ingreso de datos:
let numero1 = 838483;
let numero2 = 2050;

//Salida
console.log("El número mayor es: " + numeroMayor(numero1, numero2)); // Salida: "El número mayor es: "
