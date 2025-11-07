$(document).ready(function(){

    function formatear(numero) {
        // Convierte un numero a su formato de dinero
        return "$" + Number(numero).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    function actualizarSubtotal(nuevo_valor){
        // Actualiza el valor del subtotal con el formato creado previamente
        $("#subtotal").text(formatear(nuevo_valor));
    }

    // Se programa el boton de aumentar la cantidad del producto
    $(".btn_sumar").click(function(){
        // Convertimos al boton en un objeto de jquery para poder usar sus
        // funciones, buscando en el DOM el elemento más cercano desde arriba
        // que tenga la clase "cantidad_control"
        const container = $(this).closest(".cantidad_control");

        // Una vez encontrado el container, dentro de él se busca a un elemento
        // dentro de el con la clase "cantidad"
        const cantidad_span = container.find(".cantidad");

        // Se obtiene el tecto del elemento hijo del container y se lo transforma
        // el valor a numero para ser operado.
        let cantidad = parseInt(cantidad_span.text());
        cantidad++;
        cantidad_span.text(cantidad);

        // Esta seccion se maneja de la misma manera que la primera.
        const card = $(this).closest(".flex-grow-1");
        const precio_card = card.find(".precio");
        // Usa el atributo de data-unit para saber el valor del elemento
        const unitario = parseFloat(precio_card.data("unit"));
        const total_producto = unitario * cantidad;

        //Mostramos el nuevo precio del producto
        precio_card.text(formatear(total_producto));

        //Actualizamos el subtotal
        actualizarSubtotal(total_producto);

    });

    $(".btn_restar").click(function(){
        const container = $(this).closest(".cantidad_control");
        const cantidad_span = container.find(".cantidad");
        let cantidad = parseInt(cantidad_span.text());
        if (cantidad > 1) {
            cantidad--;
            cantidad_span.text(cantidad);


            // Esta seccion se maneja de la misma manera que la primera.
            const card = $(this).closest(".flex-grow-1");
            const precio_card = card.find(".precio");
            const unitario = parseFloat(precio_card.data("unit"));
            const total_producto = unitario * cantidad;

            precio_card.text(formatear(total_producto));
            actualizarSubtotal(total_producto);
        }
    });
})