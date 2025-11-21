// =====================================================
// Archivo: captura_click_carrito.js
// =====================================================
// Captura el clic en .btn-add-cart, toma el data-id,
// busca el producto en el modelo ProductsModel y lo
// envía a addToCart()
// =====================================================

// IMPORTANTE: este archivo debe cargarse DESPUÉS de models/productsModel.js
// para que la clase ProductsModel ya exista en el scope global. // <-- modelo que está en /models/productsModel.js

$(document).ready(function () {

    $(document).on("click", ".btn-add-cart", function (e) {
        e.preventDefault(); // por si el botón es un <a>

        // 1. Obtener el id del data-id
        const idProd = parseInt($(this).data("id"), 10);

        if (isNaN(idProd)) {
            console.warn("ID de producto inválido en .btn-add-cart");
            return;
        }

        // 2. Pedir los productos al modelo
        const products = productModel.getProducts();

        // 3. Buscar el producto por id
        const prod = products.find(p => p.id === idProd);

        // 4. Agregar al carrito
        if (prod) {
            addToCart(prod); // viene de carrito_storage.js
        } else {
            console.warn("No se encontró el producto con id:", idProd);
        }
    });

});
