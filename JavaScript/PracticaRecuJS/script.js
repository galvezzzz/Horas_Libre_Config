window.onload = function(){
    
    
    document.querySelector("#btnMostrar").addEventListener("click", mostrarEstudiantes);
    document.querySelector("#btnBuscar").addEventListener("click", filtrarPorNombre);
}

let arrayEstudiantes = [
    { nombre: "Lola", edad: 12, curso: 1, contacto: {email: "lola@gmail.com", telefono:"823289492"}, fecha: "2025-01-01"},
    { nombre: "Paco", edad: 15, curso: 3, contacto: {email: "paco@gmail.com", telefono:"1242654523"}, fecha: "2024-02-05"},
    { nombre: "Miguel", edad: 18, curso: 4, contacto: {email: "miguel@gmail.com", telefono:"243654674"}, fecha: "2020-12-12"},
    { nombre: "María", edad: 10, curso: 1, contacto: {email: "maria@gmail.com", telefono:"39849543"}, fecha: "2024-06-01"},
    { nombre: "Luis", edad: 21, curso: 2, contacto: {email: "luis@gmail.com", telefono:"6456345653"}, fecha: "2022-09-12"},
];

arrayEstudiantes.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

function mostrarEstudiantes(){
	arrayEstudiantes.forEach(e => {
		document.querySelector("#estudiantes").innerHTML += e.nombre + "<br>";
	});
}

function filtrarPorNombre(){
    let inputValue = document.getElementById("inputValue").value;
    document.querySelector("#resultadoBusqueda").innerHTML = "";

    arrayEstudiantes.forEach(e=>{
        if(e.nombre == inputValue){
            document.querySelector("#resultadoBusqueda").innerHTML = inputValue;
        }
    })
}

function filtrarPorEdad(){

}

function filtrarPorCurso(){

}




