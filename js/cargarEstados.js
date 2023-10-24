document.addEventListener("DOMContentLoaded",()=>{
    var urlParams = new URLSearchParams(window.location.search);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./assets/estados.json", true);
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var estadoEncontrado = data.find(function (estado) {
            return estado.abreviacionEstado === urlParams.get("estado");
        });
        if(estadoEncontrado){
            document.getElementById("titulo").innerHTML = estadoEncontrado.nombreEstado;
            document.getElementById("portadaEstado").src = estadoEncontrado.portadaEstado;
            //Mostrar la informacion basica
            document.getElementById("nombre_completo").textContent = estadoEncontrado.infoBasicaEstado[0].nombreCompleto;
            document.getElementById("capital").textContent = estadoEncontrado.infoBasicaEstado[0].capital;
            document.getElementById("idiomas").textContent = estadoEncontrado.infoBasicaEstado[0].idiomas;
            document.getElementById("subdivisiones").textContent = estadoEncontrado.infoBasicaEstado[0].subdivisiones;
            document.getElementById("fundacion").textContent = estadoEncontrado.infoBasicaEstado[0].fundacion;
            document.getElementById("superficie").textContent = estadoEncontrado.infoBasicaEstado[0].superficie;
            document.getElementById("poblacion").textContent = estadoEncontrado.infoBasicaEstado[0].poblacion;
            document.getElementById("gentilicio").textContent = estadoEncontrado.infoBasicaEstado[0].gentilicio;
            document.getElementById("lema").textContent = estadoEncontrado.infoBasicaEstado[0].lema;
            //Mostrar el mapa del lugar del estado
            document.getElementById("lugar_img").src = estadoEncontrado.mapaEstadoImg[0].srcEstadoImg;
            document.getElementById("lugar_img").alt = estadoEncontrado.mapaEstadoImg[0].textoAltImg;
            //Mostrar los puntos turisticos
            document.getElementById("punto_turistico_nombre_1").textContent = estadoEncontrado.puntosTuristicosEstado[0].punto_turistico_nombre;
            document.getElementById("punto_turistico_descripcion_1").innerHTML = estadoEncontrado.puntosTuristicosEstado[0].punto_turistico_descripcion;
            document.getElementById("punto_turistico_img_1").src = estadoEncontrado.puntosTuristicosEstado[0].punto_turistico_img;
            document.getElementById("punto_turistico_img_2").src = estadoEncontrado.puntosTuristicosEstado[1].punto_turistico_img;
            document.getElementById("punto_turistico_nombre_2").textContent = estadoEncontrado.puntosTuristicosEstado[1].punto_turistico_nombre;
            document.getElementById("punto_turistico_descripcion_2").innerHTML = estadoEncontrado.puntosTuristicosEstado[1].punto_turistico_descripcion;
            document.getElementById("punto_turistico_nombre_3").textContent = estadoEncontrado.puntosTuristicosEstado[2].punto_turistico_nombre;
            document.getElementById("punto_turistico_descripcion_3").innerHTML = estadoEncontrado.puntosTuristicosEstado[2].punto_turistico_descripcion;
            document.getElementById("punto_turistico_img_3").src = estadoEncontrado.puntosTuristicosEstado[2].punto_turistico_img;
            document.getElementById("punto_turistico_img_4").src = estadoEncontrado.puntosTuristicosEstado[3].punto_turistico_img;
            document.getElementById("punto_turistico_nombre_4").textContent = estadoEncontrado.puntosTuristicosEstado[3].punto_turistico_nombre;
            document.getElementById("punto_turistico_descripcion_4").innerHTML = estadoEncontrado.puntosTuristicosEstado[3].punto_turistico_descripcion;
            document.getElementById("punto_turistico_nombre_5").textContent = estadoEncontrado.puntosTuristicosEstado[4].punto_turistico_nombre;
            document.getElementById("punto_turistico_descripcion_5").innerHTML = estadoEncontrado.puntosTuristicosEstado[4].punto_turistico_descripcion;
            document.getElementById("punto_turistico_img_5").src = estadoEncontrado.puntosTuristicosEstado[4].punto_turistico_img;
        }
    }
    };
    xhr.send();
});