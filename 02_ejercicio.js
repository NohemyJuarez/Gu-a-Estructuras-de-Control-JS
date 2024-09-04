/*EJERCICIO 2
 *Crear una función que determine la nota final de un alumno, 
 * la cual depende de lo siguiente:
 *  •Examen =20%
 *  •tareas = 40%
 *  •asistencia = 10%
 *  •investigación = 30%
 *Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
*/

//Función para calcular nota final
function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    let notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    
    return `Alumno: ${nombre}\nCarnet: ${carnet}\nNota Final: ${notaFinal.toFixed(2)}`;
}

// Ingreso de datos
let nombreAlumno = "Nohemy Juarez";
let carnetAlumno = "20240901";
let examen = 95;
let tareas = 90;
let asistencia = 100;
let investigacion = 95;

// Salida:
console.log(calcularNotaFinal(nombreAlumno, carnetAlumno, examen, tareas, asistencia, investigacion));

/* Alumno: 
 * Carnet: 
 *Nota Final:
*/
 
