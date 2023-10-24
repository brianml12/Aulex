function cargarJSON() {
    fetch('./assets/estados.json') // Ruta al archivo JSON
        .then(response => response.json())
        .then(data => {
            const estado = data.find(e => e.nombreEstado === "Michoacán"); // Cambia "Michoacán" por el estado deseado

            // Establecer el evento onclick para redirigir a la página con el parámetro
            const area = document.getElementById("MIC");
            area.onclick = function () {
                location.href = `state.html?estado=${estado.nombreEstado}`;
            };
        })
        .catch(error => {
            console.error('Error al cargar el JSON', error);
        });
}

// Llama a la función para cargar el JSON cuando se carga la página
window.addEventListener('load', cargarJSON);