window.onload = function () {
    cargarForm();
};

function cargarForm() {
    let table = document.querySelector(".body")
    let nuevo ="";

    animals.forEach((animal, index) => {
        nuevo += `<tr>
            <td>${animal.name}</td>
            <td>${animal.species}</td>
            <td>${animal.foods.likes}</td>
            <td>${animal.foods.dislikes}</td>
            <td> <button type="button" id="btnEditar(${index})">Editar</button></td>
            </tr>`
    });

    table.innerHTML += nuevo;

}


function clickEditar(obj) {
      // Obtener la tabla
      const table = document.getElementById('miTabla');

      // Eliminar cualquier resaltado previo
      Array.from(table.rows).forEach(row => row.classList.remove('highlight'));

      // Agregar clase de resaltado a la fila seleccionada
      const rowToHighlight = table.rows[rowIndex];
      if (rowToHighlight) {
          rowToHighlight.classList.add('highlight');
      }
}


var tabla = document.getElementById('miTabla'); 
tabla.addEventListener('click', destacar); 
function destacar()
{
     event.target.parentElement.classList.replace('normal', 'activa')
      if(window.activa !== undefined){
           window.activa.classList.replace('activa', 'normal');
          }
     window.activa = event.target.parentElement;
} 

