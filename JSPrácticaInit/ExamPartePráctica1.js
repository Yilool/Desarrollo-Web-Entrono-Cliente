const aplicar = document.getElementById('apli')


aplicar.addEventListener('click', () => {
    const liga = document.getElementById('tabLiga')

    //obtengo los valores nuevos de los inputs tipo text
    let position = document.getElementById('pos').value
    let team = document.getElementById('team').value
    var newT = document.createElement("td")
    newT.appendChild(document.createTextNode(team))
    let point = document.getElementById('point').value
    newP = document.createElement("td")
    newP.appendChild(document.createTextNode(point))

    //busco los valores a reemplazar usando la posicion
    let oldTrs = liga.getElementsByTagName("tr")[position] //=> array de td proveniente de la fila a modificar
    console.log(oldTrs);

    //sustituyo el antiguo equipo por el nuevo  
    oldTrs.parentNode.replaceChild(oldTrs[1], newT)

    //sustituyo los antiguos puntos por los nuevos
    oldTrs.parentNode.replaceChild(oldTrs.getElementsByTagName("td")[2], newP)
        //Duda: oldTrs.getElementsByTagName("td")[2] => es el tercer td dentro del tr, pero dice que no es hijo de tr ¿¿??
})

//Duda: el getelementbytagname devuelve un array con todos los elementos de ese tipo y pero no me deja recorrer ese
//array y sus elementos me aparece como undefined.