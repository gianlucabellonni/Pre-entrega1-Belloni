const prestamos = [];

function calcularCuotas() {
    const montoPrestamo = parseFloat(prompt('Ingrese el monto del préstamo:'));
    const tasaInteresAnual = parseFloat(prompt('Ingrese la tasa de interés anual (%):'));
    const plazoMeses = parseInt(prompt('Ingrese el plazo en meses:'));

    const tasaInteresMensual = tasaInteresAnual / 100 / 12;
    const cuotaMensual = (montoPrestamo * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazoMeses));
    
    const prestamo = {
        montoPrestamo: montoPrestamo,
        tasaInteresAnual: tasaInteresAnual,
        plazoMeses: plazoMeses,
        cuotaMensual: cuotaMensual.toFixed(2)
    };
    
    prestamos.push(prestamo);
}

function mostrarDetallesPrestamo(prestamo) {
    const mensaje = `Detalles del préstamo:
Monto del préstamo: $${prestamo.montoPrestamo}
Tasa de interés anual: ${prestamo.tasaInteresAnual}%
Plazo en meses: ${prestamo.plazoMeses}
Cuota mensual: $${prestamo.cuotaMensual}`;

    alert(mensaje);
}

function mostrarTodosLosPrestamos() {
    for (let i = 0; i < prestamos.length; i++) {
        mostrarDetallesPrestamo(prestamos[i]);
    }
}

function calcularYMostrarCuotas() {
    let continuar = true;
    while (continuar){
        calcularCuotas();
        const ultimoPrestamo = prestamos[prestamos.length - 1];
        mostrarDetallesPrestamo(ultimoPrestamo);
        continuar = confirm('¿Desea calcular otro préstamo?');
    }
    mostrarTodosLosPrestamos();
}

window.onload = calcularYMostrarCuotas;




