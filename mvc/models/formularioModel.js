class FormularioModel {

    validarTexto(valor) {
        const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        if (!valor.trim() || !soloLetras.test(valor.trim())) {
            return "Este campo solo puede contener letras.";
        }
        return null;
    }

    validarEmail(valor) {
        if (!valor.includes("@") || !valor.includes(".")) {
            return "Ingrese un correo válido con @ y un dominio.";
        }
        return null;
    }

    validarTelefono(valor) {
        const telRegex = /^09[0-9]{8}$/;
        if (!telRegex.test(valor.trim())) {
            return "Debe iniciar con 09 y tener 10 dígitos.";
        }
        return null;
    }

    validarMensaje(valor) {
        if (valor.trim().length < 10) {
            return "Debe contener al menos 10 caracteres.";
        }
        return null;
    }

    validarTodo(datos) {
        const errores = {
            nombre: this.validarTexto(datos.nombre),
            apellido: this.validarTexto(datos.apellido),
            email: this.validarEmail(datos.email),
            telefono: this.validarTelefono(datos.telefono),
            mensaje: this.validarMensaje(datos.mensaje)
        };

        const esValido = Object.values(errores).every(err => err === null);

        return { esValido, errores };
    }
}