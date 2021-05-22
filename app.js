let nameInput = document.getElementById("nombre");
let addButton = document.getElementById("add");
let namesList = document.getElementById("lista-nombres");

addButton.addEventListener("click", (event) => { //Escucha el evento click y ejecuta una o varias acciones
    event.preventDefault(); //Previene el comportamiento usual de este evento

    if(nameInput.value != ""){
        let listItem = document.createElement("li");

        listItem.innerText = nameInput.value;

        namesList.appendChild(listItem);

        nameInput.value = "";
    }
    
});