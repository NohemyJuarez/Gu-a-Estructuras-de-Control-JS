/**EJERCICIO 6: 
 * Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:
 * Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, 
 *el descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y 
 *si el destino es Puerto el Triunfo el descuento será del 15%.
 *
 * Calcula el descuento para un viaje turístico basado en el destino.
 *
 * @param {string} origen - La ciudad de origen del viaje.
 * @param {string} destino - La ciudad de destino del viaje.
 * @returns {number} - El porcentaje de descuento aplicado.
 */

//función para calcular descuentos
function calcularDescuento(origen, destino) {
    
    origen = origen.toLowerCase();
    destino = destino.toLowerCase();

    // Inicializar el descuento a 0
    let descuento = 0;

    // Verificar el origen y calcular el descuento basado en el destino
    if (origen === "palma") {
        switch (destino) {
            case "la costa del sol":
                descuento = 5;
                break;
            case "panchimalco":
                descuento = 10;
                break;
            case "puerto el triunfo":
                descuento = 15;
                break;
            default:
                console.log("No hay descuento disponible para este destino.");
        }
    } else {
        console.log("El descuento solo aplica para viajes desde Palma.");
    }

    return descuento;
}

// Ingreso de datos
const origen = "Palma";
const destino = "Panchimalco";
const descuentoAplicado = calcularDescuento(origen, destino);

//Salida
console.log(`El descuento para el viaje de ${origen} a ${destino} es del ${descuentoAplicado}%.`);
