window.onload = function(){
    document.querySelector("#btnMostrar").addEventListener("click", mostrarEstudiantes);
    document.getElementById("btnBuscar").addEventListener("click", seleccionarFiltro);
    document.querySelector("#btnAnyadirAlumno").addEventListener("click", anyadirAlumno);
    
}

let arrayEstudiantes = [
    { nombre: "Lola", edad: 12, curso: 1, contacto: {email: "lola@gmail.com", telefono:"823289492"}, fecha: "2025-01-01"},
    { nombre: "Paco", edad: 15, curso: 3, contacto: {email: "paco@gmail.com", telefono:"1242654523"}, fecha: "2024-02-05"},
    { nombre: "Miguel", edad: 15, curso: 4, contacto: {email: "miguel@gmail.com", telefono:"243654674"}, fecha: "2020-12-12"},
    { nombre: "María", edad: 10, curso: 1, contacto: {email: "maria@gmail.com", telefono:"39849543"}, fecha: "2024-06-01"},
    { nombre: "Luis", edad: 15, curso: 2, contacto: {email: "luis@gmail.com", telefono:"6456345653"}, fecha: "2022-09-12"},
];

arrayEstudiantes.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

function mostrarEstudiantes(){
    document.querySelector("#estudiantes").innerHTML = "";

	arrayEstudiantes.forEach(e => {
		document.querySelector("#estudiantes").innerHTML += e.nombre + "<br>";
	});
}

function seleccionarFiltro(){
    let inputSeleccionado = document.getElementById("filtrar");

    if (inputSeleccionado.value === "nombre") {
      filtrarPorNombre();
    } else if (inputSeleccionado.value === "curso") {
      filtrarPorCurso();
    } else if (inputSeleccionado.value === "edad") {
      filtrarPorEdad();
    }
}

function filtrarPorNombre(){
    let inputValue = document.getElementById("inputValue").value;
    document.querySelector("#resultadoBusqueda").innerHTML = "";
    arrayEstudiantes.forEach(e=>{
        if(e.nombre == inputValue){
            document.querySelector("#resultadoBusqueda").innerHTML += "Nombre: " + e.nombre + "<br>" +
            "Edad: " + e.edad + "<br>" +
            "Curso: "+ e.curso + "<br>" +
            "Email: "+ e.contacto.email + "<br>" +
            "Telefono: "+ e.contacto.telefono + "<br>" +
            "Fecha: "+ e.fecha + "<br><br>";
        }
    })
}

function filtrarPorEdad(){
    let inputValue = document.getElementById("inputValue").value;
    document.querySelector("#resultadoBusqueda").innerHTML = "";
    arrayEstudiantes.forEach(e=>{
        if(e.edad == inputValue){
            document.querySelector("#resultadoBusqueda").innerHTML += "Nombre: " + e.nombre + "<br>" +
            "Edad: " + e.edad + "<br>" +
            "Curso: "+ e.curso + "<br>" +
            "Email: "+ e.contacto.email + "<br>" +
            "Telefono: "+ e.contacto.telefono + "<br>" +
            "Fecha: "+ e.fecha + "<br><br>";
        }
    })
}

function filtrarPorCurso(){
    let inputValue = document.getElementById("inputValue").value;
    document.querySelector("#resultadoBusqueda").innerHTML = "";
    arrayEstudiantes.forEach(e=>{
        if(e.curso == inputValue){
            document.querySelector("#resultadoBusqueda").innerHTML += "Nombre: " + e.nombre + "<br>" +
            "Edad: " + e.edad + "<br>" +
            "Curso: "+ e.curso + "<br>" +
            "Email: "+ e.contacto.email + "<br>" +
            "Telefono: "+ e.contacto.telefono + "<br>" +
            "Fecha: "+ e.fecha + "<br><br>";
        }
    })
}
function anyadirAlumno() {
    let nombreAlumno = document.querySelector("#nombreAlumno").value;
    let edadAlumno = parseInt(document.querySelector("#edadAlumno").value);
    let cursoAlumno = parseInt(document.querySelector("#cursoAlumno").value);
    let emailAlumno = document.querySelector("#emailAlumno").value;
    let telefonoAlumno = document.querySelector("#telefonoAlumno").value;
    let fechaAlumno = document.querySelector("#fechaAlumno").value;

    let nuevoAlumno = {
        nombre: nombreAlumno,
        edad: edadAlumno,
        curso: cursoAlumno,
        contacto: {
            email: emailAlumno,
            telefono: telefonoAlumno
        },
        fecha: fechaAlumno
    };

    arrayEstudiantes.push(nuevoAlumno);
    console.log("Alumno añadido:", nuevoAlumno);

    arrayEstudiantes.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    mostrarEstudiantes();

    document.querySelector("#nombreAlumno").value = "";
    document.querySelector("#edadAlumno").value = "";
    document.querySelector("#cursoAlumno").value = "";
    document.querySelector("#emailAlumno").value = "";
    document.querySelector("#telefonoAlumno").value = "";
    document.querySelector("#fechaAlumno").value = "";

}

