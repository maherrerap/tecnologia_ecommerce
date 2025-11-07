document.addEventListener("DOMContentLoaded", () => {

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
