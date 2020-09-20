const añadir = document.getElementById('add')
const eliminar = document.getElementById('rm')

añadir.addEventListener('click', () => {
    let ele = document.getElementById('elemento').value
    newEle = document.createElement("li")
    newEle.appendChild(document.createTextNode(ele))

    let pos = document.getElementById('posicion').value

    lista = document.getElementsByTagName("li")

    lista[pos-2].appendChild(newEle)
})

//Duda: Al introducir una position 1 o mayor+2 del numero de elemento me dice que no puede leer append child de indefinido

eliminar.addEventListener('click', () => {

    let pos = document.getElementById('posicion').value

    console.log(document.getElementsByTagName("li")[pos-1]);

    document.removeChild(document.getElementsByTagName("li")[pos-1])
})

//Duda: document.getElementsByTagName("li")[pos-1] => es el li que quierom borrar de document y su padre es document 
//pero me aparece que noe es su hijo