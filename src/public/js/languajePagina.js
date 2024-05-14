const myCheckbox = document.getElementById('myCheckbox');

function myFunction() {
    let x = document.getElementById("tit2");
    let cadena = "EQUIPO DE RESPUESTA A INCIDENTES DE SEGURIDAD";

    if(x.innerHTML === cadena){
        x.innerHTML="SECURITY INCIDENT RESPONSE TEAM";
    }else{
        x.innerHTML = cadena;
    } 

   let y = document.getElementById("t");
   let cadena2 = "Contamos con los conocimientos y experiencia para garantizar una correcta operación de seguridad alineada las mejores prácticas y estándares internacionales al contar con nuestro MDR SOC";
    if(y.innerHTML === cadena2){
        y.innerHTML="We have the knowledge and experience to guarantee a correct security operation aligned with the best practices and international standards with our MDR SOC.";
    }else{
        y.innerHTML = cadena2;
    }


    let cadena3 = "REPORTAR INCIDENTE DE CIBERSEGURIDAD";
    if(document.getElementById("open2").value === cadena3){
        document.getElementById("open2").value = "REPORT CYBERSECURITY INCIDENT";
    }else{
        document.getElementById("open2").value = cadena3;
    }

    let cn3="REPORTAR INCIDENTE DE CIBERSEGURIDAD"
    if(document.getElementById("movil-panic").value===cn3){
        document.getElementById("movil-panic").value = "REPORT CYBERSECURITY INCIDENT";
    }else{
        document.getElementById("movil-panic").value = cn3;
    }

    let cadena4 = "REPORTAR UN INCIDENTE";
    if(document.getElementById("open").value === cadena4){
        document.getElementById("open").value = "REPORT INCIDENT";
    }else{
        document.getElementById("open").value = cadena4;
    }

/*-------------------------MODAL---------------------------------------*/

 
let emer = document.getElementById("emergencia");
let cad = "¿Cuál es su Emergencia?";
if(emer.innerHTML === cad){
    emer.innerHTML = "What´s your emergency";
}else{
    emer.innerHTML = cad;
}

/*Para nombre*/ 
let nomb = document.getElementById("nombre").placeholder;
let cad1 = "Nombre completo";
if(nomb === cad1){
    document.getElementById("nombre").placeholder = "Full name";
}else{
    document.getElementById("nombre").placeholder = cad1;
}

let tel = document.getElementById("telefono").placeholder;
let cad2 = "Telefono de contacto";
if(tel === cad2){
    document.getElementById("telefono").placeholder = "Contact number";
}else{
    document.getElementById("telefono").placeholder = cad2;
}

/*Para email*/ 
let email = document.getElementById("email").placeholder;
let cad3 = "Correo";
if(email === cad3){
    document.getElementById("email").placeholder = "Email";
}else{
    document.getElementById("email").placeholder = cad3;
}

let empre = document.getElementById("empresa").placeholder;
let cad4 = "Nombre de la empresa";
if(empre === cad4){
    document.getElementById("empresa").placeholder = "Name of company";
}else{
    document.getElementById("empresa").placeholder = cad4;
}

let descri = document.getElementById("descricion").placeholder;
let cad5 = "Descripcion";
if(descri === cad5){
    document.getElementById("descricion").placeholder = "Description";
}else{
    document.getElementById("descricion").placeholder = cad5;
}



let btn = document.getElementById("btn_enviar").innerHTML;
let cad6 = "Enviar";
if(btn === cad6){
    document.getElementById("btn_enviar").innerHTML = "Send";
}else{
    document.getElementById("btn_enviar").innerHTML = cad6;
}


let btncl = document.getElementById("close").innerHTML;
let cad7 = "Cerrar";
if(btncl === cad7){
    document.getElementById("close").innerHTML = "Close";
}else{
    document.getElementById("close").innerHTML = cad7;
}


/*Opcion 1*/

let opc1 = document.getElementById("opcion1").innerHTML;
let cad8 = "Elija una Opción";
if(opc1 === cad8){
    document.getElementById("opcion1").innerHTML = "Choose an option";
}else{
    document.getElementById("opcion1").innerHTML = cad8;
}

/*Opcion2*/ 
let opc2 = document.getElementById("opcion2").innerHTML;
let cad9 = "Exfiltración de información";
if(opc2 === cad9){
    document.getElementById("opcion2").innerHTML = "Information exfiltration";
}else{
    document.getElementById("opcion2").innerHTML = cad9;
}

/*Opcion3*/
let opc3 = document.getElementById("opcion3").innerHTML;
let cad10 = "Otro";
if(opc3 === cad10){
    document.getElementById("opcion3").innerHTML = "Other";
}else{
    document.getElementById("opcion3").innerHTML = cad10;
}

/*Inicia traduccion de la SECCION1-------------------------------*/ 
let c1 = document.getElementById("tituloSec1").innerHTML;
let c2 = "¿QUIÉNES SOMOS?";
    if(c1 === c2){
        document.getElementById("tituloSec1").innerHTML = "¿WHO ARE WE?";
    }else{
        document.getElementById("tituloSec1").innerHTML = c2;
    }


    let c3 = document.getElementById("sec2parrafo").innerHTML;
    let c4 = 'Somos un equipo especializado de <span id="title_blue">Cyberpeace</span> que cuenta con las capacidades y habilidades técnicas necesarias para la investigación de amenazas y respuesta a incidentes cibernéticos.';
    if(c3 === c4){
        document.getElementById("sec2parrafo").innerHTML = 'We are a specialized <span id="title_blue">Cyberpeace team</span> that has the skills and technical skills needed to investigate threats and respond to cyber incidents.';
    }else{
        document.getElementById("sec2parrafo").innerHTML = c4;
    }


    let c5 = document.getElementById("sec2parrafo2").innerHTML;
    let c6 = 'Con base en ello, el <span id="title_blue">Cyberpeace CSIRT</span> unit provee a nuestros clientes y a las empresas que asi lo requieran, una respuesta inmediata y profesional ante cualquier situación de amenaza o crisis cibernética.';
    if(c5 === c6){
        document.getElementById("sec2parrafo2").innerHTML = 'Based on this, the <span id="title_blue">Cyberpeace CSIRT</span> unit provides our clients and companies that require it, an immediate and professional response to any cyber threat or crisis.';
    }else{
        document.getElementById("sec2parrafo2").innerHTML = c6;
    }

   /*Tarjetas*/  
   
   let t1 = document.getElementById("sec2par").innerHTML;
   let t2 = 'Evite el impacto de amenazas conocidas anticipandose a ellas.';
   if(t1 === t2){
       document.getElementById("sec2par").innerHTML = 'Avoid the impact of known threats by anticipating them.';
   }else{
    document.getElementById("sec2par").innerHTML = t2;
    }

    let t3 = document.getElementById("sec2par1").innerHTML;
    let t4 = 'Encuentre apt que pasen desapercibidas y expongalas.';
    if(t3 === t4){
        document.getElementById("sec2par1").innerHTML = 'Find apts that go unnoticed and expose them.';
    }else{
     document.getElementById("sec2par1").innerHTML = t4;
    }
    
    let t5 = document.getElementById("sec2par2").innerHTML;
    let t6 = 'Monitoreo en tiempo real centralizado de todos sus dispositivos.';
    if(t5 === t6){
        document.getElementById("sec2par2").innerHTML = 'Centralized real-time monitoring of all your devices.';
    }else{
     document.getElementById("sec2par2").innerHTML = t6;
    }

    let t7 = document.getElementById("sec2par3").innerHTML;
    let t8 = 'Respuesta y manejo de incidentes.';
    if(t7 === t8){
        document.getElementById("sec2par3").innerHTML = 'Response and incident management.';
    }else{
     document.getElementById("sec2par3").innerHTML = t8;
    }

    let t9 = document.getElementById("sec2par4").innerHTML;
    let t10 = 'Recuperación, mitigación de vulnerabilidades y hardening.';
    if(t9 === t10){
        document.getElementById("sec2par4").innerHTML = 'Recovery, mitigation of vulnerabilities and hardening.';
    }else{
     document.getElementById("sec2par4").innerHTML = t10;
    }

    let t11 = document.getElementById("sec2par5").innerHTML;
    let t12 = 'Estrategias de soporte en el manejo de incidentes.';
    if(t11 === t12){
        document.getElementById("sec2par5").innerHTML = 'Support strategies in incident management.';
    }else{
     document.getElementById("sec2par5").innerHTML = t12;
    }

    let t13 = document.getElementById("conmitit").innerHTML;
    let t14 = 'Misión';
    if(t13 === t14){
        document.getElementById("conmitit").innerHTML = 'Mission';
    }else{
     document.getElementById("conmitit").innerHTML = t14;
    }


    let t15 = document.getElementById("eticonte").innerHTML;
    let t16 = 'Contribuir a crear un entorno de prevención eficiente para nuestros clientes ante la creciente aparición de amenazas en el ciber espacio que buscan materializarse y lograr afectaciones severas en las infraestructuras.';
    if(t15 === t16){
        document.getElementById("eticonte").innerHTML = 'Contribute to creating an efficient prevention environment for our clients in the face of the growing emergence of threats in cyberspace that seek to materialize and achieve severe impacts on infrastructures.';
    }else{
     document.getElementById("eticonte").innerHTML = t16;
    }

    let t17 = document.getElementById("convitit").innerHTML;
    let t18 = 'Visión';
    if(t17 === t18){
        document.getElementById("convitit").innerHTML = 'Vision';
    }else{
     document.getElementById("convitit").innerHTML = t18;
    }

    let t19 = document.getElementById("eticonte1").innerHTML;
    let t20 = 'Ser la mejor unidad de respuesta a incidentes reconocida por nuestros clientes y socios de negocio.';
    if(t19 === t20){
        document.getElementById("eticonte1").innerHTML = 'To be the best incident response unit recognized by our clients and business partners';
    }else{
     document.getElementById("eticonte1").innerHTML = t20;
    }

    let t21 = document.getElementById("sec3tit").innerHTML;
    let t22 = 'NUESTROS SERVICIOS';
    if(t21 === t22){
        document.getElementById("sec3tit").innerHTML = 'OUR SERVICES';
    }else{
     document.getElementById("sec3tit").innerHTML = t22;
    }
    
    let cir1 = document.getElementById("cirtit").innerHTML;
    let cir2 = 'RESPUESTA A INCIDENTES CIBERNÉTICOS';
    if(cir1 === cir2){
        document.getElementById("cirtit").innerHTML = 'RESPONSE TO CYBER INCIDENTS';
    }else{
     document.getElementById("cirtit").innerHTML = cir1;
    }

    let cir3 = document.getElementById("cirtit1").innerHTML;
    let cir4 = 'GESTIÓN DE AMENAZAS';
    if(cir3 === cir4){
        document.getElementById("cirtit1").innerHTML = 'THREAT MANAGEMENT';
    }else{
     document.getElementById("cirtit1").innerHTML = cir4;
    }

    let cir5 = document.getElementById("cirtit2").innerHTML;
    let cir6 = 'COLABORACIÓN';
    if(cir5 === cir6){
        document.getElementById("cirtit2").innerHTML = 'COLLABORATION';
    }else{
     document.getElementById("cirtit2").innerHTML = cir6;
    }

    let cir7 = document.getElementById("cirtit3").innerHTML;
    let cir8 = 'CAPACITACIÓN';
    if(cir7 === cir8){
        document.getElementById("cirtit3").innerHTML = 'TRAINING';
    }else{
     document.getElementById("cirtit3").innerHTML = cir8;
    }



    let t25 = document.getElementById("list").innerHTML;
    let t26 = '• Análisis de malware';
    if(t25 === t26){
        document.getElementById("list").innerHTML = 'Malware analysis';
    }else{
     document.getElementById("list").innerHTML = t26;
    }

    let t27 = document.getElementById("list1").innerHTML;
    let t28 = '• Análisis forense como respuesta a incidentes';
    if(t27 === t28){
        document.getElementById("list1").innerHTML = 'Forensic analysis in response to incidents';
    }else{
     document.getElementById("list1").innerHTML = t28;
    }

    let t29 = document.getElementById("list2").innerHTML;
    let t30 = '• Detección, contención y erradicación de amenazas';
    if(t29 === t30){
        document.getElementById("list2").innerHTML = 'Detection, containment and eradication of threats';
    }else{
     document.getElementById("list2").innerHTML = t28;
    }

    let t31 = document.getElementById("list3").innerHTML;
    let t32 = '• Cacería de amenazas';
    if(t31 === t32){
        document.getElementById("list3").innerHTML = 'Threat hunting';
    }else{
     document.getElementById("list3").innerHTML = t32;
    }

    let t33 = document.getElementById("list4").innerHTML;
    let t34 = '• Ejercicios de emulación de amenazas';
    if(t33 === t34){
        document.getElementById("list4").innerHTML = 'Threat emulation exercises';
    }else{
     document.getElementById("list4").innerHTML = t34;
    } 


    let t35 = document.getElementById("list5").innerHTML;
    let t36 = '• Elaboración de ttps e inteligencia de amenazas';
    if(t35 === t36){
        document.getElementById("list5").innerHTML = 'Development of ttps and threat intelligence';
    }else{
     document.getElementById("list5").innerHTML = t36;
    } 
    
    let t37 = document.getElementById("list6").innerHTML;
    let t38 = '• Mapeo de vectores de ataques cibernéticos';
    if(t37 === t38){
        document.getElementById("list6").innerHTML = 'Mapping of vectors of cyberattacks';
    }else{
     document.getElementById("list6").innerHTML = t38;
    } 

    let t39 = document.getElementById("list7").innerHTML;
    let t40 = '• Boletines de seguridad';
    if(t39 === t40){
        document.getElementById("list7").innerHTML = 'Security bulletins';
    }else{
     document.getElementById("list7").innerHTML = t40;
    } 

    let t41 = document.getElementById("list8").innerHTML;
    let t42 = '• Cursos de capacitación en respuesta a incidentes';
    if(t41 === t42){
        document.getElementById("list8").innerHTML = 'Incident response training courses ';
    }else{
     document.getElementById("list8").innerHTML = t42;
    } 

    let t43 = document.getElementById("list9").innerHTML;
    let t44 = '• Cursos en análisis de artefactos';
    if(t43 === t44){
        document.getElementById("list9").innerHTML = 'Courses in artifact analysis';
    }else{
     document.getElementById("list9").innerHTML = t44;
    } 

    let t45 = document.getElementById("list10").innerHTML;
    let t46 = '• Cursos de realización planes de respuesta a incidentes';
    if(t45 === t46){
        document.getElementById("list10").innerHTML = 'Courses on incident response plans';
    }else{
     document.getElementById("list10").innerHTML = t46;
    } 
	 



    let n1 = document.getElementById("sec4tit").innerHTML;
    let n2 = 'NUESTRA PRESENCIA';
    if(n1 === n2){
        document.getElementById("sec4tit").innerHTML = 'OUR PRESENCE';
    }else{
     document.getElementById("sec4tit").innerHTML = n2;
    }

    let n3 = document.getElementById("sec5tit1").innerHTML;
    let n4 = 'SUCURSALES';
    if(n3 === n4){
        document.getElementById("sec5tit1").innerHTML = 'BRANCHES';
    }else{
     document.getElementById("sec5tit1").innerHTML = n4;
    }

    let n5 = document.getElementById("sec5tit2").innerHTML;
    let n6 = 'ACERCA DE CYBERPEACE';
    if(n5 === n6){
        document.getElementById("sec5tit2").innerHTML = 'ABOUT CYBERPEACE';
    }else{
     document.getElementById("sec5tit2").innerHTML = n6;
    }

    let n7 = document.getElementById("sec5tit3").innerHTML;
    let n8 = 'CONTACTO';
    if(n7 === n8){
        document.getElementById("sec5tit3").innerHTML = 'CONTACT';
    }else{
     document.getElementById("sec5tit3").innerHTML = n8;
    }
    

    
    let la1 = document.getElementById("a1").innerHTML;
    let la2 = 'Acerca de nosotros';
    if(la1 === la2){
        document.getElementById("a1").innerHTML = 'About us';
    }else{
     document.getElementById("a1").innerHTML = la2;
    } 
	 
    let la3 = document.getElementById("a2").innerHTML;
    let la4 = 'Derechos arco';
    if(la3 === la4){
        document.getElementById("a2").innerHTML = 'ARCO rights';
    }else{
     document.getElementById("a2").innerHTML = la4;
    } 

    let la5 = document.getElementById("a3").innerHTML;
    let la6 = 'Aviso de privacidad';
    if(la5 === la6){
        document.getElementById("a3").innerHTML = 'Privacy notice';
    }else{
     document.getElementById("a3").innerHTML = la6;
    } 

    let la7 = document.getElementById("a4").innerHTML;
    let la8 = 'Politica de seguridad';
    if(la7 === la8){
        document.getElementById("a4").innerHTML = 'Security policy';
    }else{
     document.getElementById("a4").innerHTML = la8;
    }
}

myCheckbox.addEventListener('click', myFunction);