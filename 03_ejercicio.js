/*EJERCICIO 3 
 * Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
 * Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y aumento. 
 * Deberá demostrar los datos del empleado y el aumento salarial.
*/

//Función para calcular el aumento salariar
function calcularAumento(nombre, salario, categoria) {
    let aumento;

    switch(categoria.toUpperCase()) {
        case 'A':
            aumento = salario * 0.15;
            break;
        case 'B':
            aumento = salario * 0.30;
            break;
        case 'C':
            aumento = salario * 0.10;
            break;
        case 'D':
            aumento = salario * 0.20;
            break;
        default:
            return "Categoría no válida";
    }

    let nuevoSalario = salario + aumento;
    return `Empleado: ${nombre}\nSalario Base: $${salario.toFixed(2)}\nCategoría: ${categoria}\nAumento: $${aumento.toFixed(2)}\nNuevo Salario: $${nuevoSalario.toFixed(2)}`;
}

// Ingreso de datos
let nombreEmpleado = "Xiomara Bonilla";
let salarioBase = 5000;
let categoriaEmpleado = "D";

// Salida:
console.log(calcularAumento(nombreEmpleado, salarioBase, categoriaEmpleado));

/*Empleado: 
 * Salario Base: 
 * Categoría: 
 * Aumento: 
 *Nuevo Salario:
*/
