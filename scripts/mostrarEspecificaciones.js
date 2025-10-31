// Archivo: mostrarEspecificaciones.js
const idActual = document.body.dataset.id;
const producto = productos.find(p => p.id === idActual);

if (producto) {
    const tablaContenedor = document.getElementById("tablaEspecificaciones");

    const tabla = document.createElement("table");
    tabla.classList.add("table", "table-striped", "table-bordered", "table-sm", "shadow-soft", "tabla-especificaciones");

    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr class="table-light">
      <th class="text-center">Categoría</th>
      <th class="text-start">Especificación</th>
    </tr>
  `;
    tabla.appendChild(thead);

    const tbody = document.createElement("tbody");
    producto.especificaciones.forEach(([categoria, valor]) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td class="text-center">${categoria}</td>
          <td>${valor}</td>
        `;
        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
    tablaContenedor.appendChild(tabla);
}