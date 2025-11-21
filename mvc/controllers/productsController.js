class ProductController {
    constructor () {
        this.view  = new ProductView();
        this.model = new Products();
    }

    init() {
        // 1. Obtener todos los productos del modelo
        const productos = this.model.getProducts();

        // 2. Detectar si estamos en la página de detalle o en el catálogo
        //    (si existe el contenedor #detalleProducto, asumimos que es detalle.html)
        const estaEnDetalle = $("#detalleProducto").length > 0;

        if (estaEnDetalle) {
            // Página detalle.html
            this.view.renderProductDetail(productos);
        } else {
            // Página catálogo (productos.html)
            this.view.renderProducts(productos);
        }

        // 3. Actualizar siempre el resumen del carrito (sidebar)
        this.actualizarResumenCarrito();
    }

    actualizarResumenCarrito(){
        this.view.renderCart();
        this.view.renderResume();
    }
}
