
function calcularCuota(montoTotal, numeroCuotas) {
    return montoTotal / numeroCuotas;
}

let montoTotal = prompt("Ingrese el monto total:");
let numeroCuotas = prompt("Ingrese el número de cuotas:");


if (numeroCuotas > 0) {
    
    let cuotaMensual = calcularCuota(montoTotal, numeroCuotas);
    console.log("Monto total:", montoTotal);
    console.log("Número de cuotas:", numeroCuotas);
    console.log("Cuota mensual:", cuotaMensual.toFixed(2));

    for (let i = 1; i <= numeroCuotas; i++) {
        console.log("Cuota", i + ":", cuotaMensual.toFixed(2));
    }
} else {
    console.log("El número de cuotas debe ser mayor que cero.");
}







