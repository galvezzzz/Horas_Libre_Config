

let tabla = "";

for(let i = 0; i < libros.length; i++){
    tabla += "<tr>";
    tabla += "<td>" + libros[i].titulo + "</td>";
    tabla += "<td>" + libros[i].genero + "</td>";
    tabla += "<td>" + libros[i].autor + "</td>";
    tabla += "<td>" + libros[i].paginas + "</td>";
    tabla += "<td>" + libros[i].publicacion + "</td>";
    tabla += "<td>" + libros[i].leido + "</td>";
    tabla += "<td>" + libros[i].website + "</td>";
    tabla += "</tr>";   
}

const lista = document.querySelector(".body");
lista.innerHTML = tabla;



window.onload = function(){
    document.querySelector("#btnGeneros").addEventListener("click", getGeneros);
    
}


function getGeneros(){
    let conjuntoGeneros = new Set();
    let generos = "";

    libros.forEach(b=> conjuntoGeneros.add(b.genero));

    conjuntoGeneros.forEach(g=> generos += `${g}<br>`);
    
    document.querySelector("#generos").innerHTML = generos;
}

function getAutores(){
    let conjuntoAutores = new Set();

    libros.forEach(b=> b.autor);
}