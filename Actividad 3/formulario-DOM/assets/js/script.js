

let botonEnviar = document.getElementById("boton-enviar");
botonEnviar.textContent = "Reserva Ahora";

botonEnviar.addEventListener(`click`, function(){
    let nombre = document.getElementById('nombre').value;
    let fechaLlegada = document.getElementById('fecha-llegada').value;
    let tipoHabitacion = document.getElementById('tipo-habitacion').value;
    if (nombre && fechaLlegada && tipoHabitacion) {
        alert(`Reserva confirmada a nombre de: #(nombre) para la fecha de llegada #(fechaLlegada) y su tipo de habitacion es #(tipoHabitacion)`);
    } else {
        alert(`Por favor complete el formulario en su totalidad`);
    }
})

botonEnviar.addEventListener("mouseover", () -> {
    botonEnviar.style.backgroundColor ="red"
})

botonEnviar.addEventListener("mouseover", () -> {
    botonEnviar.style.backgroundColor = "gray"
})