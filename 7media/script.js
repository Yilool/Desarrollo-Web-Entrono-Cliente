const traseraJugador = document.getElementById("jug")
const reiniciar = document.getElementById("reiniciar")
const plantar = document.getElementById("plantar")
const palos = ['Bastos', 'Copas', 'Espadas', 'Oros']
const cartasUsado = new Array()
let pointPlayer = 0
let pointBank = 0

traseraJugador.addEventListener('click', () => {
    let palo = getPalos()
    let valor = getValores()

    cartasUsado.push(`${valor}${palos[palo]}.jpg`)
    document.getElementById("playerObtenido").innerHTML += `<img class="cart" src="imagenes/${valor}${palos[palo]}.jpg">`

    pointPlayer += sumaPuntos(valor)

    document.getElementById("jugadorPunto").innerHTML = `Jugador: ${pointPlayer}`

    if (pointPlayer > 7.5) {
        document.getElementById("boton").innerHTML += `Has perdido`
        plantar.disabled = true
    }
})

plantar.addEventListener('click', setTimeout(() => {
    () => {
        let repetido = false;
        do {
            do {
                let palo = getPalos()
                let valor = getValores()

                if (cartasUsado.includes(`${valor}${palos[palo]}.jpg`) == true) {
                    repetido = true
                } else {
                    cartasUsado.push(`${valor}${palos[palo]}.jpg`)
                    document.getElementById("bancaObtenido").innerHTML += `<img class="cart" src="imagenes/${valor}${palos[palo]}.jpg">`

                    pointBank += sumaPuntos(valor)

                    document.getElementById("bancaPunto").innerHTML = `Banca: ${pointBank}`
                }
            } while (pointBank < 7);
        } while (repetido == false && pointBank < 7.5)
    }
}, 1))

function getPalos() {
    return Math.floor(Math.random() * ((3 + 1) - 0) + 0)
}

function getValores() {
    return Math.floor(Math.random() * ((10 + 1) - 1) + 1)
}

function sumaPuntos(valor) {
    let point = 0

    if (valor <= 7) {
        point += valor
    } else {
        point += 0.5
    }

    return point
}