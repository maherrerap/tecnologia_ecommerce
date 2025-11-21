class FormularioController {

    constructor() {
        this.model = new FormularioModel();
        this.view = new FormularioView();
    }

    init() {
        this.view.form.on("submit", (e) => {
            e.preventDefault();
            this.procesarEnvio();
        });

        this.view.reloadBtn.on("click", () => {
            location.reload();
        });
    }

    procesarEnvio() {
        const datos = {
            nombre: $("#firstName").val(),
            apellido: $("#lastName").val(),
            email: $("#email").val(),
            telefono: $("#phone").val(),
            mensaje: $("#message").val()
        };

        const resultado = this.model.validarTodo(datos);

        const campos = ["#firstName", "#lastName", "#email", "#phone", "#message"];
        campos.forEach(selector => this.view.limpiarCampo($(selector)));

        if (!resultado.esValido) {

            if (resultado.errores.nombre)
                this.view.marcarError($("#firstName"), resultado.errores.nombre);
            else
                this.view.marcarCampoOk($("#firstName"));

            if (resultado.errores.apellido)
                this.view.marcarError($("#lastName"), resultado.errores.apellido);
            else
                this.view.marcarCampoOk($("#lastName"));

            if (resultado.errores.email)
                this.view.marcarError($("#email"), resultado.errores.email);
            else
                this.view.marcarCampoOk($("#email"));

            if (resultado.errores.telefono)
                this.view.marcarError($("#phone"), resultado.errores.telefono);
            else
                this.view.marcarCampoOk($("#phone"));

            if (resultado.errores.mensaje)
                this.view.marcarError($("#message"), resultado.errores.mensaje);
            else
                this.view.marcarCampoOk($("#message"));

            return;
        }

        this.view.mostrarEnviando();

        setTimeout(() => {
            this.view.mostrarExito();
            this.view.resetFormulario();
        }, 2000);
    }
}