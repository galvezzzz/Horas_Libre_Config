window.onload = function () {
	cargarTabla();
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

	if(animals[index].species === "cat"){
		select.innerHTML = `
		<option>Siamés</option>
		<option>Siberiano</option>
		<option>Persa</option>
		`
	};

	if(animals[index].species === "dog"){
		select.innerHTML = `
		<option>Turco</option>
		<option>Rottweiler</option>
		<option>Bulldog</option>
		`
	};

	// Rellenar JSON
	let jsonText = document.querySelector("#jsonText");
	jsonText.innerHTML  =`<pre>${JSON.stringify(animals[index], null, 2)}</pre>`;
}

function btnGuardar(){
	
}