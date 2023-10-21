const searchInput = document.getElementById("search-input");
const dropdown = document.getElementById("results");

searchInput.addEventListener("input", function () {
    const query = searchInput.value;
    if (query.trim() === "") {
        dropdown.style.display = "none";
        dropdown.innerHTML = "";
        return;
    }

    const results = getResults(query);
    displayResults(results);
});

function getResults(query) {
    // Realiza tu búsqueda aquí y obtén los resultados reales en lugar de las sugerencias simuladas.
    // Por ahora, usaremos resultados simulados.
    const simulatedResults = [
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "Chiapas",
        "Chihuahua",
        "Coahuila",
        "Colima",
        "Ciudad de México",
        "Durango",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "México",
        "Michoacán",
        "Morelos",
        "Nayarit",
        "Nuevo León",
        "Oaxaca",
        "Puebla",
        "Querétaro",
        "Quintana Roo",
        "San Luis Potosí",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz",
        "Yucatán",
        "Zacatecas"
      ];
    return simulatedResults.filter(result => result.toLowerCase().includes(query.toLowerCase()));
}

function displayResults(results) {
    dropdown.innerHTML = "";
    if (results.length === 0) {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
        results.forEach(result => {
            const option = document.createElement("div");
            option.className = "dropdown-option";
            option.textContent = result;
            option.addEventListener("click", () => {
                searchInput.value = result;
                dropdown.style.display = "none";
            });
            dropdown.appendChild(option);
        });
    }
}

// Cierra el dropdown cuando se hace clic en otra parte de la página
document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target) && e.target !== searchInput) {
        dropdown.style.display = "none";
    }
});

// Evita que el formulario se envíe al hacer clic en un resultado
document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
});
