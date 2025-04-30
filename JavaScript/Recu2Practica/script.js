window.onload = function(){
	cargarTabla();
}

function cargarTabla(){
    let tabla = document.querySelector("#tabla");
    let nuevo = "";

	animals.forEach((e, index) => {
		nuevo += `<tr id="row${index}">
		<td>${e.name}</td>
		<td>${e.species}</td>
		<td>${e.foods.likes}</td>
		<td>${e.foods.dislikes}</td>
		<td><button id="btnEditar">Editar</button></td>
		</tr>`
	});

	tabla.innerHTML += nuevo;
}

function destacarFila(){
	let btnSeleccionado = document.querySelector("#btnEditar");
}