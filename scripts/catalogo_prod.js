/**
 * Se crea un catálogo de productos para ser utilizado por todas las páginas que lo requieran.
 */

const products = [
    {
        id: 1,
        name: "iPhone 17",
        description: "El iPhone 17 representa la nueva generación de smartphones premium de Apple.",
        image: "../images/iphone_17.jpg",
        category: "smartphones",
        link: "../pages/iphone.html",
        price : 1199.00
    },
    {
        id: 2,
        name: "Google Pixel 10 Pro",
        description: "El Google Pixel 10 Pro Fold (2025) representa la unión perfecta entre innovación, potencia e inteligencia artificial.",
        image: "../images/pixel_10_pro.jpg",
        category: "smartphones",
        link: "../pages/pixel.html",
        price : 1919.00
    },
    {
        id: 3,
        name: "MSI Titan 18 HX Dragon Edition",
        description: "La MSI Titan 18 HX Dragon Edition representa la cúspide del rendimiento en portátiles gamer y estaciones de trabajo móviles.",
        image: "../images/msi_titan.jpg",
        category: "laptops",
        link: "../pages/MSItitan.html",
        price: 6199.00
    },
    {
        id: 4,
        name: "MSI Vector A18 HX",
        description: "La MSI Vector A18 HX es una laptop de alto rendimiento diseñada para usuarios que exigen potencia y estabilidad.",
        image: "../images/vector_a18.png",
        category: "laptops",
        link: "../pages/MSIvector.html",
        price: 2999.99
    },
    {
        id: 5,
        name: "Logitech G915 TKL Lightspeed",
        description: "El Logitech G915 TKL Lightspeed es un teclado mecánico inalámbrico de gama alta diseñado para jugadores, programadores y creadores.",
        image: "../images/logitech_g915.png",
        category: "periféricos",
        link: "../pages/LogitechG915.html",
        price: 149.99
    },
    {
        id: 6,
        name: "Logitech MX Master 4S",
        description: "El Logitech MX Master 4S es el nuevo referente en productividad premium. Diseñado para profesionales exigentes.",
        image: "../images/logitech_mx.jpg",
        category: "periféricos",
        link: "../pages/LogitechMXMaster.html",
        price: 119.99
    },
    {
        id: 7,
        name: "HP Omen 27c QHD 165 Hz",
        description: "El HP Omen 27c es un monitor de alto rendimiento diseñado para ofrecer una experiencia de juego inmersiva y fluida.",
        image: "../images/hp_omen.jpg",
        category: "monitores",
        link: "../pages/hpOmen.html",
        price: 299.99
    },
    {
        id: 8,
        name: "Dell Alienware AW3423DW",
        description: "Redefine la experiencia visual con tecnología QD-OLED, ofreciendo colores ultra vívidos, negros perfectos y contraste infinito.",
        image: "../images/dell_alienware.jpg",
        category: "monitores",
        link: "../pages/DellAlienware.html",
        price: 899.99
    },
    {
        id: 9,
        name: "Sony WH-1000XM6 – Auriculares Inalámbricos",
        description: "Representan la sexta generación de la reconocida serie líder en cancelación activa de ruido (ANC).",
        image: "../images/sony_wh.png",
        category: "audio",
        link: "../pages/SonyAuriculares.html",
        price: 458.00
    },
    {
        id: 10,
        name: "Samsung Galaxy Tab S10 Ultra",
        description: "La Samsung Galaxy Tab S10 Ultra es la tablet más avanzada de la línea Galaxy, pensada para rendimiento de nivel profesional.",
        image: "../images/samsung_gal_tab.jpg",
        category: "tablets",
        link: "../pages/SamsungTab.html",
        price: 979.99
    }
];