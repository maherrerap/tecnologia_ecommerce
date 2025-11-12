// Automatización de Catálogo de productos

// Se crea la lista con la información de los productos
// Se generó la lista con ayuda de IA

const products = [
    {
        id: 1,
        name: "iPhone 17",
        description: "El iPhone 17 representa la nueva generación de smartphones premium de Apple.",
        image: "../images/iphone_17.jpg",
        category: "smartphones",
        link: "../pages/iphone.html"
    },
    {
        id: 2,
        name: "Google Pixel 10 Pro",
        description: "El Google Pixel 10 Pro Fold (2025) representa la unión perfecta entre innovación, potencia e inteligencia artificial.",
        image: "../images/pixel_10_pro.jpg",
        category: "smartphones",
        link: "../pages/pixel.html"
    },
    {
        id: 3,
        name: "MSI Titan 18 HX Dragon Edition",
        description: "La MSI Titan 18 HX Dragon Edition representa la cúspide del rendimiento en portátiles gamer y estaciones de trabajo móviles.",
        image: "../images/msi_titan.jpg",
        category: "laptops",
        link: "../pages/MSItitan.html"
    },
    {
        id: 4,
        name: "MSI Vector A18 HX",
        description: "La MSI Vector A18 HX es una laptop de alto rendimiento diseñada para usuarios que exigen potencia y estabilidad.",
        image: "../images/vector_a18.png",
        category: "laptops",
        link: "../pages/MSIvector.html"
    },
    {
        id: 5,
        name: "Logitech G915 TKL Lightspeed",
        description: "El Logitech G915 TKL Lightspeed es un teclado mecánico inalámbrico de gama alta diseñado para jugadores, programadores y creadores.",
        image: "../images/logitech_g915.png",
        category: "periféricos",
        link: "../pages/LogitechG915.html"
    },
    {
        id: 6,
        name: "Logitech MX Master 4S",
        description: "El Logitech MX Master 4S es el nuevo referente en productividad premium. Diseñado para profesionales exigentes.",
        image: "../images/logitech_mx.jpg",
        category: "periféricos",
        link: "../pages/LogitechMXMaster.html"
    },
    {
        id: 7,
        name: "HP Omen 27c QHD 165 Hz",
        description: "El HP Omen 27c es un monitor de alto rendimiento diseñado para ofrecer una experiencia de juego inmersiva y fluida.",
        image: "../images/hp_omen.jpg",
        category: "monitores",
        link: "../pages/hpOmen.html"
    },
    {
        id: 8,
        name: "Dell Alienware AW3423DW",
        description: "Redefine la experiencia visual con tecnología QD-OLED, ofreciendo colores ultra vívidos, negros perfectos y contraste infinito.",
        image: "../images/dell_alienware.jpg",
        category: "monitores",
        link: "../pages/DellAlienware.html"
    },
    {
        id: 9,
        name: "Sony WH-1000XM6 – Auriculares Inalámbricos",
        description: "Representan la sexta generación de la reconocida serie líder en cancelación activa de ruido (ANC).",
        image: "../images/sony_wh.png",
        category: "audio",
        link: "../pages/SonyAuriculares.html"
    },
    {
        id: 10,
        name: "Samsung Galaxy Tab S10 Ultra",
        description: "La Samsung Galaxy Tab S10 Ultra es la tablet más avanzada de la línea Galaxy, pensada para rendimiento de nivel profesional.",
        image: "../images/samsung_gal_tab.jpg",
        category: "tablets",
        link: "../pages/SamsungTab.html"
    }
];

/* CREACIÓN DEL CATÁLOGO DEL PRODUCTO UTILIZANDO JQUERY */

$(document).ready(function () {

    /**
     *
     *  1. Se Crean las filas dinamicamente (row mb-4)
     *
     * */

    // Se calcula cuántas filas se necesitan según la cantidad de productos / 4
    const totalFilas = Math.ceil(products.length /4);

    // Se recorre las filas con un bucle for

    for (let i = 0; i < totalFilas; i++) {

        // Se selecciona el contenedor principal donde irán los productos
        const $productosDiv = $("#products");

        // Se crea dinámicamente un nuevo <div> con clases row y mb-4
        const $nuevaFila = $("<div></div>").addClass("row mb-4");

        // Se agrega la fila dentro del contendor
        $productosDiv.append($nuevaFila);
    }

    /**
     *
     * 2. Se crea las columnas dentro de cada fila
     *
     */

    // Se seleccionan todas las filas creadas
    const $filasProd = $(".row");
    let contador = 0;

    // Se recorre cada filac on .each()

    $filasProd.each(function () {

        // Dentro de cada fila, se agregan hasta 4 columnas
        for (let i = 0;i < 4 && contador < products.length;i++) {
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
    const $columnasProd = $(".col");

    $columnasProd.each(function () {
        const $nuevaCarta = $("<div></div>").addClass("card h-100 d-flex flex-column");
        $(this).append($nuevaCarta);
    });

    /**
     *
     *  4. Insertar imágenes dentro de cada carta
     *
     */
    const $cartasProd = $(".card.h-100.d-flex.flex-column");

    $.each(products, function (index, producto){
        const $imagen = $("<img>").attr("src", producto.image).attr("alt", producto.name).addClass("card-img-top");

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
    const $cartasBody = $(".card-body");

    $.each(products, function (index, producto){
        const $titulo = $("<h5></h5>").text(producto.name).addClass("card-title");
        $cartasBody.eq(index).append($titulo);
    });

    /**
     *
     *  7. Agregar la descripción del producto
     *
     */
    $.each(products, function (index, producto){
        const $descripcion = $("<p></p>").text(producto.description);
        $cartasBody.eq(index).append($descripcion);
    });

    /**
     *
     *  8. Agregar botón de "Ver Detalle"
     *
     */
    $.each(products, function (index, producto){
        const $boton = $("<a></a>").attr("href", producto.link).text("Ver Detalle").addClass("btn btn-primary");
        $cartasBody.eq(index).append($boton);
    });
});