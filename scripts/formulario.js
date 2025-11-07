document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const inputs = {
        firstName: form.querySelector("#firstName"),
        lastName: form.querySelector("#lastName"),
        email: form.querySelector("#email"),
        phone: form.querySelector("#phone"),
        message: form.querySelector("#message"),
    };

    // Expresiones regulares básicas
    const patterns = {
        name: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,40}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^(\+593|0)[0-9\s]{8,12}$/,
    };

    // Limpia los mensajes nativos para usar los nuestros
    Object.values(inputs).forEach(input => {
        input.addEventListener("input", () => {
            input.setCustomValidity("");
            input.classList.remove("is-invalid", "is-valid");
        });
    });

    // Escucha el envío
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // evita recargar

        let isValid = true;

        // === Validar nombre ===
        if (!patterns.name.test(inputs.firstName.value.trim())) {
            inputs.firstName.setCustomValidity("Por favor, ingresa un nombre válido.");
            inputs.firstName.classList.add("is-invalid");
            isValid = false;
        }

        // === Validar apellido ===
        if (!patterns.name.test(inputs.lastName.value.trim())) {
            inputs.lastName.setCustomValidity("Por favor, ingresa un apellido válido.");
            inputs.lastName.classList.add("is-invalid");
            isValid = false;
        }

        // === Validar correo ===
        if (!patterns.email.test(inputs.email.value.trim())) {
            inputs.email.setCustomValidity("Por favor, ingresa un correo válido.");
            inputs.email.classList.add("is-invalid");
            isValid = false;
        }

        // === Validar teléfono ===
        if (!patterns.phone.test(inputs.phone.value.trim())) {
            inputs.phone.setCustomValidity("Por favor, ingresa un número válido (ej. +593 99 999 9999).");
            inputs.phone.classList.add("is-invalid");
            isValid = false;
        }

        // === Validar mensaje ===
        if (inputs.message.value.trim().length < 10) {
            inputs.message.setCustomValidity("Por favor, escribe al menos 10 caracteres.");
            inputs.message.classList.add("is-invalid");
            isValid = false;
        }

        // === Mostrar errores nativos del navegador ===
        if (!isValid) {
            form.reportValidity(); // activa las burbujas nativas (HTML5)
            return;
        }

        // === Si todo es válido ===
        Object.values(inputs).forEach(i => i.classList.add("is-valid"));
        <!-- alert("¡Formulario enviado correctamente!\n(En una versión futura se enviará a la base de datos Cold Tech)");

        form.reset();-->
    });
});