document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = this.nombre.value.trim();
    const correo = this.correo.value.trim();
    const carrera = this.carrera.value.trim();
    const conferenciasSeleccionadas = document.querySelectorAll('input[name="evento"]:checked');
    const mensajeDiv = document.getElementById('mensajeExito');

    if (!nombre || !correo || !carrera) {
        mensajeDiv.style.display = 'block';
        mensajeDiv.className = 'error';
        mensajeDiv.innerText = 'Por favor completa todos los campos.';
        return;
    }

    const correoRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!correoRegex.test(correo)) {
        mensajeDiv.style.display = 'block';
        mensajeDiv.className = 'error';
        mensajeDiv.innerText = 'Por favor ingresa un correo electrónico válido.';
        return;
    }

    if (conferenciasSeleccionadas.length === 0) {
        mensajeDiv.style.display = 'block';
        mensajeDiv.className = 'error';
        mensajeDiv.innerText = 'Selecciona al menos una conferencia.';
        return;
    }

    // Preparar lista de conferencias seleccionadas
    let listaConferencias = [];
    conferenciasSeleccionadas.forEach(function(checkbox) {
        listaConferencias.push(checkbox.value);
    });

    // Crear el mensaje personalizado
    mensajeDiv.style.display = 'block';
    mensajeDiv.className = 'exito';
    mensajeDiv.innerHTML = `
        ✅ ¡Gracias <strong>${nombre}</strong> por registrarte!<br>
        Te has inscrito en: <strong>${listaConferencias.join(', ')}</strong>.<br>
        Te contactaremos al correo: <strong>${correo}</strong>.
    `;

    this.reset(); // Limpiar formulario
});
