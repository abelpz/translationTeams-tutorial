let nameInput = document.getElementById("nombre");
let addButton = document.getElementById("add");
let selectInput = document.getElementById("equipos");
let teamInput = document.getElementById("nombre-equipo")
let addTeam = document.getElementById("add-team");
let teamsList = document.getElementById("lista-equipos");

let equipos = []

function addTeamOption(teamName){

    let option = document.createElement("option");
        option.setAttribute("value", teamName);
        option.innerText = teamName;

    selectInput.appendChild(option)

}

for (var key in equipos){

    addTeamOption(key)
    showTeams(key, equipos[key])
    
}

addTeam.addEventListener("click", (event) => { //Escucha el evento click y ejecuta una o varias acciones
    event.preventDefault(); //Previene el comportamiento usual de este evento

    if(teamInput.value != ""){

        let teamName = teamInput.value;
        equipos[teamName] = [];

        addTeamOption(teamName)

        teamsList.innerHTML = "";

        for (var key in equipos){

            showTeams(key, equipos[key])
            
        }

    }
});


addButton.addEventListener("click", (event) => { //Escucha el evento click y ejecuta una o varias acciones
    event.preventDefault(); //Previene el comportamiento usual de este evento

    if(nameInput.value != ""){

        equipos[selectInput.value].push(nameInput.value)

        console.log(equipos)

        let listItem = document.createElement("li");

        listItem.innerText = nameInput.value;

        nameInput.value = "";

        teamsList.innerHTML = "";

        for (var key in equipos){

            showTeams(key, equipos[key])
            
        }

    }
    
});


function showTeams(name, members){


    let teamContainer = document.createElement("div")
        teamContainer.classList.add("equipo")
        
    let teamName = document.createElement("h3")
        teamName.innerText = name

    let teamList = document.createElement("ol")
        teamList.classList.add("lista-equipo")

    teamContainer.appendChild(teamName)
    teamContainer.appendChild(teamList)

    members.forEach( (member) => {
        let teamMember = document.createElement("li")
            teamMember.innerText = member

            teamList.appendChild(teamMember)
    })

    teamsList.appendChild(teamContainer)

    console.log(teamsList)
}