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
        //caja.className = 'box'
    })
    //clasname no funciona pero tampoco de error??

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

campo.addEventListener("keyup", () => {
        console.log("Has soltado una tecla");
    })
    //String.fromCharCode(num1, num2, ..., numN); => para saber qué tecla ha sido presionado

form.addEventListener("submit", (e) => {
    e.preventDefault()
})
bot.addEventListener("click", () => {
    campForm.addEventListener("keypress", () => {
        console.log(String.fromCharCode(event.keyCode));
    })
})

galeria.addEventListener("click", (e) => {
    let item = e.target.textContent
    item.style.background = 'red'
})