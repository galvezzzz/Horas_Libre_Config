window.onload = function () {
	cargarTabla();
	document.querySelector("#btnGuardar").addEventListener("click", btnGuardar);
}

function cargarTabla() {
	let tabla = document.querySelector("#tabla");
	let nuevo = "";

	animals.forEach((e, index) => {
		nuevo += `<tr id="row${index}">
            <td>${e.name}</td>
            <td>${e.species}</td>
            <td>${e.foods.likes}</td>
            <td>${e.foods.dislikes}</td>
            <td><button onclick="btnEditar(${index})">Editar</button></td>
        </tr>`;
	});

	tabla.innerHTML += nuevo;
}

let filaSeleccionada;

function btnEditar(index) {
	// Resetear formulario
	const form = document.querySelector("#form");
	form.reset();

	// Quitar clase de la fila previamente seleccionada
	if (filaSeleccionada) {
		filaSeleccionada.classList.remove("table-success");
	}

	// Seleccionar la nueva fila y marcarla
	filaSeleccionada = document.querySelector(`#row${index}`);
	filaSeleccionada.classList.add("table-success");

	// Mandar datos al form
	let inputNombre = document.querySelector("#inputNombre");
	inputNombre.value = animals[index].name;

	// Agregar razas
	let select = document.querySelector("#select");

	if (animals[index].species === "cat") {
		select.innerHTML = `
		<option>Siamés</option>
		<option>Siberiano</option>
		<option>Persa</option>
		`
	};

	if (animals[index].species === "dog") {
		select.innerHTML = `
		<option>Turco</option>
		<option>Rottweiler</option>
		<option>Bulldog</option>
		`
	};

	actualizarJson(index);

}

function actualizarJson(index) {
	// Rellenar JSON
	let jsonText = document.querySelector("#jsonText");
	jsonText.innerHTML = `<pre>${JSON.stringify(animals[index], null, 2)}</pre>`;
}

function btnGuardar(e) {

	let raza, sexo, peso, info;

	// Comprobar selección
	let nombre = document.querySelector("#inputNombre");
	if (nombre.value != "") {

		// Comprobar raza
		const select = document.querySelector("#select");
		raza = select.value;
		console.log(raza);

		// Comprobar sexo
		const macho = document.querySelector("#macho");
		const hembra = document.querySelector("#hembra")

		if (macho.checked) {
			sexo = macho.value;
		} else if (hembra.checked) {
			sexo = hembra.value;
		} else {
			alert("Debe seleccionar sexo.")
			return;
		}

		console.log(sexo);

		// Comprobar peso
		const peso = document.querySelector("#peso");
		let value = e.target.value;

		// Comprobar que tenga al menos 1 revisión


		// Comprobar diagnóstico

		actualizarJson(index)
	} else {
		alert("Selecciona un animal.");
	}

}

document.getElementById("peso").addEventListener("input", function (e) {
	let value = e.target.value;

	// Eliminar todo lo que no sea dígito
	value = value.replace(/\D/g, "");
  
	// Insertar el punto automáticamente después de los primeros dos dígitos
	if (value.length >= 3) {
	  value = value.slice(0, 2) + '.' + value.slice(2, 4);
	} 
  
	e.target.value = value;
});
