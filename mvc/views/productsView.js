class ProductView {

    constructor(){
        this.proContenedor   = $('#products');
        this.paginacion      = $('#paginacion');
        this.cartContenedor  = $('#cart');
        this.totalContainer  = $('#resumen');
        // Contenedor de detalle (para detalle.html)
        this.detalleContenedor = $('#detalleProducto');
    }

    renderProducts(products){

        // Limpio el contenedor por si ya había productos antes
        this.proContenedor.empty();

        /**
         *
         *  1. Se crean las filas dinámicamente (row mb-4)
         *
         */

            // Se calcula cuántas filas se necesitan según la cantidad de productos / 4
        const totalFilas = Math.ceil(products.length / 4);

        // Se recorre las filas con un bucle for
        for (let i = 0; i < totalFilas; i++) {

            // Se selecciona el contenedor principal donde irán los productos
            const $productosDiv = this.proContenedor;

            // Se crea dinámicamente un nuevo <div> con clases row y mb-4
            const $nuevaFila = $("<div></div>").addClass("row mb-4");

            // Se agrega la fila dentro del contendor
            $productosDiv.append($nuevaFila);
        }

        /**
         *
         * 2. Se crean las columnas dentro de cada fila
         *
         */

            // Se seleccionan todas las filas creadas (solo dentro de #products)
        const $filasProd = this.proContenedor.find(".row");
        let contador = 0;

        // Se recorre cada fila con .each()
        $filasProd.each(function () {

            // Dentro de cada fila, se agregan hasta 4 columnas
            for (let i = 0; i < 4 && contador < products.length; i++) {
                const $nuevaColumna = $("<div></div>").addClass("col");
                $(this).append($nuevaColumna);
                contador++;
            }
        });

        /**
         *
         *  3. Crear las cartas dentro de cada columna
         *
         */
        const $columnasProd = this.proContenedor.find(".col");

        $columnasProd.each(function () {
            const $nuevaCarta = $("<div></div>").addClass("card h-100 d-flex flex-column");
            $(this).append($nuevaCarta);
        });

        /**
         *
         *  4. Insertar imágenes dentro de cada carta
         *
         */
        const $cartasProd = this.proContenedor.find(".card.h-100.d-flex.flex-column");

        $.each(products, function (index, producto) {
            const $imagen = $("<img>")
                .attr("src", producto.image)
                .attr("alt", producto.name)
                .addClass("card-img-top");

            $cartasProd.eq(index).append($imagen);
        });

        /**
         *
         *  5. Agregar el cuerpo de la carta
         *
         */

        $cartasProd.each(function () {
            const $cuerpocarta = $("<div></div>").addClass("card-body");
            $(this).append($cuerpocarta);
        });

        /**
         *
         *  6. Añadir el título del producto
         *
         */
        const $cartasBody = this.proContenedor.find(".card-body");

        $.each(products, function (index, producto) {
            const $titulo = $("<h5></h5>")
                .text(producto.name)
                .addClass("card-title");
            $cartasBody.eq(index).append($titulo);
        });

        /**
         *
         *  7. Agregar la descripción del producto
         *
         */
        $.each(products, function (index, producto) {
            const $descripcion = $("<p></p>").text(producto.description);
            $cartasBody.eq(index).append($descripcion);
        });

        /**
         *
         *  8. Agregar botón de "Ver Detalle"
         *
         */
        $.each(products, function (index, prod) {
            const $boton = $("<a></a>")
                .attr("href", `detalle.html?id=${prod.id}`)
                .text("Ver Detalle")
                .addClass("btn btn-primary");
            $cartasBody.eq(index).append($boton);
        });

        this.renderCart();
        this.renderResume();
    }

    /**
     * Renderiza la vista de detalle de un producto
     * usando el id que viene en el query string (?id=...)
     */
    renderProductDetail(products) {

        // Obtener el id desde la URL
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get("id"));

        // Verificar el arreglo de productos recibido
        if (!products || !Array.isArray(products)) {
            console.error("No hay productos o no es un arreglo válido");
            return;
        }

        // Buscar el producto por id
        const producto = products.find(p => p.id === id);
        if (!producto) {
            this.detalleContenedor.html(`
                <div class="alert alert-warning text-center mt-5">
                    Producto no encontrado o eliminado.
                </div>
            `);
            return;
        }

        // Crear el carrusel
        const carouselId = "carouselDetalle";
        const carousel = `
            <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    ${producto.imageD.map((img, i) => `
                        <div class="carousel-item ${i === 0 ? 'active' : ''}">
                            <img src="${img}" class="d-block w-100 rounded-3 shadow-sm" alt="${producto.name}">
                        </div>
                    `).join("")}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        `;

        // Crear el contenido de detalle
        const html = `
            <div class="row align-items-start justify-content-center mt-4">
                <!-- Miniaturas -->
                <div class="col-md-2 d-flex flex-column gap-2">
                    ${producto.imageD.map(img => `
                        <img src="${img}" class="img-thumbnail miniatura" style="cursor:pointer;" alt="${producto.name}">
                    `).join("")}
                </div>

                <!-- Carrusel -->
                <div class="col-md-5 text-center">
                    ${carousel}
                </div>

                <!-- Información -->
                <div class="col-md-4">
                    <h2 class="fw-bold">${producto.name}</h2>
                    <p class="text-primary fs-4 fw-semibold">$${producto.price.toFixed(2)}</p>
                    <p>${producto.detail}</p>
                    <button class="btn btn-primary btn-add-cart" data-id="${producto.id}">Añadir al carrito</button>
                </div>
            </div>

            <div class="text-center mt-5">
                <button class="btn btn-primary fw-semibold" type="button"
                        data-bs-toggle="collapse" data-bs-target="#specsTable">
                    Especificaciones
                </button>
            </div>

            <div class="collapse mt-4" id="specsTable">
                <table class="table table-bordered table-striped shadow-sm">
                    <thead>
                        <tr>
                            <th class="text-center bg-light">Categoría</th>
                            <th class="text-start bg-light">Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${producto.specs.map(([cat, val]) => `
                            <tr>
                                <td class="text-center">${cat}</td>
                                <td>${val}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `;

        // Insertar en el DOM
        this.detalleContenedor.html(html);

        // Vincular miniaturas con carrusel
        const selfCarouselId = carouselId; // para claridad
        $(".miniatura").on("click", function () {
            const index = $(this).index();
            const carouselEl = document.getElementById(selfCarouselId);
            const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carouselEl);
            carouselInstance.to(index);
        });

        // (Opcional) aquí puedes enganchar la lógica de "Añadir al carrito"
        // usando la clase .btn-add-cart si ya tienes esa funcionalidad implementada.
    }

    /* Se renderiza el contenido del carrito de compras */
    renderCart() {
        const cart = getCart();   // viene desde carrito_storage.js

        this.cartContenedor.empty();

        if (cart.length === 0) {
            this.cartContenedor.html(`
                <p class="text-muted">Tu carrito está vacío.</p>
            `);
            return;
        }

        cart.forEach(item => {
            const itemHTML = `
                <div class="cart-mini-item d-flex align-items-center mb-3">
                    <img src="${item.image}" class="mini-cart-img me-2">
                    <div class="flex-grow-1">
                        <p class="m-0 fw-semibold">${item.name}</p>
                        <small class="text-muted">$${item.price} × ${item.quantity}</small>
                    </div>
                </div>
            `;
            this.cartContenedor.append(itemHTML);
        });
    }

    /* Se renderiza el resumen del carrito */
    renderResume() {
        const cart = getCart();

        let subtotal = 0;
        let totalItems = 0;

        cart.forEach(item => {
            subtotal += item.price * item.quantity;
            totalItems += item.quantity;
        });

        this.totalContainer.html(`
            <h6 class="fw-bold">Subtotal (${totalItems} productos):</h6>
            <h4 class="text-success fw-bold resultado_resumen">$${subtotal.toFixed(2)}</h4>
        `);
    }

}
