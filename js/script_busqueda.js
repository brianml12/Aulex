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
    debugger;
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
        "Estado de México",
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
    return simulatedResults.filter(result => result.toUpperCase().startsWith(query.toUpperCase()));
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

function redirectToStatePage(stateName) {
    // Redirige a la página "state.html" con el estado como parámetro en la URL
    location.href = `state.html?estado=${encodeURIComponent(stateName)}`;
}

// ...

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
                redirectToStatePage(getAbreviacionEstado(result)); // Redirige al estado seleccionado
            });
            dropdown.appendChild(option);
        });
    }
}

function getAbreviacionEstado(estado) {
    // Se crea un arreglo de tupla en el cual se guarda en el estado y su abreviacion
    debugger;
    let estadosMexico = {
      "Aguascalientes": "AG",
      "Baja California": "BC",
      "Baja California Sur": "BCS",
      "Campeche": "CAMP",
      "Chiapas": "CHIS",
      "Chihuahua": "CHIH",
      "Coahuila": "COAH",
      "Colima": "COL",
      "Ciudad de México": "CDMX",
      "Durango": "DGO",
      "Guanajuato": "GTO",
      "Guerrero": "GRO",
      "Hidalgo": "HGO",
      "Jalisco": "JAL",
      "Estado de México": "ESTMX",
      "Michoacán": "MICH",
      "Morelos": "MOR",
      "Nayarit": "NAY",
      "Nuevo León": "NL",
      "Oaxaca": "OAX",
      "Puebla": "PUE",
      "Querétaro": "QRO",
      "Quintana Roo": "QR",
      "San Luis Potosí": "SLP",
      "Sinaloa": "SIN",
      "Sonora": "SON",
      "Tabasco": "TAB",
      "Tamaulipas": "TAMPS",
      "Tlaxcala": "TLAX",
      "Veracruz": "VER",
      "Yucatán": "YUC",
      "Zacatecas": "ZAC"
    };
    // Se extrae  
    let abreviacionEstado = estadosMexico[estado];
    // Verificar si el estado existe en la estructura de datos
    if (abreviacionEstado) {
      return abreviacionEstado;
    } else {
      return "";
    }
  }