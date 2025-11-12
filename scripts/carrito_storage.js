function getCart(){
    // Se lee desde localStorage
    const cartStr = localStorage.getItem("cartItems");

    // Si no hay nada guardado, se devuelve un array vacío
    if (!cartStr) {
        return [];
    }

    // Si existen productos, se convierte de texto a arreglo y se lo devuelve.
    return JSON.parse(cartStr);
}

function saveCart(cart) {

    // Se convierte el array de productos a texto JSON
    const cartStr = JSON.stringify(cart);

    // Se guarda ese texto en el localStorage
    // Se usa la misma clave que getCart()
    localStorage.setItem("cartItems", cartStr);
}

function addToCart(product) {
    let cart = getCart();

    // Primero se confirma que existe el producto en el carrito o no.
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {

        // Si el producto ya está en el carrito, se muestra este mensaje.
        alert("El producto ya estaba en el carrito. Modifica la cantidad desde el carrito.");
    } else {

        // En el caso que el producto no exista, se aumenta su cantidad en el carrito de 1.
        const newItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        };
        cart.push(newItem);
        saveCart(cart);
        alert(`${product.name} añadido al carrito`);
        return;
    }

    // Se guardan los cambios realizados en el carrito.
    saveCart(cart);
}
