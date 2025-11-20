// Validación HTML5 + flujo visual con jQuery y Bootstrap
$(document).ready(function () {
    const $form    = $("#contact-form");
    const $wrapper = $("#cambiar_jquery"); // contenedor que oculta el formulario
    const $status  = $("#cambio");         // alerta de estado (Enviando... / Éxito)
    const $reload  = $("#recargar");       // botón "Enviar otra Solicitud"

    if ($form.length === 0) return;

    // Estado inicial
    $status.hide();
    $reload.hide();

    // Recargar para enviar otra solicitud
    $reload.on("click", function () {
        location.reload();
    });

    // SUBMIT con validación nativa HTML5
    $form.on("submit", function (e) {
        // Validación nativa del navegador
        if (!$form[0].checkValidity()) {
            e.preventDefault();
            $form.addClass("was-validated");
            $form[0].reportValidity();
            return;
        }

        // Validación correcta
        e.preventDefault();
        $form.addClass("was-validated");

        // Ocultar el formulario y mostrar flujo "Enviando..."
        $wrapper.fadeOut(300, function () {
            $status
                .removeClass("alert-success alert-warning")
                .addClass("alert alert-warning text-center")
                .text("Enviando formulario...")
                .fadeIn(200);

            // Simulación de envío (2 segundos) -> Mensaje de éxito
            setTimeout(function () {
                $status
                    .removeClass("alert-warning")
                    .addClass("alert-success")
                    .text("Formulario enviado con éxito");

                // Mostrar botón para nueva solicitud
                $reload.fadeIn(200);

                // Reset form para un siguiente envío
                $form[0].reset();
                $form.removeClass("was-validated");
                $form.find("input, textarea").removeClass("is-valid is-invalid");
            }, 2000);
        });
    });
});