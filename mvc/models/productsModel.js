/**
 *  Clase de Productos
 */

/* CATALOGO PRODUCTOS */

const products = [
    {
        id: 1,
        name: "iPhone 17",
        price: 1199.00,
        description:"El iPhone 17 representa la nueva generación de smartphones premium de Apple.",
        detail: "El iPhone 17 combina diseño premium y potencia excepcional con el nuevo chip A19 Bionic, pantalla OLED LTPO Super Retina XDR y cámaras profesionales de 48 MP. Su cuerpo de titanio pulido ofrece ligereza y resistencia, mientras que iOS 26 con IA optimiza el rendimiento y la eficiencia energética",
        category: "smartphones",
        image: "../images/iphone_17.jpg",
        imageD: [
            "../images/iphone/iphone1.png",
            "../images/iphone/iphone2.png",
            "../images/iphone/iphone3.png",
            "../images/iphone/iphone4.png",
            "../images/iphone/iphone5.png"
        ],
        specs: [
            ["Modelo", "Apple iPhone 17 (2025)"],
            ["Procesador", "Chip A19 Bionic"],
            ["Sistema Operativo", "iOS 26"],
            ["Pantalla", "6.3″ OLED LTPO Super Retina XDR"],
            ["Resolución", "2796 × 1290 píxeles"],
            ["Cámaras", "48 MP + 48 MP / 20 MP frontal"],
            ["Video", "8K @30 fps / 4K @60 fps (HDR10, Dolby Vision)"],
            ["Audio", "Dolby Atmos estéreo"],
            ["Resistencia", "IP68"],
            ["Materiales", "Titanio pulido y vidrio Ceramic Shield"]
        ],
        destacado: true,
        stock: 10
    },

    {
        id: 2,
        name: "Google Pixel 10 Pro Fold",
        price: 1919.00,
        description: "El Google Pixel 10 Pro Fold (2025) representa la unión perfecta entre innovación, potencia e inteligencia artificial",
        detail: "El Google Pixel 10 Pro Fold combina potencia, inteligencia y diseño plegable. Doble pantalla OLED 120 Hz, cámara triple de 48 MP y procesador Tensor G5 con IA integrada.",
        category: "smartphones",
        image: "../images/pixel_10_pro.jpg",
        imageD: [
            "../images/Google Pixel 10 Pro Fold/pixel1.png",
            "../images/Google Pixel 10 Pro Fold/pixel2.png",
            "../images/Google Pixel 10 Pro Fold/pixel3.png",
            "../images/Google Pixel 10 Pro Fold/pixel4.png",
            "../images/Google Pixel 10 Pro Fold/pixel5.png",
        ],
        specs: [
            ["Procesador", "Google Tensor G5 (5 nm, 8 núcleos)"],
            ["Pantallas", "Externa 6.4″ OLED 120 Hz / Interna 8.0″ OLED flexible"],
            ["Cámaras", "48 MP + 48 MP + 10.5 MP / 10.8 MP frontal"],
            ["Batería", "5,015 mAh"],
            ["Audio", "Estéreo Dolby Atmos"],
            ["Seguridad", "Titan M3 + huella lateral"],
            ["Resistencia", "IP68"]
        ],
        destacado: false,
        stock: 10
    },
    {
        id: 3,
        name: "MSI Titan 18 HX Dragon Edition",
        price: 6199.00,
        description: "La MSI Titan 18 HX Dragon Edition representa la cúspide del rendimiento en portátiles gamer y estaciones de trabajo móviles.",
        detail: "La MSI Titan 18 HX Dragon Edition redefine el poder portátil con un Intel Core Ultra 9 285HX, RTX 5090 24 GB, pantalla Mini LED 4K 120 Hz y diseño Dragon Edition en magnesio. Ideal para gaming extremo y creación profesional.",
        category: "laptops",
        image: ["../images/msi_titan.jpg"],
        imageD: [
            "../images/MSItitan/titan1.png",
            "../images/MSItitan/titan2.png",
            "../images/MSItitan/titan3.png",
            "../images/MSItitan/titan4.png",
            "../images/MSItitan/titan5.png",
        ],
        specs: [
            ["CPU", "Intel Core Ultra 9 285HX"],
            ["GPU", "NVIDIA RTX 5090 24 GB GDDR7"],
            ["RAM", "96 GB DDR5 (expandible)"],
            ["Almacenamiento", "SSD NVMe Gen5 hasta 2 TB (RAID 0)"],
            ["Pantalla", "18″ Mini LED 4K 120 Hz HDR1000"],
            ["Teclado", "Mecánico RGB SteelSeries"],
            ["Chasis", "Aleación de magnesio y aluminio"],
            ["Batería", "99.9 Wh Li-Ion 330W"],
            ["Sistema Operativo", "Windows 11 Pro"]
        ],
        destacado: true,
        stock: 10
    },
    {
        id: 4,
        name: "MSI Vector A18 HX",
        price: 2999.99,
        description: "La MSI Vector A18 HX es una laptop de alto rendimiento diseñada para usuarios que exigen potencia y estabilidad.",
        detail: "La MSI Vector A18 HX combina un AMD Ryzen 9 9955HX, RTX 5080, 32 GB DDR5 y pantalla QHD+ 240 Hz en un diseño metálico elegante.",
        category: "laptops",
        image: ["../images/vector_a18.png"],
        imageD: [
            "../images/MSIvector/vector1.png",
            "../images/MSIvector/vector2.png",
            "../images/MSIvector/vector3.png",
            "../images/MSIvector/vector4.png",
            "../images/MSIvector/vector5.png",
        ],
        specs: [
            ["CPU", "AMD Ryzen 9 9955HX (16C/32T)"],
            ["GPU", "NVIDIA RTX 5080 16 GB GDDR7"],
            ["RAM", "32 GB DDR5 (expandible a 96 GB)"],
            ["Pantalla", "18″ QHD+ 240 Hz"],
            ["Almacenamiento", "SSD NVMe PCIe 1 TB"],
            ["Batería", "99.9 Wh 280W"],
            ["Teclado", "RGB SteelSeries"],
            ["Sistema Operativo", "Windows 11 Pro"]
        ],
        destacado: false,
        stock: 10
    },
    {
        id: 5,
        name: "Logitech G915 TKL Lightspeed",
        price: 149.99,
        description: "El Logitech G915 TKL Lightspeed es un teclado mecánico inalámbrico de gama alta diseñado para jugadores, programadores y creadores.",
        detail:"El Logitech G915 TKL Lightspeed combina tecnología inalámbrica profesional, switches mecánicos GL de perfil bajo, y RGB LIGHTSYNC por tecla en un diseño compacto y premium.",
        category: "periféricos",
        image: ["../images/logitech_g915.png"],
        imageD: [
            "../images/LogitechG915/G1915-1.png",
            "../images/LogitechG915/G1915-2.png",
            "../images/LogitechG915/G1915-3.png",
            "../images/LogitechG915/G1915-4.png",
            "../images/LogitechG915/G1915-5.png",
        ],
        specs: [
            ["Tipo", "Mecánico inalámbrico TKL"],
            ["Conectividad", "Lightspeed 2.4 GHz, Bluetooth, USB-C"],
            ["Retroiluminación", "RGB LIGHTSYNC 16.8M colores"],
            ["Batería", "40 h con RGB activo"],
            ["Material", "Aluminio aeronáutico"],
            ["Peso", "810 g"],
            ["Compatibilidad", "Windows, macOS, iPadOS"]
        ],
        destacado: false,
        stock: 10
    },
    {
        id: 6,
        name: "Logitech MX Master 4S",
        price: 119.99,
        description: "El Logitech MX Master 4S es el nuevo referente en productividad premium. Diseñado para profesionales exigentes.",
        detail: "El Logitech MX Master 4S ofrece precisión profesional (hasta 16,000 DPI), rueda MagSpeed electromagnética, ergonomía avanzada y conectividad dual Bluetooth / Logi Bolt.",
        category: "periféricos",
        image: ["../images/logitech_mx.jpg"],
        imageD: [
            "../images/LogitechMXMaster/MX1.png",
            "../images/LogitechMXMaster/MX2.png",
            "../images/LogitechMXMaster/MX3.png",
            "../images/LogitechMXMaster/MX4.png",
            "../images/LogitechMXMaster/MX5.png",
        ],
        specs: [
            ["Sensor", "Darkfield 800–16,000 DPI"],
            ["Conectividad", "Bluetooth + Logi Bolt USB"],
            ["Batería", "500 mAh (3 min = 1 día)"],
            ["Compatibilidad", "Windows, macOS, Linux, iPadOS"],
            ["Color", "Grafito / Gris espacial"]
        ],
        destacado: false,
        stock: 10
    },
    {
        id: 7,
        name: "HP Omen 27c QHD 165 Hz",
        price: 299.99,
        description: "El HP Omen 27c es un monitor de alto rendimiento diseñado para ofrecer una experiencia de juego inmersiva y fluida.",
        detail: "El HP Omen 27c QHD 165 Hz ofrece pantalla curva 27″, resolución QHD, panel VA, y 1 ms de respuesta, con FreeSync™ Premium y G-SYNC®.",
        category: "monitores",
        image: ["../images/hp_omen.jpg"],
        imageD: [
            "../images/hpOmen/hp1.png",
            "../images/hpOmen/hp2.png",
            "../images/hpOmen/hp3.png",
            "../images/hpOmen/hp4.png",
            "../images/hpOmen/hp5.png",
        ],
        specs: [
            ["Pantalla", "27″ curva 1500R QHD"],
            ["Panel", "VA 99 % sRGB / 95 % DCI-P3"],
            ["Respuesta", "1 ms GtG"],
            ["Brillo", "400 nits HDR400"],
            ["Conectividad", "DisplayPort, 2× HDMI 2.0, 2× USB-A, USB-B"],
            ["Peso", "6.9 kg"]
        ],
        destacado: false,
        stock: 10
    },
    {
        id: 8,
        name: "Dell Alienware AW3423DW",
        price: 899.99,
        description: "Redefine la experiencia visual con tecnología QD-OLED, ofreciendo colores ultra vívidos, negros perfectos y contraste infinito.",
        detail: "El Dell Alienware AW3423DW combina tecnología QD-OLED, 175 Hz, 0.1 ms, y compatibilidad G-SYNC Ultimate en una pantalla ultrawide curva 34″ (3440×1440).",
        category: "monitores",
        image: ["../images/dell_alienware.jpg"],
        imageD: [
            "../images/DellAlienware/dell1.png",
            "../images/DellAlienware/dell2.png",
            "../images/DellAlienware/dell3.png",
            "../images/DellAlienware/dell4.png",
            "../images/DellAlienware/dell5.png",
        ],
        specs: [
            ["Pantalla", "34.18″ curva (1800R)"],
            ["Tipo de panel", "QD-OLED"],
            ["Contraste", "Infinito:1"],
            ["HDR", "True Black 400"],
            ["Sincronización", "NVIDIA G-SYNC Ultimate"],
            ["Color", "99.3 % DCI-P3 / 149 % sRGB"]
        ],
        destacado: false,
        stock: 10
    },
    {
        id: 9,
        name: "Sony WH-1000XM6",
        price: 458.00,
        description: "Representan la sexta generación de la reconocida serie líder en cancelación activa de ruido (ANC).",
        detail: "Los Sony WH-1000XM6 ofrecen cancelación de ruido inteligente con IA, Bluetooth 5.4 multipunto, hasta 45 horas de batería, y audio Hi-Res LDAC.",
        category: "audio",
        image: ["../images/sony_wh.png"],
        imageD: [
            "../images/SonyAuriculares/sony1.png",
            "../images/SonyAuriculares/sony2.png",
            "../images/SonyAuriculares/sony3.png",
            "../images/SonyAuriculares/sony4.png",
            "../images/SonyAuriculares/sony5.png",
        ],
        specs: [
            ["Tipo", "Over-Ear inalámbricos ANC"],
            ["Bluetooth", "5.4 multipunto"],
            ["Micrófonos", "8 con beamforming"],
            ["Batería", "45 h (35 h con ANC)"],
            ["Carga rápida", "10 min = 5 h"],
            ["Peso", "250 g"]
        ],
        destacado: true,
        stock: 10
    },
    {
        id: 10,
        name: "Samsung Galaxy Tab S10 Ultra",
        price: 979.99,
        description: "La Samsung Galaxy Tab S10 Ultra es la tablet más avanzada de la línea Galaxy, pensada para rendimiento de nivel profesional.",
        detail: "La Samsung Galaxy Tab S10 Ultra combina pantalla AMOLED 14.6″ 120 Hz, Snapdragon 8 Gen 3, S Pen incluido y modo DeX para productividad profesional.",
        category: "tablets",
        image: ["../images/samsung_gal_tab.jpg"],
        imageD: [
            "../images/SamsungTab/tab1.png",
            "../images/SamsungTab/tab2.png",
            "../images/SamsungTab/tab3.png",
            "../images/SamsungTab/tab4.png",
            "../images/SamsungTab/tab5.png",
        ],
        specs: [
            ["Pantalla", "14.6″ AMOLED 120 Hz HDR10+"],
            ["Procesador", "Snapdragon 8 Gen 3"],
            ["Almacenamiento", "512 GB + microSD hasta 1 TB"],
            ["Cámaras", "13 MP + 8 MP / Dual 12 MP frontal"],
            ["Batería", "11,200 mAh (45W carga rápida)"],
            ["Peso", "732 g"]
        ],
        destacado: false,
        stock: 10
    }
];

class Products {
    constructor() {
        this.products = products;
        this.cart = [];
    }
    // SOLO AQUÍ:

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                return this.products[i];
            }
        }
    }
    getProductsDestacados() {
        let destacados = [];

        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].destacado === true) {
                destacados.push(this.products[i]);
            }
        }
    }

    addProductCart(id) {
        const producto = this.getProductById(id);
        if (!producto) {
            return 'No existe el producto';
        }
        if (producto.stock === 0) {
            return 'No hay stock de productos';
        }
        producto.stock --;
        this.cart.push(producto);

    }
}
const productModel = new Products();
