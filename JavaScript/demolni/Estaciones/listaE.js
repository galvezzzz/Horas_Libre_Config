function csvToArray(csv) {
    let filas = csv.trim().split("\n");
    return filas.map(fila => fila.trim().split(";"));
}

let resultado = csvToArray(csv);
console.log(resultado);

let primero = true;

const lista = document.querySelector(".listaE");

let datos="";

resultado.forEach(element => {
    
    if(primero){

        datos+= "<thead class=\"table-warning\"><tr>"

        element.forEach(element2 => {
            
            datos+="<th>" + element2 + "</th>"; 
        });
        
        primero= false;
        datos+="</tr></thead>";

    }else{

        datos+="<tr>"

        element.forEach(element2 => {
            
            datos+="<td>" + element2 + "</td>"; 
        });

        datos+="</tr>";
    }
    
});
lista.innerHTML+=datos;