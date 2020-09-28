const jugadorPunto = document.getElementById("jugadorPunto")
const bancaPunto = document.getElementById("bancaPunto")
const cartPlayer = document.getElementById("jug")
const reiniciar = document.getElementById("reiniciar")
const plantar = document.getElementById("plantar")
const palos = ['Bastos', 'Copas', 'Espadas', 'Oros']
let point = 0

cartPlayer.addEventListener('click', () => {
    let palo = getPalos()
    let valor = getValores()


    if (valor <= 7) {
        point += valor
    } else {
        point += 0.5
    }

    jugadorPunto.innerHTML = `Jugador: ${point}`


    // console.log(palo)
    // console.log('///');
    // console.log(valor);
    // console.log('---');
})

function getPalos() {
    return Math.floor(Math.random() * ((3 + 1) - 0) + 0);
}

function getValores() {
    return Math.floor(Math.random() * ((10 + 1) - 1) + 1);
}