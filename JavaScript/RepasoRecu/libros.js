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
    tabla+= "<td><a href=\"" + libros[i].website + "\"></a>" + libros[i].titulo + "</td>";
    tabla += "</tr>";   
}

const lista = document.querySelector(".body");
lista.innerHTML = tabla;