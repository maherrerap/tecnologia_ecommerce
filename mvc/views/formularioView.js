class FormularioView {

    constructor() {
        this.form = $("#contact-form");
        this.wrapper = $("#cambiar_jquery");
        this.status = $("#cambio");
        this.reloadBtn = $("#recargar");

        this.status.hide();
        this.reloadBtn.hide();
    }

    limpiarCampo($campo) {
        $campo.removeClass("is-invalid is-valid");
        $campo.next(".invalid-feedback").remove();
    }

    marcarError($campo, mensaje) {
        $campo.addClass("is-invalid");
        $campo.after(`<div class="invalid-feedback">${mensaje}</div>`);
    }

    marcarCampoOk($campo) {
        $campo.addClass("is-valid");
    }

    mostrarEnviando() {
        this.wrapper.fadeOut(300, () => {
            this.status
                .removeClass("alert-success alert-warning")
                .addClass("alert alert-warning text-center")
                .text("Enviando formulario...")
                .fadeIn(250);
        });
    }

    mostrarExito() {
        this.status
            .removeClass("alert-warning")
            .addClass("alert-success")
            .text("Formulario enviado con éxito");

        this.reloadBtn.fadeIn(200);
    }

    resetFormulario() {
        this.form[0].reset();
        this.form.find("input, textarea").removeClass("is-valid is-invalid");
        this.form.find(".invalid-feedback").remove();
    }
}