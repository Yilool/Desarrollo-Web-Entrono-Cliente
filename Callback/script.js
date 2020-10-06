class usuario {
    constructor(id, nombre) {
        this.id = id
        this.nombre = nombre
    }
}

arrayUser = new Array()
arrayUser[0] = new usuario(1, 'uno')
arrayUser[1] = new usuario(2, 'dos')
arrayUser[2] = new usuario(3, 'tres')
arrayUser[3] = new usuario(4, 'cuatro')
arrayUser[4] = new usuario(5, 'cinco')

let identificador = prompt("Enter an ID: ")

const getUser = (identificador, callback) => {
    if (identificador > arrayUser.length) {
        callback(`Not exist a user with id ${identificador}`)
    } else {
        callback(null, arrayUser[identificador - 1])
    }
}

getUser(identificador, (mal, usuario) => {
    if (mal) {
        return console.log(mal);
    }

    console.log(`User name is ${usuario.nombre}`);
})