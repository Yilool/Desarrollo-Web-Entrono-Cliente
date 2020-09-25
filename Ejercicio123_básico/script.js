const caja = document.getElementById("box")
const campo = document.getElementById("campo")
const form = document.getElementById("formulario")
const campForm = document.getElementById("campForm")
const bot = document.getElementById("boton")
const galeria = document.getElementById("gallery")

caja.addEventListener("mouseenter", () => {
    caja.style.background = 'green';
})

caja.addEventListener("mouseleave", () => {
    caja.style.background = 'red';
})

caja.addEventListener("mousedown", () => {
    console.log("Has pulsado la caja");
})

caja.addEventListener("mouseup", () => {
    console.log("Has soltado el botón izquierdo dentro de la caja");
})

campo.addEventListener("keydown", () => {
    campo.addEventListener("keypress", () => {
        console.log("Mantienes pulsado una tecla");
    })
})

campo.addEventListener("keyup", (e) => {
        console.log("Has soltado una tecla: " + e.key);
    })
    //String.fromCharCode(num1, num2, ..., numN); => para saber qué tecla ha sido presionado

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

bot.addEventListener("click", () => {
    campForm.addEventListener("keyup", (e) => {
        console.log(e.key);
    })
})

galeria.addEventListener("click", (e) => {
    let item = e.target

    if (item.className == 'gallery__item') {
        item.className = 'gallery__item_2'
    } else {
        item.className = 'gallery__item'
    }
})