let table ="";
for (let index = 0; index < animals.length; index++) {
    table += "<tr>";
    table += "<td>" + animals[index].name + "</td>";
    table += "<td>" + animals[index].species + "</td>";
    table += "<td>" + animals[index].foods.likes + "</td>";
    table += "<td>" + animals[index].foods.dislikes + "</td>";
    table += "<td> <button>Editar</button></td>";
    table += "</tr>";
}

const list = document.querySelector(".body");
list.innerHTML = table;

window.onload = function () {
    `<pre>${JSON.stringify(animal,null,2)}</pre>`;
};

function editData() {
    
}

