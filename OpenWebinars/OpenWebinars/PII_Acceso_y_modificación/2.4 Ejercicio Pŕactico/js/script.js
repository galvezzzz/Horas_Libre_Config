
window.onload = function() {
    console.log("DOM Cargado");
    editPersonalizado("b", "5px solid black");
    editPersonalizado("a", "5px solid #00F");
    editPersonalizado("c", "5px solid #0F0");
}

function editPersonalizado(nombreClase, estilo) {
    let imgPersonalizada = document.getElementsByClassName(nombreClase);

    for (img of imgPersonalizada) {
        img.style.border = estilo;
        console.log(img.src);
    }
}

/*
//ELEMENT -> Me devuelve un HTMLCollection
//Tengo que transformarlo en Array para hacer un forEach
let imgA = document.getElementsByClassName("a");

console.log(imgA);

for (img of imgA) {
     img.style.border="5px solid #00F";
}


//También ELEMENT
//Tendría que transformarlo en Array para hacer un forEach
let imgB = document.getElementsByClassName("b");

console.log(imgB);

Array.from(imgB).forEach( element => {
    element.style.border="5px solid black";
});

//Solo devuelve un Nodo
let imgC = document.querySelector(".c");

console.log(imgC);

imgC.style.border = "5px solid #0F0";

//Devuelve un vector de Nodos (NO LLEVA ELEMENT)
let imgD = document.querySelectorAll(".d");

console.log(imgD);

imgD.forEach( element => {
    element.style.border ="5px solid #F00";
});
*/
