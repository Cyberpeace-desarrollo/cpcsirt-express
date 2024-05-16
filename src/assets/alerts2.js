document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        let errors = validateForm();
        let captchaResponse = grecaptcha.getResponse();

        if (errors.length > 0) {
            Swal.fire({
                title: 'Verifique los campos',
                text: errors,
                icon: 'error',
                showConfirmButton: false,
                toast: true,
                position: 'top',
                timer: 6000,
                timerProgressBar: true,
            });
        } else if (captchaResponse.length === 0) {
            document.getElementById('g-recaptcha-error').innerHTML = `<span style="color:red;">reCAPTCHA no completado</span>`;
        } else {
            // Crear un objeto JavaScript para enviar como JSON
            const formData = {
                nombre: document.getElementById('nombre').value,
                telefono: document.getElementById('telefono').value,
                email: document.getElementById('email').value,
                empresa: document.getElementById('empresa').value,
                select: document.getElementById('select').value,
                descripcion: document.getElementById('descripcion').value,
                'g-recaptcha-response': captchaResponse
            };
            fetch('/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'  // Especifica que el cuerpo es JSON
                },
                body: JSON.stringify(formData)  // Convierte el objeto JavaScript a JSON
            })
            .then(response => response.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: '¡Enviado!',
                    text: data.message,  // Utiliza el mensaje enviado desde el servidor
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/'; // Redirigir a la página de inicio
                    }
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salió mal al enviar el correo!',
                });
            });
        }
    });

    function validateForm() {
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const empresa = document.getElementById('empresa').value;
        const select = document.getElementById('select').value;
        const descripcion = document.getElementById('descripcion').value;

        let errors = [];
        if (nombre.length < 3) {
            errors.push('Nombre completo requerido');
        }
        if (telefono.length < 5) {
            errors.push('Teléfono de contacto válido requerido');
        }
        if (!email.includes('@') || !email.includes('.')) {
            errors.push('Correo válido requerido');
        }
        if (empresa.length < 3) {
            errors.push('Nombre de la empresa requerido');
        }
        if (select === 'Vacio') {
            errors.push('Seleccione una opción');
        }
        if (descripcion.length < 5) {
            errors.push('Descripción requerida');
        }

        return errors;
    }
});
