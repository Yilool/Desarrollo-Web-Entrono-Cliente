const getDat = document.getElementById("boton")

getDat.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => mostrar(res))
})

const mostrar = (user) => {
    const ul = document.getElementById('list')

    for (const iteUser of user) {
        var li = document.createElement('li')

        li.appendChild(document.createTextNode(`${iteUser.id} - ${iteUser.name}`))
        ul.appendChild(li)
    }
}