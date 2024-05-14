document.getElementById('btn_enviar').addEventListener('click', async (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto
    console.log("Esta en alerts");

    let isValid = validateForm();
    let isCaptchaComplete = isRecaptchaCompleted();

    if (!isValid) {
        Swal.fire({
            title: 'Verifique los campos',
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
        document.getElementById('form').submit(); // Envía el formulario si todo está correcto
    }
});

function isRecaptchaCompleted() {
    const response = grecaptcha.getResponse();
    return response !== '';
}

function validateForm() {
    const nom = document.getElementById('inp_nom').value;
    const tel = document.getElementById('inp_number').value;
    const ema = document.getElementById('inp_email').value;
    const emp = document.getElementById('inp_empre').value;
    const com = document.getElementById('combox').value;
    const des = document.getElementById('inp_descri').value;

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
        telefono: /^\d{10,12}$/,
        correo: /^(([a-zA-Z0-9_\s@]+(\.[a-zA-Z0-9_\s@]+)*)|(\”.+\”))@(([a-zA-Z0-9\s@]+\.)+[a-zA-Z\s@\”]{2,4})$/,
        empresa: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
        descripcion: /^[a-zA-ZÀ-ÿ0-9,\s]{1,70}$/,
    };

    let errors = [];
    if (!expresiones.nombre.test(nom) || nom.length < 5) {
        errors.push('Nombre');
    }
    if (!expresiones.telefono.test(tel)) {
        errors.push('Telefono');
    }
    if (!expresiones.correo.test(ema)) {
        errors.push('Correo');
    }
    if (!expresiones.empresa.test(emp) || emp.length < 2) {
        errors.push('Empresa');
    }
    if (com === 'Vacio') {
        errors.push('Selecciona una opcion');
    }
    if (!expresiones.descripcion.test(des) || des.length < 4) {
        errors.push('Descripción');
    }

    return errors.length === 0; // Devuelve true si no hay errores
}
