let estudiantes = [
    { nombre: "Lola", edad: 12, curso: [1], contacto: {email: "lola@gmail.com", telefono:"823289492"}, fecha: "2025-01-01"},
    { nombre: "Paco", edad: 15, curso: [3], contacto: {email: "paco@gmail.com", telefono:"1242654523"}, fecha: "2024-02-05"},
    { nombre: "Miguel", edad: 18, curso: [4], contacto: {email: "miguel@gmail.com", telefono:"243654674"}, fecha: "2020-12-12"},
    { nombre: "María", edad: 10, curso: [1], contacto: {email: "maria@gmail.com", telefono:"39849543"}, fecha: "2024-06-01"},
    { nombre: "Luis", edad: 21, curso: [2], contacto: {email: "luis@gmail.com", telefono:"6456345653"}, fecha: "2022-09-12"},
];

const nombreInput = document.getElementById("nombreInput");
const edadInput = document.getElementById("edadInput");
const emailInput = document.getElementById("emailInput");
const telefonoInput = document.getElementById("telefonoInput");
const fechaInput = document.getElementById("fechaInput");
const guardarAlumno = document.getElementById("guardarAlumno");
const resetearAlumno = document.getElementById("resetearAlumno");
const nuevoAlumno = document.getElementById("nuevoAlumno"); // 🔹 Botón agregado
const infoEstudiantes = document.getElementById("infoReserva");

window.onload = function () {
    cargarForm();
    document.querySelector("#btnEstudiantes").addEventListener("click", getEstudiantes);
};

function getEstudiantes(){
    let conjuntoEstudiantes = new Set();
    let estudiante = "";

    estudiantes.forEach(e=> conjuntoEstudiantes.add(e.nombre));
    conjuntoEstudiantes.forEach(g=> estudiante += `${g}<br>`);
    
    document.querySelector("#resultadoEstudiantes").innerHTML = estudiante;
}

function cargarForm() {
    let table = document.querySelector(".body")
    let nuevo ="";

    estudiantes.forEach((estudiante) => {
        nuevo += `<tr>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.edad}</td>
            <td>${estudiante.curso}</td>
            <td>${estudiante.contacto.email}</td>
            <td>${estudiante.contacto.telefono}</td>
            <td>${estudiante.fecha}</td>
            </tr>`
    });

    table.innerHTML += nuevo;

}

