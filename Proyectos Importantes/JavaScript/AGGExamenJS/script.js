window.onload = function () {
    cargarTabla();
    document.getElementById("btnFiltrar").addEventListener("click", seleccionarFiltro);
    document.querySelector("#btnAnyadirSerie").addEventListener("click", anyadirSerie);
    document.getElementById("btnOrdenar").addEventListener("click", seleccionarOrdenar);
}

function cargarTabla() {
    let tabla = document.querySelector("#tabla");
    let nuevo = "";

    netflix.forEach((e, index) => {
        nuevo += `<tr id="row${index}">
            <td>${e.título}</td>
            <td>${e.Año}</td>
            <td>${e.Temporadas}</td>
        </tr>`;
    });

    tabla.innerHTML += nuevo;
}

function ordenarPorTitulo() {

    netflix.sort(netflix.titulo);
    console.log(netflix);

    let tabla = document.querySelector("#tabla2");
    let nuevo = "";
    tabla.innerHTML = ""

    netflix.forEach((e, index) => {
        nuevo += `<tr id="row${index}">
            <td>${e.título}</td>
            <td>${e.Año}</td>
            <td>${e.Temporadas}</td>
        </tr>`;
    });

    tabla.innerHTML += nuevo;
}

function ordenarPorAño() {
    netflix.sort((a, b) => b.Año - a.Año);
    console.log(netflix);

    let tabla = document.querySelector("#tabla2");
    let nuevo = "";
    tabla.innerHTML = ""
    netflix.forEach((e, index) => {
        nuevo += `<tr id="row${index}">
            <td>${e.título}</td>
            <td>${e.Año}</td>
            <td>${e.Temporadas}</td>
        </tr>`;
    });

    tabla.innerHTML += nuevo;
}

function seleccionarOrdenar() {
    let inputSeleccionado = document.getElementById("ordenar");

    if (inputSeleccionado.value === "titulo") {
        ordenarPorTitulo();
    } else if (inputSeleccionado.value === "año") {
        ordenarPorAño();
    }
}

function seleccionarFiltro() {
    let inputSeleccionado = document.getElementById("filtrar");

    if (inputSeleccionado.value === "titulo") {
        filtrarPorTitulo();
    } else if (inputSeleccionado.value === "clasificacion") {
        filtrarPorClasificacion();
    }
}

function filtrarPorTitulo() {
    let inputValue = document.getElementById("inputValue").value;
    document.querySelector("#resultadoBusqueda").innerHTML = "";
    netflix.forEach(e => {
        if (e.título == inputValue) {
            document.querySelector("#resultadoBusqueda").innerHTML += "Identificador: " + e.identificador + "<br>" +
                "Año: " + e.Año + "<br>" +
                "Título: " + e.título + "<br>" +
                "Capítulos: " + e.Capítulos + "<br>" +
                "Temporadas: " + e.Temporadas + "<br>" +
                "Clasificación: " + e.clasificación + "<br>" +
                "Género: " + e.género + "<br>" +
                "Director: " + e.director + "<br>" +
                "Protagonista: " + e.protagonistas + "<br>" +
                "Descripción: " + e.descripción + "<br><br>";
        }
    })
}

function filtrarPorClasificacion() {
    let inputValue = document.getElementById("inputValue").value;
    document.querySelector("#resultadoBusqueda").innerHTML = "";
    netflix.forEach(e => {
        if (e.clasificación == inputValue) {
            document.querySelector("#resultadoBusqueda").innerHTML += "Identificador: " + e.identificador + "<br>" +
                "Año: " + e.Año + "<br>" +
                "Título: " + e.título + "<br>" +
                "Capítulos: " + e.Capítulos + "<br>" +
                "Temporadas: " + e.Temporadas + "<br>" +
                "Clasificación: " + e.clasificación + "<br>" +
                "Género: " + e.género + "<br>" +
                "Director: " + e.director + "<br>" +
                "Protagonista: " + e.protagonistas + "<br>" +
                "Descripción: " + e.descripción + "<br><br>";
        }
    })
}

function anyadirSerie(event) {
    event.preventDefault();

    let titulo = document.querySelector("#anyadirTitulo").value;
    let año = parseInt(document.querySelector("#anyadirAnyo").value);
    let temporadas = parseInt(document.querySelector("#anyadirTemporadas").value);
    let genero = [];
    let clasificacion = document.getElementById("14").checked ? "TV-14" : "TV-MA";

    const revision = document.querySelectorAll('input[name="genero"]:checked');

    revision.forEach(e => {
        genero.push(e.value);
    });


    let fecha = año;

    let fechaMinima = 1980;
    let fechaMaxima = 2025;


    if (titulo !== "" && temporadas !== "" && genero !== "" && clasificacion !== "" && año) {

        if (fecha >= fechaMinima && fecha < fechaMaxima) {

            let nuevaSerie = {
                "identificador": 100000,
                "título": titulo,
                "Año": año,
                "Temporadas": temporadas,
                "clasificación": clasificacion,
                "género": genero,
            };

            alert(JSON.stringify(nuevaSerie));
            netflix.push(nuevaSerie);

            console.log("Serie añadida:", nuevaSerie);
            console.log(netflix);

            document.querySelector("#formulario").reset();

        } else {
            alert("La fecha debe estar entre el 1980 y este año (2025)");
            return;
        }

    } else {
        alert("Todos los campos son obligatorios");
        return;
    }
}




