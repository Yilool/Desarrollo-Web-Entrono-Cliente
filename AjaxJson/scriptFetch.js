const getDat = document.getElementById("boton")

getDat.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(mostrar(res))
})

const mostrar = (user) => {
    const ul = document.getElementById('list')

    for (const iteUser of user) {
        var li = document.createElement('li')

        li.appendChild(document.createTextNode(`${iteUser.id} - ${iteUser.name}`))
        ul.appendChild(li)
    }
}