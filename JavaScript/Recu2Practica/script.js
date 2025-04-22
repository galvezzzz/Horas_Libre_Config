window.onload = function(){
	cargarTabla();
}

function cargarTabla(){
	animals.forEach(e => {
		let nombre = e.name;
		let especie = e.species;
		let gustos = e.foods.likes;
		let noGustos = e.foods.dislikes;
		document.querySelector("#tablaAnimales").innerHTML = "<tr><td>" + nombre + "</td><td>" + especie + "</td><td>" + gustos + "</td><td>" + noGustos + "</td><td></tr>";
	});
}