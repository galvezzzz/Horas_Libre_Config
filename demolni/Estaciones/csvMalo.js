function csvToArray(csv) {
    let filas = csv.trim().split("\n");
    return filas.map(fila => fila.trim().split(";"));
}

let csv = csvToArray(csvDatos);
console.log(csv);


const lista = document.querySelector(".listaE");

csv.forEach(e => 
{
    let tr = document.createElement('tr');

    e.forEach(d => {
        let td = document.createElement('td');
        td.textContent = d;
        tr.appendChild(td)
    })

        document.getElementsByClassName("listaE")[0].appendChild(tr);
});