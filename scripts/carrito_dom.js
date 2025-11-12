
// Cuando el documento esté listo, se crea el carrito de compras
$(document).ready(function () {
    renderCart();
});

// Función que crea el carrito de compras
function renderCart() {

    // 1. Traemos lo que haya en localStorage
    const cart = getCart();

    // 2. Seleccionamos el contenedor donde van las tarjetas
    const $container = $("#cart-items");

    // 3. Limpiamos lo que haya
    $container.empty();

    // 4. Si no hay productos, mostramos mensaje y subtotal 0
    if (cart.length === 0) {
        $container.append(`<p class="text-muted">Tu carrito está vacío.</p>`);
        $("#subtotal").text("$0.00");
        return;
    }

    // 5. Si hay productos, se lo recorre.
    let subtotal = 0;

    cart.forEach(item => {

        subtotal += item.price * item.quantity;

        // Armamos la tarjeta con etiquetas bootstrap.
        const card = `
        <div class="bg-white rounded-3 shadow-sm d-flex align-items-center p-4 mb-3" style="border:1px solid #e2e2e2;">
            <!-- Imagen -->
            <div class="me-4">
                <img src="${item.image}" alt="${item.name}"
                     style="width:140px; height:auto; border-radius:12px; object-fit:cover;">
            </div>

            <!-- Información del Producto -->
            <div class="flex-grow-1">
                <h5 class="mb-2" style="color:#0a1a2f; font-weight:600;">${item.name}</h5>
                <p class="mb-3 precio" data-unit="${item.price}" style="color:#0060af; font-weight:600;">
                    $${item.price.toFixed(2)}
                </p>

                <!-- Controles de Cantidad del Producto -->
                <div class="d-flex align-items-center gap-3 cantidad_control">
                    <button class="btn btn-light border rounded-circle px-2 py-1 btn_restar"
                            data-id="${item.id}"
                            style="width:34px; height:34px;">-</button>
                    <span class="cantidad">${item.quantity}</span>
                    <button class="btn btn-light border rounded-circle px-2 py-1 btn_sumar"
                            data-id="${item.id}"
                            style="width:34px; height:34px;">+</button>
                </div>
            </div>

            <!-- Botón de Eliminar Producto -->
            <div class="ms-3">
                <button class="btn btn-light border-0 d-flex align-items-center justify-content-center btn_delete"
                        data-id="${item.id}"
                        style="width:40px; height:40px; border-radius:50%; background:#f4f5f7;">
                    <img src="../images/basurero.png" alt="Eliminar" style="width:22px; height:22px;">
                </button>
            </div>
        </div>
        `;

        // Lo añadimos al contenedor
        $container.append(card);
    });

    // 6. Se actualiza el subtotal en el panel derecho
    $("#subtotal").text(`$${subtotal.toFixed(2)}`);
}


// =========================
// MANEJO DE BOTONES
// =========================

// Funcionamiento para botón sumar cantidad.
$("#cart-items").on("click", ".btn_sumar", function () {
    const id = parseInt($(this).data("id"));
    let cart = getCart();

    const item = cart.find(p => p.id === id);
    if (item) {
        item.quantity += 1;
        saveCart(cart);
        renderCart();
    }
});

// Funcionamiento para botón restar cantidad.
$("#cart-items").on("click", ".btn_restar", function () {
    const id = parseInt($(this).data("id"));
    let cart = getCart();

    const item = cart.find(p => p.id === id);
    if (item) {
        // evitamos que baje de 1
        if (item.quantity > 1) {
            item.quantity -= 1;
            saveCart(cart);
            renderCart();
        }
    }
});

// Funcionamiento para botón para sacar el producto del carrito.

$("#cart-items").on("click", ".btn_delete", function () {
    const id = parseInt($(this).data("id"));
    let cart = getCart();

    // Se filtra para sacar el producto
    cart = cart.filter(p => p.id === undefined ? false : p.id !== id);

    // Se guarda el carrito actualizado
    saveCart(cart);

    // Se re-renderiza la vista del carrito
    renderCart();

})