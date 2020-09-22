const caja = document.getElementById("box")
const campo = document.getElementById("campo")

caja.addEventListener("mouseenter", () => {
    caja.style.background = 'green';
})

caja.addEventListener("mouseleave", () => {
    caja.className = 'box'
})
//clasname no funciona pero tampoco de error??

caja.addEventListener("mousedown", () => {
    console.log("Has pulsado la caja");
})

caja.addEventListener("mouseup", () => {
    console.log("Has soltado el botón izquierdo dentro de la caja");
})

campo.addEventListener("keydown", () => {
    console.log("Has pulsado una tecla");
})

campo.addEventListener("keyup", () => {
    console.log("Has soltado una tecla");
})

//String.fromCharCode(num1, num2, ..., numN); => para saber qué tecla ha sido presionado