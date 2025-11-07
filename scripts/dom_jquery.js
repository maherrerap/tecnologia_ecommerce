
// SE USA JQUERY PARA LOS SCRIPTS

// Cuando el documento este listo
// Se ejecuta la siguiente funcion

$(document).ready(function () {
    const cambio = $("#cambio");
    const recarg = $("#recargar");
    const mensaje = $("#btn_mensaje");
    const camb_jquery = $("#cambiar_jquery");
    cambio.hide();
    recarg.hide();
    mensaje.click(function () {

        // Se oculta el contenido original
        camb_jquery.hide();

        // Se muestra el mensaje Enviando...
        cambio.show().text("Enviando...");

        // Se esperan 2 segundos y se muestra el mensaje final
        setTimeout(function () {

            if (cambio.hasClass("alert-warning")) {
                cambio.removeClass("alert-warning")
                    .addClass("alert-success")

            } else {
                cambio.removeClass("alert-success")
                    .addClass("alert-warning")
            }
            cambio.text("Envio completado.");
            recarg.show();
            recarg.click(function () {
                location.reload();
            })

            // Se crea un botón para que pueda volver atrás

        }, 2000);
    })
})


