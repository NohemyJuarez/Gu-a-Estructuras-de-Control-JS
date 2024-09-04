/*EJERCICIO 1
 *Crear una función que en base a la edad que ingreso el usuario 
 *devolver un mensaje si la persona es mayor de edad o no. 
 *Utilizar para la condición el operador ternario.
*/

//función para verificar si una persona es mayor o no lo es
function verificarMayorEdad(edad) {
    return edad >= 18 ? "Es mayor de edad" : "No es mayor de edad";
}

// Ingresar edad
let edadUsuario = 9;
// Salida
console.log(verificarMayorEdad(edadUsuario));
