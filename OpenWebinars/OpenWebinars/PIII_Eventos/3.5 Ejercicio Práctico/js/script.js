

function cambiarImagen(){
    //Añadimos el click listeners a las imágenes
    let sourceImages = document.querySelectorAll("#images img");

    sourceImages.forEach(image => {
        image.addEventListener("click", event => {
            let frameImage = document.querySelector("#frame img");

            frameImage.setAttribute("src",event.target.getAttribute("src"));
        });
    });
}


const cambiarBordes = () => {
    //Añadimos el click listener a los divs de colores
    let colorBlocks = document.querySelectorAll(".colors div");

    colorBlocks.forEach(block => {
        block.addEventListener("click", event => {
            let color = window.getComputedStyle(event.target).backgroundColor;
            document.getElementById("picture").style.borderColor=color;       
        });
    });
}


let cambiarZoom = () => {
    //Añadimos los Zooms...
    document.querySelector("#zoom img:nth-child(1)").addEventListener("click", event => {
        let img = document.querySelector("#frame img");
        let dim = img.offsetWidth;
        img.style.width=(dim+50)+"px";
        img.style.height=(dim+50)+"px";  

    });

    document.querySelector("#zoom img:nth-child(2)").addEventListener("click", event => {
        let img = document.querySelector("#frame img");
        let dim = img.offsetWidth;   
        img.style.width=(dim-50)+"px";
        img.style.height=(dim-50)+"px";
    });
}

let sumaAngulo= 0;
let images = document.querySelector("#picture img");

let rotarIzquierda = () => {
    console.log("entra")
    sumaAngulo -= 90
    images.style.transform = `rotate(${sumaAngulo}deg)`;
}

let rotarDerecha = ()=>{
    console.log("entra")
    sumaAngulo += 90
    images.style.transform = `rotate(${sumaAngulo}deg)`;
}

let restablecer = () =>{
    images.style.width = "200px" ;
    images.style.height = "200px";
    images.style.transform = `rotate(${0}deg)`;
}

let colorElegido = document.getElementById("colorFondo");

let cambiarFondo = () =>{
    document.querySelector("#picture").style.backgroundColor = colorElegido.value;
    //document.body.style.backgroundColor = colorElegido.value;
}



window.onload = function() {
    cambiarImagen();
    cambiarBordes();
    cambiarZoom();
    document.getElementById("rIzq").addEventListener("click", rotarIzquierda);
    document.getElementById("rDcha").addEventListener("click", rotarDerecha);
    document.getElementById("restablecer").addEventListener("click", restablecer);
    document.getElementById("colorFondo").addEventListener("input", cambiarFondo);
}






