const añadir = document.getElementById('add')
const eliminar = document.getElementById('rm')

añadir.addEventListener('click', () => {
    e.preventDefault()

    let ele = document.getElementById('elemento').value
    newEle = document.createElement("li")
    newEle.appendChild(document.createTextNode(ele))

    let pos = document.getElementById('posicion').value

    lista = document.getElementsByTagName("li")

    lista[pos - 2].appendChild(newEle)

    console.log(document.getElementsByTagName("li").length);
})

//Duda: Al introducir una position 1 o mayor+2 del numero de elemento me dice que no puede leer appendchild de indefinido

eliminar.addEventListener('click', () => {

    let pos = document.getElementById('posicion').value

    console.log(document.getElementsByTagName("li")[pos - 1]);

    document.removeChild(document.getElementsByTagName("li")[pos - 1])
})

//Duda: document.getElementsByTagName("li")[pos-1] => es el li que quierom borrar de document y su padre es document 
//pero me aparece que no es su hijo