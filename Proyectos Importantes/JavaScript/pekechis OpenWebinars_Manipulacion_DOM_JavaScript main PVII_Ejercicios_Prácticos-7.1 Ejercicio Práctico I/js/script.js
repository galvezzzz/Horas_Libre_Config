
//Para crear una tarea

function draggStart(task){
    task.addEventListener("dragstart", event => {
        console.log("dragStart");
        event.dataTransfer.setData("name",event.target.children[0].textContent);
        event.target.setAttribute("id","draggable");
        console.log(event.target.children[0].textContent);
    }); 
}

function createTask(title) {
    //Construyo la tarea a añadir
    let task = document.createElement("div");
    let titulo = document.createElement("p");
    let close = document.createElement("p");        
   
    let texto = document.createTextNode(title);
    let x = document.createTextNode("X");

    titulo.append(texto);
    close.append(x);

    //Le añado el listener para cerrarlo
    close.addEventListener("click",deleteTask);

    task.classList.add("task");
    task.append(titulo);
    task.append(close);
    task.draggable = true;   

    draggStart(task);
    
    
    return task;
}

//Capturador de eventos para añadir una nueva tarea
document.querySelector(".btn").addEventListener("click", event => {
    
    //Obtenemos el valor del input
    let taskName = document.querySelector("input").value;

    // Compruebo si tengo algo en el campo
    if (!taskName) {
        alert("No hay nada que añadir");
    } else {        

        //Añado la tarea
        document.querySelector(".todo .tasks").append(createTask(taskName));

        //Limpio el contenido del formulario
        document.querySelector("input").value = "";
    }   

});

//Función para borrar una tarea
function deleteTask(event) {
  event.target.parentElement.remove();
}

//Capturadora de eventos para eliminar una tarea
let borrarXs = document.getElementsByClassName("close");

Array.from(borrarXs).forEach(element => {
    element.addEventListener("click",deleteTask);
});

//Hago que todas las tareas sean Draggable y establezco los eventos necesarios
let tasks = document.querySelectorAll(".task");

tasks.forEach( element => {
    element.draggable = true;
   draggStart(element);
    
});

let tasks_list = document.querySelectorAll(".tasks");

tasks_list.forEach(lista => {
    lista.addEventListener("dragover", function(event) {
        // prevent default to allow drop
        event.preventDefault();
    });

    lista.addEventListener("drop", function(event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        
        let datos = document.getElementById("draggable");

        if (!datos) {
            return; // Exit if no draggable element is found
        }
        
        // Find the closest parent with class "tasks"
        let targetTasks = event.target.closest(".tasks");

        if(!targetTasks){
          return;
        }

        let idPadre = targetTasks.parentElement.id;

        if (idPadre === "inprocess") {
            // Check if the dragged item was previously in "todo"
            if (datos.parentElement.parentElement.id === "todo") {
                targetTasks.append(datos);
                datos.removeAttribute("id");
            } else if (datos.parentElement.parentElement.id === "inprocess"){
                targetTasks.append(datos);
                datos.removeAttribute("id");
            }
            else {
                alert("Solo se puede mover desde 'Todo' a 'In Process'.");
            }
        } else if (idPadre === "done") {
            // Check if the dragged item was previously in "inprocess"
            if (datos.parentElement.parentElement.id === "inprocess") {
                targetTasks.append(datos);
                datos.removeAttribute("id");
            } else {
                alert("Solo se puede mover desde 'In Process' a 'Done'.");
            }
        } else if (idPadre === "todo") {
            alert("No se puede mover directamente a 'Todo'.");
        }
    });
});

