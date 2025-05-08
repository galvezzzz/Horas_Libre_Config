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
	e.preventDefault();

	let raza, sexo, peso, diagnostico, revision1 = [];

	const revision2 = {
		oidos: document.getElementById("oidos2").checked ? "Sí" : "No",
		nariz: document.getElementById("nariz2").checked ? "Sí" : "No",
		boca: document.getElementById("boca2").checked ? "Sí" : "No",
		ojos: document.getElementById("ojos2").checked ? "Sí" : "No"
	  };

	// Comprobar selección
	let nombre = document.querySelector("#inputNombre");
	if (nombre.value != "") {

		// Comprobar raza
		const select = document.querySelector("#select");
		raza = select.value;

		// Comprobar sexo
		sexo = form.elements["sexo"].value;

		if (sexo === "") {
			alert("Debe seleccionar sexo.")
			return;
		}


		// Comprobar peso
		peso = document.querySelector("#peso").value;

		if (peso.length > 0 && peso.length < 5) {
			alert("Debe introducir el peso completo (NN.NN).")
			return;
		} else if (peso.length == 0) {
			alert("Ingresa el peso (NN.NN).")
			return;
		}
		console.log(peso);

		// Comprobar revisión
		let oidos = document.querySelector("#oidos");
		let nariz = document.querySelector("#nariz");
		let boca = document.querySelector("#boca");
		let ojos = document.querySelector("#ojos");

		if (!oidos.checked && !nariz.checked && !boca.checked && !ojos.checked) {
			alert("Debes seleccionar al menos una revisión.");
		} else {
			// Revisión 1
			const rev = document.querySelectorAll('input[name="revision1"]:checked');

			rev.forEach(e => {
				revision1.push(e.value);
			});

			// Comprobar diagnóstico
			diagnostico = document.querySelector("#textarea").value;
			if (textarea.value === "") {
				alert("Ingresa un diagnóstico.");
			} else {
				// Guardamos los datos y poblamos el JSON
				let nombre = document.querySelector("#inputNombre");
				let index = animals.findIndex(animal => animal.name === nombre.value);

				if (raza.length != 0 && sexo != "" && peso != "" && diagnostico.length != 0 && revision2.length != 0) {
					animals[index].raza = raza;
					animals[index].sexo = sexo;
					animals[index].peso = peso;
					animals[index].diagnostico = diagnostico;
					animals[index].revision2 = revision2;
				}

				actualizarJson(index);
			}
		}
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
