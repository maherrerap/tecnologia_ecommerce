// SE USA JQUERY PARA LOS SCRIPTS

// Cuando el documento este listo
// Se ejecuta la siguiente funcion

$(document).ready(function () {
    $("#cambio").hide();
    $("#btn_mensaje").click(function () {

        // Se oculta el contenido original
        $("#cambiar_jquery").hide();

        // Se muestra el mensaje Enviando...
        $("#cambio").show().text("Enviando...");

        // Se esperan 2 segundos y se muestra el mensaje final
        setTimeout(function () {
            const mensaje = $("#cambio");

            if (mensaje.hasClass("alert-warning")) {
                mensaje.removeClass("alert-warning")
                    .addClass("alert-success")

            } else {
                mensaje.removeClass("alert-success")
                    .addClass("alert-warning")
            }
            $("#cambio").text("Envio completado.");
        }, 2000);
    })
})


$(document).ready(function () {
    INTERACTIVIDAD
});