
function valida_envia() {
           
    if (document.fvalida.nombre.value.length == 0) {
        alert("Por favor, introduzca su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }

    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value = edad
    
    if (edad == "") {
        alert("Por favor, introduzca su edad.")
        document.fvalida.edad.focus()
        return 0;
    } else {
        if (edad < 18) {
            alert("Debe ser mayor de 18 años.")
            document.fvalida.edad.focus()
            return 0;
        }
    }

    if (document.fvalida.destino.selectedIndex == 0) {
        alert("Debe seleccionar su destino de interés.")
        document.fvalida.destino.focus()
        return 0;
    }

    if (document.fvalida.mail.value.length == 0) {
        alert("Por favor, introduzca su e-mail")
        document.fvalida.mail.focus()
        return 0;
    }

    if (document.fvalida.comentarios.value.length == 0) {
        alert("No te olvides de contarnos en qué podemos ayudarte!")
        document.fvalida.comentarios.focus()
        return 0;
    }

    alert("Muchas gracias por enviar el formulario. Nos contactaremos a la brevedad.");
    document.fvalida.submit();
}

function validarEntero(valor) {
    valor = parseInt(valor)

    if (isNaN(valor)) {
        return ""
    } else {
        return valor
    }
}