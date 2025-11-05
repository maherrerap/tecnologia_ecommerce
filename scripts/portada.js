// === PORTADA COLD TECH – INTERACTIVIDAD ===

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {


    // Referencia al botón
    const button = document.getElementById("btn-actionjd");

    button.addEventListener('click', function (event) {
        console.log("clicked");
    })


    // Verificar que el botón exista
    if (button) {
        button.addEventListener("click", () => {
            alert("Hiciste clic en el botón principal ");
        });
    } else {
        console.warn("No se encontró el botón con id='btn-actionjd'");
    }

    // Aquí puedes agregar más funciones de interacción
    // Ejemplo: funcionalidad para el botón Buscar
    const searchBtn = document.querySelector(".search-btn");
    const searchInput = document.querySelector(".search-bar");

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => {
            const texto = searchInput.value.trim();
            if (texto) {
                alert("Buscando productos relacionados con: ${texto}");
            } else {
                alert("Por favor, escribe algo en la barra de búsqueda.");
            }
        });
    }
});