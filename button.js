//function mostrarPorConsola() {
//     var nombre = document.getElementById("nombre").value;
//     if (nombre == '') {
//         console.log('Error');
//     }
//     console.log(nombre);
// }
/*
function botonEnviar() {
    //VALORES
    names = document.getElementById("names").value;
    email = document.getElementById("email").value;
    correo = document.getElementById("email").value;
    mensajes = document.getElementById("mensaje").value;
    //ERROR
    errores = '';
    // VALIDACION DE NOMBRE----
    if (names == '') {
        errores += "<p>Escriba un nombre</p>"
    }
    //VALIDACION DE EMAIL----
    if (email == '' || ) {
        errores += "<p>Ingrese un correo electrónico</p>"
    }

    function buscaElArroba() {
        for (x in correo) {
            if (correo[x] == "@") {
                console.log("Valido")
            } else {
                console.log("No valido")
            }
        }
    }
    //VALIDACION DE MENSAJE----
    if (mensajes == '') {
        errores += "<p>Escriba un mensaje</p>"
    }
    //CARTEL DE ERROR----
    if (errores == '' == false) {
        var cartelError = '<div id="ventanaErrores">' +
            '<div class="mensajesError">' +
            '<h3>Errores encontrados</h3>' + errores +
            '</div>' + '<button onclick="botonCerrar()" id="btnCerrar">Cerrar</button>' +
            '</div>'

        var imprimeCartel = document.createElement('div');
        imprimeCartel.innerHTML = cartelError;
        document.body.appendChild(imprimeCartel);
    }


}

function botonCerrar() {
    const element = document.getElementById("ventanaErrores");
    element.remove();
}
*/

/*email = document.getElementById("email").value;*/


/*function botonEnviar() {

    correo = document.getElementById("email2").value;

    /*function buscaElArroba() {
        for (x in correo) {
            if (correo[x] == "@") {
                console.log("valido")
            } else {
                continue
            }
            return correo;
        }

    }*/

/* gmail = "gmail.com"
 hotmail = "hotmail.com"
 yahoo = "yahoo.com.ar"
 outlook = "outlook.com"
 tipoCorreo = [gmail, hotmail, yahoo, outlook]

 function buscaElGmail() {
     /*for (a in correo) {
         if (correo[a] == tipoCorreo) {
             console.log('tiene gmail')
         } else {
             console.log("error")
         }
     }*/
/* for (x in tipoCorreo) {
     return x
 }
 if (correo == tipoCorreo[x]) {
     console.log('tiene gmail')
 } else {
     console.log("error")

 }
 return correo*/
/*
        switch (correo) {
            case tipoCorreo[0]:
                console.log('Correcto');
                break;
            case tipoCorreo[1]:
                console.log('Correcto');
                break;
            case tipoCorreo[2]:
                console.log('Correcto');
                break;
            case tipoCorreo[3]:
                console.log('Correcto');
                break;
            default:
                console.log("Error");
        }*/


//buscaElGmail()
//console.log(correo.search(tipoCorreo))

/*mailConArroba = buscaElArroba();
console.log(mailConArroba)
if (correo == '' || mailConArroba) {
    console.log("funcionó")
    alert("funciono")
} else {
    alert("ingresa un correo valido")
}*/
/*function llamarBoton() {
    function validarCorreo(correo) {
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(correo);
        if (esValido == true) {
            alert('Es valido');
        } else {
            alert('No valido')
        }
    }
    validarCorreo()

}*/

juli = "julian.favotto@gmail.com"

function llamarBoton() {
    num = document.getElementById("numero").value;
    parseInt(num);
    console.log(num);
    if (num == '' || isNaN(num)) {
        console.log("No es un numero")
    } else {
        console.log("es una numero")
    }
}