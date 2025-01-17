/*EJERCICIO 5: 
 * Realizar una función para una tienda de coches en donde se deberá calcular: 
 * Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. 
 * Si el coche a la venta es un FORD FOCUS, el descuento será del 10% y 
 * si es un FORD ESCAPE el descuento será del 20%. 
 * Mostrar en html el coche seleccionado y el descuento que se aplicara en base a lo que selecciono el usuario.
*/

//Función para calcular el descuento
function calculateDiscount() {
    const carSelect = document.getElementById("carSelect").value;
    let discount = 0;

    switch (carSelect) {
        case "FORD FIESTA":
            discount = 5;
            break;
        case "FORD FOCUS":
            discount = 10;
            break;
        case "FORD ESCAPE":
            discount = 20;
            break;
        default:
            discount = 0;
            break;
    }

    document.getElementById("result").innerHTML = 
        `<p>El coche seleccionado es <strong>${carSelect}</strong> y el descuento aplicable es del <strong>${discount}%</strong>.</p>`;
}
