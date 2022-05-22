function botonEnviar() {

    //VALORES
    names = document.getElementById("names").value;
    email = document.getElementById("correo").value;
    mensajes = document.getElementById("mensaje").value;
    //ERROR
    errores = '';
    // VALIDACION DE NOMBRE----
    if (names == '' || !isNaN(names)) {
        errores += "<p><i class='fa-solid fa-xmark'></i>Escriba un nombre</p>"
        document.getElementById("names").style.borderBottomColor = "red";
    } else {
        document.getElementById("names").style.borderBottomColor = "#d1d1d1";
    }
    //VALIDACION DE EMAIL----

    if (email == '' || !isNaN(email)) {
        errores += "<p><i class='fa-solid fa-xmark'></i>Ingrese un correo</p>"
        document.getElementById("correo").style.borderBottomColor = "red";
    } else {
        document.getElementById("correo").style.borderBottomColor = "#d1d1d1"
    }

    /*==========
    AQUI INTENTE DE VARIAS FORMAS HACER LA VALIDACION POR EMAIL PERO SIGO SIN LOGRARLO Y YA HE VISTO VARIOS TUTORIALES
    ============

    function validarCorreo(correo) {
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(correo);
        if (esValido == true) {
            alert('Es valido');
        } else {
            alert('No valido')
        }
    }
    validarCorreo()*/

    //VALIDACION DE MENSAJE----
    if (mensajes == '') {
        errores += "<p><i class='fa-solid fa-xmark'></i>Escriba un mensaje</p>"
        document.getElementById("mensaje").style.borderBottomColor = "red";
    } else {
        document.getElementById("mensaje").style.borderBottomColor = "#d1d1d1"
    }
    //CARTEL DE ERROR----
    if (errores == '' == false) {
        var cartelError = '<div id="ventanaErrores">' +
            '<div class="mensajesError">' +
            '<h3>Errores encontrados</h3>' + errores + '<button id="btnCerrar" onclick="botonCerrar()" >Cerrar</button>' +
            '</div>' +
            '</div>'

        var imprimeCartel = document.createElement('div');
        imprimeCartel.innerHTML = cartelError;
        document.body.appendChild(imprimeCartel);
    }


}
//BOTON DE CERRAR----
function botonCerrar() {
    const element = document.getElementById("ventanaErrores");
    element.remove();
}