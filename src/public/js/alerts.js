const btn_env=document.getElementById('btn_enviar');

btn_env.addEventListener('click',(event)=>{
    let val='',ban=false;
    event.preventDefault(); // Evita el envío del formulario por defecto
    handleSubmit()
    //desc()
    function isRecaptchaCompleted() {
        const response = grecaptcha.getResponse();
        return response !== '';
    }
    function handleSubmit() {
        if (isRecaptchaCompleted()) {
            document.getElementById('g-recaptcha-error').innerHTML = `<span style="color:green;">reCAPTCHA completado</span>`; 
            ban=false;  
        } else {
            document.getElementById('g-recaptcha-error').innerHTML = `<span style="color:red;">reCAPTCHA no completado</span>`;
            ban=true;
        }
    }
     /** validaciones del formulario y alertas */
    async function desc(){
         const nom=document.getElementById('inp_nom').value
         const tel=document.getElementById('inp_number').value
         const ema=document.getElementById('inp_email').value
         const emp=document.getElementById('inp_empre').value
         const com=document.getElementById('combox').value
         const des=document.getElementById('inp_descri').value

         const expresiones = {
             nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
             telefono: /^\d{10,12}$/,// 10 a 12 numeros.
             correo: /^(([a-zA-Z0-9_\s@]+(\.[a-zA-Z0-9_\s@]+)*)|(\”.+\”))@(([a-zA-Z0-9\s@]+\.)+[a-zA-Z\s@\”]{2,4})$/,
             correo2: /^[a-zA-Z0-9@.]{1,40}$/,
             empresa: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
             descripcion: /^[a-zA-ZÀ-ÿ0-9,\s]{1,70}$/,
         }
             if(!expresiones.nombre.test(nom) || nom.length<5){
                 val=val+'\n'+'Nombre';
                 ban=true;
             }
             if(!expresiones.telefono.test(tel)){
                 val=val+'\n'+'Telefono';
                 ban=true;
             }
             if(!expresiones.correo.test(ema)){
                 val=val+'\n'+'Correo';
                 ban=true;
             }
             if(!expresiones.empresa.test(emp) || emp.length<2){
                 val=val+'\n'+'Empresa';
                 ban=true;
             }
             if(com==='Vacio'){
                 val=val+'\n'+'Selecciona una opcion';
                 ban=true;
             }
             if(!expresiones.descripcion.test(des) || des.length<4){
                 val=val+'\n'+'Descripción';
                 ban=true;
             }
             if(ban===true){
                 Swal.fire({
                     title:`Verfique los campos \n${val}`,
                     icon:'error',
                     showConfirmButton:false,
                     toast:true,
                     position:'top',
                     timer:6000,
                     timerProgressBar:true,
                 });
             }
             if(ban===false){
                 function isRecaptchaCompleted() {
                     const response = grecaptcha.getResponse();
                     return response !== '';
                 }
                 
                 // Función para manejar el evento de envío del formulario
                 let form = document.getElementById('form');
                 form.submit();
             }
     } 
        
      
})