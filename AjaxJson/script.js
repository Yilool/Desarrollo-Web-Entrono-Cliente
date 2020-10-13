const getDat = document.getElementById("boton")

getDat.addEventListener('click', () => {
    const ul = document.getElementById('list')
    let xhr

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    xhr.addEventListener('load', (data) => {
        let users = new Array()
        users = JSON.parse(data.target.response);

        for (const iteUser of users) {
            var li = document.createElement('li')

            li.appendChild(document.createTextNode(`${iteUser.id} - ${iteUser.name}`))
            ul.appendChild(li)
        }
    })

    xhr.send()
})