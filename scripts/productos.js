// Archivo: productos.js
const productos = [
    {
        id: "P0001",
        nombre: "iPhone 17",
        precio: "$1,199.00",
        descripcion:
            "El iPhone 17 combina diseño premium y potencia excepcional con el nuevo chip A19 Bionic, pantalla OLED LTPO Super Retina XDR y cámaras profesionales de 48 MP. Su cuerpo de titanio pulido ofrece ligereza y resistencia, mientras que iOS 26 con IA optimiza el rendimiento y la eficiencia energética.",
        especificaciones: [
            ["Modelo", "Apple iPhone 17 (2025)"],
            ["Procesador", "Chip A19 Bionic"],
            ["Sistema Operativo", "iOS 26"],
            ["Pantalla", "6.3″ OLED LTPO Super Retina XDR"],
            ["Resolución", "2796 × 1290 píxeles"],
            ["Cámaras traseras", "48 MP principal + 48 MP ultra-gran angular"],
            ["Cámaras frontales", "20 MP HDR autofocus"],
            ["Video", "8K @30 fps / 4K @60 fps (HDR10, Dolby Vision)"],
            ["Audio", "Altavoces estéreo Dolby Atmos"],
            ["Seguridad", "Face ID, Secure Enclave, cifrado AES 256 bits"],
            ["Resistencia", "Certificación IP68"],
            ["Materiales", "Titanio pulido y vidrio Ceramic Shield"],
            ["Dimensiones", "146.8 × 71.5 × 7.8 mm / 177 g"],
            ["Colores", "Plata Estelar • Negro Espacial • Titanio Natural • Rosa Champagne"]
        ]
    },
    {
        id: "P0002",
        nombre: "Google Pixel 10 Pro Fold",
        precio: "$1,919.00",
        descripcion:
            "El Google Pixel 10 Pro Fold combina potencia, inteligencia y diseño plegable en un solo dispositivo. Su doble pantalla OLED de 120 Hz, cámara triple de 48 MP y procesador Tensor G5 con IA integrada ofrecen una experiencia móvil premium y versátil.",
        especificaciones: [
            ["Modelo", "Google Pixel 10 Pro Fold"],
            ["Procesador", "Google Tensor G5 (5 nm, 8 núcleos)"],
            ["Sistema Operativo", "Android 15 Pixel Edition"],
            ["Pantalla Externa", "6.4″ OLED LTPO, 120 Hz"],
            ["Pantalla Interna", "8.0″ OLED LTPO flexible, 120 Hz"],
            ["Cámaras traseras", "48 MP + 48 MP + 10.5 MP telefoto"],
            ["Cámara frontal", "10.8 MP"],
            ["Cámara interna", "8 MP gran angular"],
            ["Video", "8K @30 fps / 4K @60 fps"],
            ["Batería", "5,015 mAh"],
            ["Audio", "Estéreo Dolby Atmos"],
            ["Seguridad", "Titan M3, facial y huella lateral"],
            ["Resistencia", "IP68"],
            ["Materiales", "Aluminio anodizado y vidrio mate"],
            ["Peso", "283 g"]
        ]
    },
    {
        id: "P0003",
        nombre: "MSI Titan 18 HX Dragon Edition",
        precio: "$6,199.00",
        descripcion:
            "La MSI Titan 18 HX Dragon Edition redefine el poder portátil con un Intel Core Ultra 9 285HX, RTX 5090 24 GB, pantalla Mini LED 4K 120 Hz y diseño Dragon Edition en magnesio. Ideal para gaming extremo y creación profesional.",
        especificaciones: [
            ["Modelo", "MSI Titan 18 HX Dragon Edition"],
            ["CPU", "Intel Core Ultra 9 285HX"],
            ["GPU", "NVIDIA RTX 5090 24 GB GDDR7"],
            ["RAM", "96 GB DDR5 (expandible)"],
            ["Almacenamiento", "SSD NVMe Gen5 hasta 2 TB (RAID 0)"],
            ["Pantalla", "18″ Mini LED 4K 120 Hz HDR1000"],
            ["Enfriamiento", "Cooler Boost 5 (doble ventilador)"],
            ["Puertos", "2× Thunderbolt 4, 3× USB-A, HDMI 2.1, RJ-45, SD Express"],
            ["Audio", "Dynaudio Hi-Res + Nahimic 3D"],
            ["Teclado", "Mecánico RGB SteelSeries"],
            ["Chasis", "Aleación magnesio y aluminio"],
            ["Peso", "3.6 kg"],
            ["Batería", "99.9 Wh Li-Ion 330W"],
            ["Sistema Operativo", "Windows 11 Pro"]
        ]
    },
    {
        id: "P0004",
        nombre: "Logitech G915 TKL Lightspeed",
        precio: "$149.99",
        descripcion:
            "El Logitech G915 TKL Lightspeed combina tecnología inalámbrica profesional, switches mecánicos GL de perfil bajo, y RGB LIGHTSYNC por tecla en un diseño compacto y premium.",
        especificaciones: [
            ["Modelo", "Logitech G915 TKL Lightspeed"],
            ["Tipo", "Mecánico inalámbrico TKL"],
            ["Conectividad", "Lightspeed 2.4 GHz, Bluetooth, USB-C"],
            ["Retroiluminación", "RGB LIGHTSYNC 16.8 M de colores"],
            ["Batería", "40 h con RGB activo"],
            ["Material", "Aluminio aeronáutico y plástico reforzado"],
            ["Dimensiones", "368 × 150 × 22 mm"],
            ["Peso", "810 g"],
            ["Compatibilidad", "Windows, macOS, ChromeOS, iPadOS"],
            ["Colores", "Carbono y blanco edición especial"]
        ]
    },
    {
        id: "P0005",
        nombre: "Logitech MX Master 4S",
        precio: "$119.99",
        descripcion:
            "El Logitech MX Master 4S ofrece precisión profesional (hasta 16,000 DPI), rueda MagSpeed electromagnética, ergonomía avanzada y conectividad dual Bluetooth / Logi Bolt.",
        especificaciones: [
            ["Modelo", "Logitech MX Master 4S"],
            ["Tipo", "Mouse inalámbrico profesional"],
            ["Sensor", "Darkfield 800–16,000 DPI"],
            ["Conectividad", "Bluetooth + Logi Bolt USB"],
            ["Rueda", "MagSpeed electromagnética"],
            ["Botones", "7 programables"],
            ["Batería", "500 mAh (3 min = 1 día)"],
            ["Puerto", "USB-C"],
            ["Compatibilidad", "Windows, macOS, Linux, iPadOS"],
            ["Color", "Grafito / Gris espacial"]
        ]
    },
    {
        id: "P0006",
        nombre: "HP Omen 27c QHD Curved",
        precio: "$299.99",
        descripcion:
            "El HP Omen 27c QHD 165 Hz ofrece pantalla curva 27″, resolución QHD, panel VA, y 1 ms de respuesta, con FreeSync™ Premium y G-SYNC®.",
        especificaciones: [
            ["Modelo", "HP Omen 27c QHD"],
            ["Pantalla", "27″ curva 1500R QHD"],
            ["Panel", "VA 99 % sRGB / 95 % DCI-P3"],
            ["Respuesta", "1 ms GtG"],
            ["Brillo", "400 nits HDR400"],
            ["Conectividad", "DisplayPort, 2× HDMI 2.0, 2× USB-A, USB-B"],
            ["Soporte", "Altura, inclinación y rotación ajustable"],
            ["Iluminación", "RGB ambiental Omen Light Studio"],
            ["Peso", "6.9 kg"],
            ["Compatibilidad", "Windows, macOS, PS5, Xbox Series X/S"]
        ]
    },
    {
        id: "P0007",
        nombre: "Dell Alienware AW3423DW",
        precio: "$899.99",
        descripcion:
            "El Dell Alienware AW3423DW combina tecnología QD-OLED, 175 Hz, 0.1 ms, y compatibilidad G-SYNC Ultimate en una pantalla ultrawide curva 34″ (3440×1440).",
        especificaciones: [
            ["Modelo", "Dell Alienware AW3423DW"],
            ["Pantalla", "34.18″ curva (1800R)"],
            ["Tipo de panel", "QD-OLED"],
            ["Contraste", "Infinito:1"],
            ["Color", "99.3 % DCI-P3 / 149 % sRGB"],
            ["Sincronización", "NVIDIA G-SYNC Ultimate"],
            ["HDR", "True Black 400"],
            ["Conectividad", "DisplayPort, HDMI, USB-A, USB-B, salida audio"],
            ["Soporte", "Altura, inclinación y rotación"],
            ["Peso", "6.9 kg"],
            ["Materiales", "Chasis metálico Lunar Light"]
        ]
    },
    {
        id: "P0008",
        nombre: "Sony WH-1000XM6",
        precio: "$458.00",
        descripcion:
            "Los Sony WH-1000XM6 ofrecen cancelación de ruido inteligente con IA, Bluetooth 5.4 multipunto, hasta 45 horas de batería, y audio Hi-Res LDAC.",
        especificaciones: [
            ["Modelo", "Sony WH-1000XM6"],
            ["Tipo", "Over-Ear inalámbricos ANC"],
            ["Bluetooth", "5.4 multipunto"],
            ["Micrófonos", "8 con beamforming"],
            ["Batería", "45 h (35 h con ANC)"],
            ["Carga rápida", "10 min = 5 h"],
            ["Puerto", "USB-C"],
            ["Controles", "Táctiles + voz (Google, Alexa, Siri)"],
            ["Peso", "250 g"],
            ["Colores", "Negro, Plata Platino, Azul Medianoche"]
        ]
    },
    {
        id: "P0009",
        nombre: "Samsung Galaxy Tab S10 Ultra",
        precio: "$979.99",
        descripcion:
            "La Samsung Galaxy Tab S10 Ultra combina pantalla AMOLED 14.6″ 120 Hz, Snapdragon 8 Gen 3, S Pen incluido y modo DeX para productividad profesional.",
        especificaciones: [
            ["Modelo", "Samsung Galaxy Tab S10 Ultra"],
            ["Pantalla", "14.6″ AMOLED 120 Hz HDR10+"],
            ["Procesador", "Snapdragon 8 Gen 3"],
            ["Almacenamiento", "512 GB + microSD hasta 1 TB"],
            ["Cámaras traseras", "13 MP + 8 MP"],
            ["Cámara frontal", "Dual 12 MP"],
            ["Batería", "11,200 mAh (45W carga rápida)"],
            ["Audio", "4 altavoces AKG Dolby Atmos"],
            ["Material", "Aluminio Armor 5.5 mm"],
            ["Peso", "732 g"]
        ]
    },
    {
        id: "P0010",
        nombre: "MSI Vector A18 HX",
        precio: "$2,999.99",
        descripcion:
            "La MSI Vector A18 HX combina un AMD Ryzen 9 9955HX, RTX 5080, 32 GB DDR5 y pantalla QHD+ 240 Hz en un diseño metálico elegante.",
        especificaciones: [
            ["Modelo", "MSI Vector A18 HX"],
            ["CPU", "AMD Ryzen 9 9955HX (16C/32T)"],
            ["GPU", "NVIDIA RTX 5080 16 GB GDDR7"],
            ["RAM", "32 GB DDR5 (expandible a 96 GB)"],
            ["Almacenamiento", "SSD NVMe PCIe 1 TB"],
            ["Pantalla", "18″ QHD+ 240 Hz"],
            ["Enfriamiento", "Cooler Boost 5 (cámara de vapor)"],
            ["Puertos", "2× USB-C, 3× USB-A, HDMI 2.1, RJ-45, microSD"],
            ["Teclado", "RGB SteelSeries"],
            ["Peso", "3.1 kg"],
            ["Batería", "99.9 Wh 280W"],
            ["Sistema Operativo", "Windows 11 Home/Pro"]
        ]
    }
];


const  botones_locos = document.getElementById("btn_action");
botones_locos.addEventListener("click", function() {
    alert("hice click");
})