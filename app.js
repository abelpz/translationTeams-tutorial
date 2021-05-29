let nameInput = document.getElementById("nombre");
let addButton = document.getElementById("add");
let namesList = document.getElementById("lista-nombres");

let mujeres = ["Angela", "Karina", "Paola"]
let hombres = ["Elias", "Abel", "Miguel"]

let listaDatos = [mujeres, hombres, 5, "Lucas"]


const mostrarElementos = (el) => {
    
    if(Array.isArray(el)){

        el.forEach( (x) => { alert(x) } )
        return

    }else if(el == "Lucas"){

        alert(el + "Lucas")

    }else{

        alert(el)

    }

}

listaDatos.forEach( mostrarElementos )


addButton.addEventListener("click", (event) => { //Escucha el evento click y ejecuta una o varias acciones
    event.preventDefault(); //Previene el comportamiento usual de este evento

    if(nameInput.value != ""){
        let listItem = document.createElement("li");

        listItem.innerText = nameInput.value;

        namesList.appendChild(listItem);

        nameInput.value = "";
    }
    
});
