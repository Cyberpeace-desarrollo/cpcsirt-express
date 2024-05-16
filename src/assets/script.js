//para ahcer el manejos de ventana emergente

//-----modal----
const open2= document.getElementById('open2');
const open= document.getElementById('open');
const open3=document.getElementById('movil-panic');
const modal= document.getElementById('modal_container');
const close = document.getElementById('close');


//--Formulario--
const nombre= document.getElementById('nombre')
const telefono=document.getElementById('telefono')
const correo=document.getElementById('email')
const empresa=document.getElementById('empresa')
const combo=document.getElementById('select')
const descripcion=document.getElementById('descripcion')
let nommax=30,nummax=12,desmax=70,emailmax=40;


//seteo de valores
nombre.maxLength = nommax;
telefono.maxLength = nummax;
correo.maxLength=emailmax;
empresa.maxLength=nommax;
descripcion.maxLength = desmax;


open.addEventListener('click',(event)=>{
    event.preventDefault();
    document.getElementById('g-recaptcha-error').innerHTML=``
    modal.classList.add('show');
});

open2.addEventListener('click',(event)=>{
    event.preventDefault();
    document.getElementById('g-recaptcha-error').innerHTML=``
    modal.classList.add('show');

});

open3.addEventListener('click',(event)=>{
    event.preventDefault();
    document.getElementById('g-recaptcha-error').innerHTML=``
    modal.classList.add('show');
});

close.addEventListener('click',(event)=>{
    event.preventDefault();
    modal.classList.remove('show');
    nombre.value=''; nombre.maxLength = nommax;
    nombre.addEventListener('keyup', (event) => {event.target.style.background="#3a8cc71b";});

    telefono.value=''; telefono.maxLength = nummax;
    telefono.addEventListener('keyup', (event) => {event.target.style.background="#3a8cc71b";});

    correo.value='';correo.maxLength=emailmax;
    correo.addEventListener('keyup', (event) => {event.target.style.background="#3a8cc71b";});

    empresa.value=''; empresa.maxLength = nommax;
    empresa.addEventListener('keyup', (event) => {event.target.style.background="#3a8cc71b";});

    descripcion.value=''; descripcion.maxLength =desmax;
    descripcion.addEventListener('keyup', (event) => {event.target.style.background="#3a8cc71b";});

    document.getElementById('form').reset();
    grecaptcha.reset();
});



//validacion de formulario antes de enviar
const inputs = document.querySelectorAll('#form input');

//declaramos nuestros regex
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	telefono: /^\d{1,12}$/,// 10 a 12 numeros.
    correo: /^(([a-zA-Z0-9_\s@]+(\.[a-zA-Z0-9_\s@]+)*)|(\”.+\”))@(([a-zA-Z0-9\s@]+\.)+[a-zA-Z\s@\”]{2,4})$/,
    correo2: /^[a-zA-Z0-9@.]{1,40}$/,
    empresa: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
    descripcion: /^[a-zA-ZÀ-ÿ0-9,\s]{1,70}$/,
}

/*esta es la nueva version */
//validamos el formulario cada que se escribe una letra en algun input
const validarFormulario = (e)=>{
    switch(e.target.name){
        case'nombre':
            if(expresiones.nombre.test(e.target.value)){
                nombre.maxLength = nommax;
                document.getElementById('nombre').addEventListener('keyup', (event) => {
                    event.target.style.background="#3a8cc71b";
                });  
            }else{    
                let carcateres=document.getElementById('nombre').value.length;          
                nombre.maxLength = carcateres;
                document.getElementById('nombre').addEventListener('keyup', (event) => {
                    event.target.style.background="#BB3311";
                });
            }
            if (e.target.value ==='') {
                nombre.maxLength = nommax;
                nombre.addEventListener('keyup', (event) => {
                    event.target.style.background="#3a8cc71b";
                });
            }
        break;
        case'telefono':
            if(expresiones.telefono.test(e.target.value)){
                telefono.maxLength = nummax;
                document.getElementById('telefono').addEventListener('keyup', (event) => {
                    event.target.style.background="#3a8cc71b";
                });
            }else{
                let carcateres=document.getElementById('telefono').value.length;   
                document.getElementById('telefono').maxLength = carcateres;
                document.getElementById('telefono').addEventListener('keyup', (event) => {
                    event.target.style.background="#BB3311";
                });
            }
            if (e.target.value ==='') {
                telefono.maxLength = nummax;
                document.getElementById('telefono').addEventListener('keyup', (event) => {
                    event.target.style.background="#3a8cc71b";
                });
            }
        break;
        case'email':
            if(expresiones.correo.test(e.target.value)){
                correo.maxLength = emailmax;
                document.getElementById('email').addEventListener('keyup', (event) => {
                    event.target.style.background="#3a8cc71b";
                });
            }else{
                if(expresiones.correo2.test(e.target.value)  || e.target.value===''){
                    document.getElementById('email').maxLength = emailmax;
                    document.getElementById('email').addEventListener('keyup', (event) => {
                        event.target.style.background="#3a8cc71b";
                    });
                }else{
                    let carcateres=document.getElementById('email').value.length;          
                    document.getElementById('email').maxLength = carcateres;
                    document.getElementById('email').addEventListener('keyup', (event) => {
                        event.target.style.background="#BB3311";
                    });
                }    
            }
            if (e.target.value ==='') {
                correo.maxLength = emailmax;
                document.getElementById('email').addEventListener('keyup', (event) => {
                    event.target.style.background="#3a8cc71b";
                });
            }
        break;
        case'empresa':
            if(expresiones.empresa.test(e.target.value)){
                empresa.maxLength = nommax;
                document.getElementById('empresa').addEventListener('keyup', (event) => {
                    event.target.style.background="#3a8cc71b";
                });
            }else{
                let carcateres=document.getElementById('empresa').value.length;          
                document.getElementById('empresa').maxLength = carcateres;
                document.getElementById('empresa').addEventListener('keyup', (event) => {
                    event.target.style.background="#BB3311";
                });
            }
            if (e.target.value ==='') {
                empresa.maxLength = nommax;
                document.getElementById('empresa').addEventListener('keyup', (event) => {
                    event.target.style.background="#3a8cc71b";
                });
            }
        break;
        case'descripcion':
            if(expresiones.descripcion.test(e.target.value)){
                descripcion.maxLength = desmax;
                document.getElementById('descripcion').addEventListener('keyup', (event) => {
                    event.target.style.background="#3a8cc71b";
                });
            }else{
                let carcateres=document.getElementById('descripcion').value.length;          
                document.getElementById('descripcion').maxLength = carcateres;
                document.getElementById('descripcion').addEventListener('keyup', (event) => {
                    event.target.style.background="#BB3311";
                });
            }
            if (e.target.value ==='') {
                descripcion.maxLength = desmax;
                document.getElementById('descripcion').addEventListener('keyup', (event) => {
                    event.target.style.background="#3a8cc71b";
                });
            }
        break;
    }
}

//cilcamos un for por cada input que existe
inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);//va a comprobar los campos cada que se presiona una tecla
    input.addEventListener('blur',validarFormulario);//cada que toquen fuera del formulario
 });//por cada input se ejecuta un codigo    











 