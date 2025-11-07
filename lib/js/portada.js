document.addEventListener("DOMContentLoaded", () => {


    const button = document.getElementById("btn-actionjd");

    button.addEventListener('click', function (event) {
        console.log("clicked");
    })


    if (button) {
        button.addEventListener("click", () => {
            alert("Hiciste clic en el botón principal ");
        });
    } else {
        console.warn("No se encontró el botón con id='btn-actionjd'");
    }

    const searchBtn = document.querySelector(".search-btn");
    const searchInput = document.querySelector(".search-bar");

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => {
            const texto = searchInput.value.trim();
            if (texto) {
                alert(`Buscando productos relacionados con: "${texto}" `);
            } else {
                alert("Por favor, escribe algo en la barra de búsqueda.");
            }
        });
    }
});
