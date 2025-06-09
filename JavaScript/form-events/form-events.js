window.onload = function () {
	let nombre = document.getElementById("txtName");

	nombre.addEventListener("change", () => {
		let nombreValue = nombre.value.trim();
		if (nombreValue.length < 7 || !/^[A-Za-z\s]+$/.test(nombreValue) || !/\s/.test(nombreValue)) {
			alert("El nombre debe tener al menos 7 caracteres, contener solo letras, y al menos un nombre y un apellido.");
			document.getElementById("txtName").focus();
		} else {
			nombre.value = nombreValue.toUpperCase();
			console.log("Nombre válido:", nombreValue);
		}
	});

}



function verificarFormulario() {



}
