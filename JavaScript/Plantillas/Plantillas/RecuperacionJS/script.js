const formAlumno = document.getElementById("formAlumno");
const nombreInput = document.getElementById("nombreInput");
const edadInput = document.getElementById("edadInput");
const cursoInput = document.getElementById("cursoInput");
const emailInput = document.getElementById("emailInput");
const telefonoInput = document.getElementById("telefonoInput");
const fechaInput = document.getElementById("fechaInput");
const guardarAlumno = document.getElementById("guardarAlumno");
const resetearAlumno = document.getElementById("resetearAlumno");
const nuevoAlumno = document.getElementById("nuevoAlumno");
const infoEstudiantes = document.getElementById("infoEstudiantes");

let arrEstudiantes = [
    { nombre: "Lola", edad: 12, curso: [1], contacto: {email: "lola@gmail.com", telefono:"823289492"}, fecha: "2025-01-01"},
    { nombre: "Paco", edad: 15, curso: [3], contacto: {email: "paco@gmail.com", telefono:"1242654523"}, fecha: "2024-02-05"},
    { nombre: "Miguel", edad: 18, curso: [4], contacto: {email: "miguel@gmail.com", telefono:"243654674"}, fecha: "2020-12-12"},
    { nombre: "María", edad: 10, curso: [1], contacto: {email: "maria@gmail.com", telefono:"39849543"}, fecha: "2024-06-01"},
    { nombre: "Luis", edad: 21, curso: [2], contacto: {email: "luis@gmail.com", telefono:"6456345653"}, fecha: "2022-09-12"},
];

window.onload = function () {
    mostrarEstudiantes();
    document.querySelector("#btnEstudiantes").addEventListener("click", getEstudiantes);
};

function getEstudiantes(){
    let conjuntoEstudiantes = new Set();
    let estudiante = "";

    arrEstudiantes.forEach(e=> conjuntoEstudiantes.add(e.nombre));
    conjuntoEstudiantes.forEach(g=> estudiante += `${g}<br>`);
    
    document.querySelector("#resultadoEstudiantes").innerHTML = estudiante;
}

function mostrarEstudiantes() {
    let table = document.querySelector(".body")
    let nuevo ="";

    arrEstudiantes.forEach((estudiante) => {
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

nuevoAlumno.addEventListener("click", () => {
    resetForm();
    indexEstudiantes = null;
});

function editarEstudiante(index) {
    resetForm(); 

    indexEstudiantes = index;
    let estudiante = arrEstudiantes[index];

    nombreInput.value = estudiante.nombre;
    edadInput.value = estudiante.edad;
    cursoInput.value = estudiante.curso;
    emailInput.value = estudiante.contacto.email;
    telefonoInput.value = estudiante.contacto.telefono;
    fechaInput.value = estudiante.fecha;
}

guardarAlumno.addEventListener("click", () => {
    if (!validarFormulario()) return;

    let alumno = {
        nombre: nombreInput.value,
        edad: edadInput.value,
        curso: cursoInput.value,
        contacto:{
            email: emailInput.value,
            telefono: telefonoInput.value,
        },
        fecha: fechaInput.value
    };

    if (indexEstudiantes !== null) {
        arrEstudiantes[indexEstudiantes] = alumno;
    } else {
        arrEstudiantes.push(alumno);
    }

    mostrarEstudiantes();
    resetForm();
});

resetearAlumno.addEventListener("click", resetForm);

function resetForm() {
    formAlumno.reset();
    indexEstudiantes = null;
    infoEstudiantes.innerHTML = "";
}

function validarFormulario() {
    if (!nombreInput.value || !edadInput.value || !emailInput.value || !telefonoInput.value || !cursoInput.value || !fechaInput.value ) {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }
    return true;
}
