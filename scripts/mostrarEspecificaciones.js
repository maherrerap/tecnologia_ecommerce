// Archivo: mostrarEspecificaciones.js
$(document).ready(function () {
    const idActual = $('body').data('id');

    // 1. Verificar que exista window.productos
    if (typeof window.productos === 'undefined') {
        console.error(
            'mostrarEspecificaciones: window.productos está undefined. ' +
            'Revisa que productos.js se cargue ANTES y que haga window.productos = productos;'
        );
        return; // salimos para no romper
    }

    // 2. Verificar que sea un array
    if (!Array.isArray(window.productos)) {
        console.error('mostrarEspecificaciones: window.productos existe pero no es un array:', window.productos);
        return;
    }

    // 3. Buscar el producto
    const producto = window.productos.find(p => p.id === idActual);

    if (!producto) {
        console.warn('mostrarEspecificaciones: no encontré producto con id', idActual, 'en', window.productos);
        return;
    }

    // 4. Construir la tabla
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

    // por si el producto no tiene especificaciones
    if (Array.isArray(producto.especificaciones)) {
        $.each(producto.especificaciones, function (_, [categoria, valor]) {
            const $fila = $(`
                <tr>
                    <td class="text-center">${categoria}</td>
                    <td>${valor}</td>
                </tr>
            `);
            $tbody.append($fila);
        });
    } else {
        console.warn('El producto no tiene especificaciones en formato array:', producto);
    }

    $tabla.append($thead).append($tbody);
    $tablaContenedor.append($tabla);
});
