let menu = []
let categorias = []

class Plato {

    constructor(nombre, descripcion, precio, categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.date = new Date()
    }

    añadirApellido() {
        this.nombre += ' Perez'
    }

    cambiarNombre (nombre) {
        this.nombre = nombre
        añadirApellido()
    }

}

class Categoria  {

    constructor(nombre, descripcion) {
        this.nombre = nombre
        this.descripcion = descripcion
    }
}

//Elementos HTML de Plato:

let nombrePlatoInput = document.getElementById('nombre-plato')
let descripcionPlatoInput = document.getElementById('descripcion-plato')
let precioPlatoInput = document.getElementById('precio-plato')
let categoriasPlatoInput = document.getElementById('categorias-plato')
let botonAñadirPlato = document.getElementById('añadir-plato')


//Elementos HTML de Categorias

let nombreCategoriaInput = document.getElementById('nombre-categoria')
let descripcionCategoriaInput = document.getElementById('descripcion-categoria')
let botonAñadirCategoria = document.getElementById('añadir-categoria')

//Elemento para mostrar el menu:

let menuDiv = document.getElementById('menu')

//Logica

botonAñadirPlato.addEventListener('click', (evento) => {
    evento.preventDefault()

    let plato = new Plato (
        nombrePlatoInput.value,
        descripcionPlatoInput.value,
        precioPlatoInput.value,
        categoriasPlatoInput.value
    )
    menuDiv.removeChild(menuDiv.firstChild)
    menu.push(plato)
    mostrarMenu()

    console.log(menu)
    console.log(categorias)
})

botonAñadirCategoria.addEventListener('click', (evento) => {
    evento.preventDefault()

    let categoria = new Categoria (
        nombreCategoriaInput.value,
        descripcionCategoriaInput.value,
    )

    let optionCategoria = document.createElement('option')
        optionCategoria.setAttribute('value', nombreCategoriaInput.value)
        optionCategoria.innerText = nombreCategoriaInput.value
    
        categoriasPlatoInput.appendChild(optionCategoria)
    
    categorias.push(categoria)

    console.log(menu)
    console.log(categorias)
})


const mostrarMenu = () => {

    let ul = document.createElement('ul')
        menuDiv.appendChild(ul)

    categorias.forEach( categoria => {

        let liCategoria = document.createElement('li')
            ul.appendChild(liCategoria)

        let tituloCategoria = document.createElement('h3')
            tituloCategoria.innerText = categoria.nombre
            liCategoria.appendChild(tituloCategoria)


        let ulPlatos = document.createElement('ul')
            liCategoria.appendChild(ulPlatos)

        const platosDeLaCategoria = menu.filter( (plato) => plato.categoria === categoria.nombre)
        
        platosDeLaCategoria.forEach( plato => {
            let liPlato = document.createElement('li')
            
            let nombrePlato = document.createElement('h4')
                nombrePlato.innerText = plato.nombre
                liPlato.appendChild(nombrePlato)

            let descripcionPlato = document.createElement('p')
                descripcionPlato.innerText = plato.descripcion
                liPlato.appendChild(descripcionPlato)

            let precioPlato = document.createElement('p')
                precioPlato.innerText = plato.precio
                liPlato.appendChild(precioPlato)

            ulPlatos.appendChild(liPlato)
        })

    })

    
}

