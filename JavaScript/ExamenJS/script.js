let animalsArray = [];
let currentAnimalIndex = null;
const form = document.getElementById("form");
const peso = document.getElementById("weightInput");
const infoObjeto = document.getElementById("objectInfo");
const optionsMenu = document.getElementById("optionsMenu");
const nombre = document.getElementById("nameInput");
const textArea = document.getElementById("textarea");
const orejaCb = document.getElementById("earCheckBox");
const narizCb = document.getElementById("noseCheckBox");
const bocaCb = document.getElementById("mouthCheckBox");
const ojosCb = document.getElementById("eyesCheckBox");
const RadioSexo = document.getElementsByName("sexRadio");
const saveButton = document.getElementById("saveButton");

window.onload = function () {
    loadAnimals();
    showAnimals();
}

function loadAnimals(){
    animals.forEach(animal => {
        animalsArray.push(animal);
    });
}

function showAnimals(){
    let animalsList = `<tr><th>Nombre</th><th>Especie</th><th>Gustos</th><th>No gustos</th><th>Acción</th></tr>`;
    animals.forEach((animal, index) => {
        animalsList += `<tr onclick="highlightRow(this)"><td>${animal.name}</td><td>${animal.species}</td><td>${animal.foods.likes.join(", ")}</td><td>${animal.foods.dislikes.join(", ")}</td><td><button class="btn btn-sm btn-info editButton" onclick="editAnimal(${index})">Editar</button></td></tr>`;
    });
    document.getElementById("animalsTable").innerHTML = animalsList;
}

function highlightRow(row) {
    let rows = document.querySelectorAll("#animalsTable tr");
    rows.forEach(r => r.classList.remove("table-active"));
    row.classList.add("table-active");
}

function editAnimal(index){
    clearFormData();
    currentAnimalIndex = index;
    let animal = animalsArray[index];
    nombre.value = animal.name;
    infoObjeto.innerHTML += `<pre>${JSON.stringify(animal, null, 2)}</pre>`

    console.log(animal.species)
    
    if (animal.species == "dog"){
        optionsMenu.innerHTML = `
            <option value="">--Raza--</option>
            <option value="Pastor Alemán">Pastor Alemán</option>
            <option value="Bulldog">Bulldog</option>
            <option value="Beagle">Beagle</option>`;
    } else {
        optionsMenu.innerHTML = `
            <option value="">--Raza--</option>
            <option value="Siames">Siamés</option>
            <option value="Burmes">Burmés</option>
            <option value="Abisinio">Abisinio</option>`;
    }
}

peso.addEventListener("input", () => {
    peso.value = peso.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    if (!/^\d{0,2}(\.\d{0,2})?$/.test(peso.value)) {
        peso.value = peso.value.slice(0, -1);
    }
});

saveButton.addEventListener("click", () => {
    if (currentAnimalIndex === null) return;

    let animal = animalsArray[currentAnimalIndex];
    animal.weight = peso.value || null;
    animal.diagnosis = textArea.value;
    animal.race = optionsMenu.value;
    animal.checks = {
        ears: orejaCb.checked,
        nose: narizCb.checked,
        mouth: bocaCb.checked,
        eyes: ojosCb.checked,
    };
    animal.sex = Array.from(RadioSexo).find(radio => radio.checked)?.value;

    infoObjeto.innerHTML = `<pre>${JSON.stringify(animal, null, 2)}</pre>`;
    animals[currentAnimalIndex] = animal;
});

function clearFormData(){
    nombre.value = "";
    peso.value = "";
    textArea.value = "";
    optionsMenu.innerHTML = `<option value="">--Raza--</option>`;
    RadioSexo.forEach(radio => radio.checked = false);
    orejaCb.checked = false;
    narizCb.checked = false;
    bocaCb.checked = false;
    ojosCb.checked = false;
    infoObjeto.innerHTML = "";
}

function validateForm() {
    if (!optionsMenu.value || !peso.value || !textArea.value) {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }

    const isSexSelected = Array.from(RadioSexo).some(radio => radio.checked);
    if (!isSexSelected) {
        alert("Por favor, seleccione el sexo.");
        return false;
    }

    const isChecked = orejaCb.checked || narizCb.checked || bocaCb.checked || ojosCb.checked;
    if (!isChecked) {
        alert("Por favor, seleccione al menos una revisión.");
        return false;
    }

    return true;
}
