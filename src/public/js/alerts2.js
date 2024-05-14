document.addEventListener('DOMContentLoaded', function () {
    const btn_env = document.getElementById('btn_enviar');
    btn_env.addEventListener('click', async (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto
        let errors = validateForm();
        let isCaptchaComplete = isRecaptchaCompleted();

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
        } else if (!isCaptchaComplete) {
            document.getElementById('g-recaptcha-error').innerHTML = `<span style="color:red;">reCAPTCHA no completado</span>`;
        } else {
            document.getElementById('g-recaptcha-error').innerHTML = `<span style="color:green;">reCAPTCHA completado</span>`;
            document.getElementById('form').submit(); 
        }
    });

    function isRecaptchaCompleted() {
        const response = grecaptcha.getResponse();
        return response !== '';
    }

    function validateForm() {
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const empresa = document.getElementById('empresa').value;
        const select = document.getElementById('select').value;
        const descripcion = document.getElementById('descripcion').value;

        const expresiones = {
            nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
            telefono: /^\d{10,12}$/,
            correo: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            empresa: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
            descripcion: /^[a-zA-ZÀ-ÿ0-9,\s]{1,70}$/,
        };

        let errors = [];
        if (!expresiones.nombre.test(nombre) || nombre.length < 5) {
            errors.push('Nombre');
        }
        if (!expresiones.telefono.test(telefono)) {
            errors.push('Teléfono');
        }
        if (!expresiones.correo.test(email)) {
            errors.push('Correo');
        }
        if (!expresiones.empresa.test(empresa) || empresa.length < 2) {
            errors.push('Empresa');
        }
        if (select === 'Vacio') {
            errors.push('Selecciona una opción');
        }
        if (!expresiones.descripcion.test(descripcion) || descripcion.length < 4) {
            errors.push('Descripción');
        }

        return errors;
    }
});