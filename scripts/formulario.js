document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const successMsg = document.getElementById("success-message");

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

    // 🔹 Función para verificar si todos los campos son válidos
    const checkFormValidity = () => {
        const allValid =
            patterns.name.test(inputs.firstName.value.trim()) &&
            patterns.name.test(inputs.lastName.value.trim()) &&
            patterns.email.test(inputs.email.value.trim()) &&
            patterns.phone.test(inputs.phone.value.trim()) &&
            inputs.message.value.trim().length >= 10;

        submitBtn.disabled = !allValid;
    };

    // 🔹 Limpia errores al escribir y verifica validez en tiempo real
    Object.values(inputs).forEach(input => {
        input.addEventListener("input", () => {
            input.setCustomValidity("");
            input.classList.remove("is-invalid", "is-valid");
            checkFormValidity();
        });
    });

    // 🔹 Escucha el envío del formulario
    form.addEventListener("submit", (e) => {
        // ✅ Si el formulario no es válido según HTML5, dejamos que el navegador muestre las burbujas nativas
        if (!form.checkValidity()) {
            return; // No se previene el envío para permitir las burbujas HTML5
        }

        // Si pasa las validaciones HTML5, ahora sí evitamos el envío real
        e.preventDefault();

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

        // === Mostrar burbujas HTML5 si algo falla ===
        if (!isValid) {
            form.reportValidity();
            return;
        }

        // === Si todo es válido ===
        Object.values(inputs).forEach(i => i.classList.add("is-valid"));

        // Desactivar botón temporalmente
        submitBtn.disabled = true;

        // Mostrar mensaje de éxito visual
        successMsg.style.display = "block";

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            successMsg.style.display = "none";
        }, 5000);

        // Limpiar formulario y clases
        form.reset();
        Object.values(inputs).forEach(i => i.classList.remove("is-valid", "is-invalid"));

        // Verificar validez para mantener el botón desactivado
        checkFormValidity();
    });

    // Inicializar estado del botón al cargar
    checkFormValidity();
});