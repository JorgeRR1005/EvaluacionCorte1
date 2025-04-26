document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = this.nombre.value.trim();
    const correo = this.correo.value.trim();
    const carrera = this.carrera.value.trim();
    const conferencias = document.querySelectorAll('input[name="evento"]:checked');

    if (!nombre || !correo || !carrera) {
        alert('Por favor completa todos los campos.');
        return;
    }

    const correoRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!correoRegex.test(correo)) {
        alert('Por favor ingresa un correo electrónico válido.');
        return;
    }

    if (conferencias.length === 0) {
        alert('Selecciona al menos una conferencia.');
        return;
    }

    alert('¡Registro enviado correctamente!');
    this.reset();
});
