// Archivo: mostrarEspecificaciones.js
$(document).ready(function () {
    const idActual = $('body').data('id');
    const producto = window.productos.find(p => p.id === idActual);

    if (producto) {
        const $tablaContenedor = $('#tablaEspecificaciones');

        const $tabla = $('<table></table>')
            .addClass('table table-striped table-bordered table-sm shadow-soft tabla-especificaciones');

        const $thead = $(`
            <thead>
                <tr class="table-light">
                    <th class="text-center">Categoría</th>
                    <th class="text-start">Especificación</th>
                </tr>
            </thead>
        `);

        const $tbody = $('<tbody></tbody>');
        $.each(producto.especificaciones, function (_, [categoria, valor]) {
            const $fila = $(`
                <tr>
                    <td class="text-center">${categoria}</td>
                    <td>${valor}</td>
                </tr>
            `);
            $tbody.append($fila);
        });

        $tabla.append($thead).append($tbody);
        $tablaContenedor.append($tabla);
    }
});
