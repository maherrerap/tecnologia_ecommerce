// login.js

$(document).ready(function () {
    const $form   = $("#login-form");
    const $user   = $("#username");
    const $pass   = $("#password");

    // Creamos dinámicamente los elementos de estado (para no tocar el HTML)
    const $status = $('<div id="login-status" class="alert text-center" role="alert" style="display:none; margin-top:1rem;"></div>');
    const $reload = $('<button id="login-reload" class="btn btn-primary" style="display:none; margin-top:0.75rem;">Volver a intentar</button>');

    // Insertarlos justo después del formulario
    $form.after($status);
    $status.after($reload);

    // Estado inicial
    $status.hide();
    $reload.hide();

    // Botón para "volver a intentar" (resetea el formulario)
    $reload.on("click", function () {
        $form[0].reset();
        $form.removeClass("was-validated");
        $status.fadeOut(150);
        $reload.fadeOut(150);
        $user.focus();
    });

    if ($form.length === 0) return;

    // Credenciales provisionales aceptadas
    const VALID_USER = "usuario1234";
    const VALID_PASS = "contra1234";

    $form.on("submit", function (e) {
        // Validación nativa HTML5
        if (!$form[0].checkValidity()) {
            e.preventDefault();
            $form.addClass("was-validated");
            $form[0].reportValidity();
            return;
        }

        e.preventDefault();
        $form.addClass("was-validated");

        // Mostrar estado "Verificando credenciales"
        $status
            .removeClass("alert-success alert-danger")
            .addClass("alert-warning")
            .text("Verificando credenciales...")
            .fadeIn(150);

        // Deshabilitar inputs y botón para evitar reenvíos durante la "verificación"
        $form.find("input, button").prop("disabled", true);

        // Simulación asincrónica de verificación (2s)
        setTimeout(function () {
            const userVal = String($user.val()).trim();
            const passVal = String($pass.val()).trim();

            if (userVal === VALID_USER && passVal === VALID_PASS) {
                // Éxito
                $status
                    .removeClass("alert-warning")
                    .addClass("alert-success")
                    .text("Inicio de sesión exitoso. Redirigiendo...");

                // Espera breve y redirige a portada.html
                setTimeout(function () {
                    window.location.href = "../pages/portada.html";
                }, 1500);
            } else {
                // Credenciales incorrectas
                $status
                    .removeClass("alert-warning")
                    .addClass("alert-danger")
                    .text("Credenciales incorrectas. Revisa usuario y contraseña.");

                // Rehabilitar inputs para nuevo intento
                $form.find("input, button").prop("disabled", false);
                $reload.fadeIn(150);
            }
        }, 2000);
    });
});
