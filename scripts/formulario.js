$(document).ready(function () {

    const $form    = $("#contact-form");
    const $wrapper = $("#cambiar_jquery");
    const $status  = $("#cambio");
    const $reload  = $("#recargar");

    if ($form.length === 0) return;

    // Estado inicial
    $status.hide();
    $reload.hide();

    // Función para marcar errores visualmente
    function marcarError($campo, mensaje) {
        $campo.addClass("is-invalid");
        $campo.next(".invalid-feedback").remove(); // evita duplicados
        $campo.after(`<div class="invalid-feedback">${mensaje}</div>`);
    }

    // Limpia el estado visual de un campo
    function limpiarCampo($campo) {
        $campo.removeClass("is-invalid is-valid");
        $campo.next(".invalid-feedback").remove();
    }

    // Validación principal SOLO CON JS
    function validarFormulario() {

        let nombre   = $("#firstName");
        let apellido = $("#lastName");
        let email    = $("#email");
        let telefono = $("#phone");
        let mensaje  = $("#message");

        // Regex
        const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        const telRegex   = /^09[0-9]{8}$/;

        let valido = true;

        limpiarCampo(nombre);
        let nombreVal = nombre.val().trim().replace(/\s+/g, " ");
        if (nombreVal === "" || !soloLetras.test(nombreVal)) {
            marcarError(nombre, "El nombre solo puede contener letras.");
            valido = false;
        } else {
            nombre.addClass("is-valid");
        }

        limpiarCampo(apellido);
        let apellidoVal = apellido.val().trim().replace(/\s+/g, " ");
        if (apellidoVal === "" || !soloLetras.test(apellidoVal)) {
            marcarError(apellido, "El apellido solo puede contener letras.");
            valido = false;
        } else {
            apellido.addClass("is-valid");
        }

        limpiarCampo(email);
        let emailVal = email.val().trim();
        if (!emailVal.includes("@") || !emailVal.includes(".")) {
            marcarError(email, "Ingresa un correo válido con @ y dominio.");
            valido = false;
        } else {
            email.addClass("is-valid");
        }

        limpiarCampo(telefono);
        let telVal = telefono.val().trim();
        if (!telRegex.test(telVal)) {
            marcarError(telefono, "Debe iniciar con 09 y tener 10 dígitos.");
            valido = false;
        } else {
            telefono.addClass("is-valid");
        }

        limpiarCampo(mensaje);
        let msgVal = mensaje.val().trim();
        if (msgVal.length < 10) {
            marcarError(mensaje, "Debe contener al menos 10 caracteres.");
            valido = false;
        } else {
            mensaje.addClass("is-valid");
        }

        return valido;
    }

    // Botón de nueva solicitud
    $reload.on("click", function () {
        location.reload();
    });

    // Envío del formulario
    $form.on("submit", function (e) {

        e.preventDefault(); // SIEMPRE evitamos el envío real

        if (!validarFormulario()) {
            return; // no continúa si hay errores
        }

        // Oculta formulario → muestra “Enviando…”
        $wrapper.fadeOut(300, function () {

            $status
                .removeClass("alert-success alert-warning")
                .addClass("alert alert-warning text-center")
                .text("Enviando formulario...")
                .fadeIn(250);

            // Simulación de envío (2 seg)
            setTimeout(function () {

                $status
                    .removeClass("alert-warning")
                    .addClass("alert-success")
                    .text("Formulario enviado con éxito");

                $reload.fadeIn(200);

                // Limpieza del formulario
                $form[0].reset();
                $form.find("input, textarea").removeClass("is-valid is-invalid");
                $form.find(".invalid-feedback").remove();

            }, 2000);
        });
    });
});