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


// Para saber cuantas filas hay que poner, se haría de la siguiente manera:
// Longitud de la lista / 4. Se usará la función Math.ceil
// Esto con el objetivo de saber cuantas class = "row mb-4" se tienen que hacer.

for (let i = 0; i < Math.ceil(products.length/4); i++){
    const productos_div = document.getElementById("products");
    const nuevo_div = document.createElement("div");
    nuevo_div.classList.add("row", "mb-4");
    productos_div.appendChild(nuevo_div);
}

// Una vez creados los div de filas para bootstrap, se procede a crear las cartas
// dentro de dichos div. Para esto se utilizará la función:
// document. querySelectorAll(".row"); La cual selecciona todos los elementos del documento que tengan la clase "row"

const filas_prod = document.querySelectorAll(".row");

// Se recorre todas las filas para añadir el div de la columna
let contador = 0;

filas_prod.forEach(fila => {
   for (let i = 0; i < 4 && contador < products.length; i++){
       const nueva_columna = document.createElement("div");
       nueva_columna.classList.add("col");
       fila.appendChild(nueva_columna);
       contador++;
   }
});

// De igual manera, por cada columna, se tienen que añadir una carta del producto

const columnas_prod = document.querySelectorAll(".col");

// Se recorre todas las columnas para añadir el div de la carta

columnas_prod.forEach(columna => {
    const nueva_carta = document.createElement("div");
    nueva_carta.classList.add("card","h-100","d-flex", "flex-column");
    columna.appendChild(nueva_carta);
});

// Ahora se procede a insertar las imagenes dentro de cada carta siguiendo el mismo
// procedimiento que antes

const cartas_prod = document.querySelectorAll(".card.h-100.d-flex.flex-column");

// Se recorre la lista de productos para poner la imagen en ellos
products.forEach((producto, index) => {
    const imagenes_prod = document.createElement("img");
    imagenes_prod.src = producto.image;
    imagenes_prod.alt = producto.name;
    imagenes_prod.classList.add("card-img-top");

    cartas_prod[index].appendChild(imagenes_prod);
});

// Siguiendo la misma lógica de la imagen, se procede a agregar
// el cuerpo de la carta

cartas_prod.forEach(carta => {
    const cuerpo_carta = document.createElement("div");
    cuerpo_carta.classList.add("card-body");
    carta.appendChild(cuerpo_carta);
});

// Se añade el título de la carta dentro del div de body

// Por lo que es necesario encontrar todos los div que tengan clase "card-body"
const cartas_body = document.querySelectorAll(".card-body");

products.forEach((producto, index) => {
    const titulo_prod = document.createElement("h5");
    titulo_prod.textContent = producto.name;
    titulo_prod.classList.add("card-title");

    cartas_body[index].appendChild(titulo_prod);
});

// Se procede a incluir el texto descriptivo de cada uno

products.forEach((producto, index) => {
   const descripcion_prod = document.createElement("p");
   descripcion_prod.textContent = producto.description;
   cartas_body[index].appendChild(descripcion_prod);
});

// Se procede a incluir el botón de navegación pertinente

products.forEach((producto, index) => {
    const boton_detalle = document.createElement("a");
    boton_detalle.href = producto.link;
    boton_detalle.textContent = "Ver Detalle";
    boton_detalle.classList.add("btn", "btn-primary");
    cartas_body[index].appendChild(boton_detalle);
});


// CLASE 2025/10/31

const bton_clase = document.getElementById("btn-action");

// Se crea un LISTENER

/*
bton_clase.addEventListener("click", function() {
    alert("WASAAAAAAAAA");
})
*/
/*
bton_clase.addEventListener("click", function(event) {
    alert("Wasaaaa Pt2");
    console.log(event);
})
*/
/*
const email_recuperado = document.getElementById("email_clase");

bton_clase.addEventListener("click", function() {
    alert(email_recuperado.value);
})

// Escuchador del formulario

const formulario = document.getElementById("email_clase");

formulario.addEventListener("submit",function () {
    event.preventDefault();
})
 */
/*
const button = document.getElementById("btn-action");
button.addEventListener("click", function(){
    alert("el diablaso");
})*/

/*
const button = document.getElementById("btn-action");
button.addEventListener("click", function(event){
    console.log(event);
})*/