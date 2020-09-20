function addEmpleados() {
    const tabla = document.getElementById("empleadoTab")

    dni = prompt("Introduzca el DNI del empleado: ")
    nom = prompt("Introduzca el nombre del empleado: ")
    ape = prompt("Introduzca el apellido del empleado: ")

    newFila = document.createElement("tr")

    newNumEmp = document.createElement("td")
    numEmp = document.createTextNode(`${tabla.getElementsByTagName("tr").length}`)
    newNumEmp.appendChild(numEmp)
    newFila.appendChild(newNumEmp)

    newDni = document.createElement("td")
    dni = document.createTextNode(`${dni}`)
    newDni.appendChild(dni)
    newFila.appendChild(newDni)

    newNom = document.createElement("td")
    nom = document.createTextNode(`${nom}`)
    newNom.appendChild(nom)
    newFila.appendChild(newNom)

    newApe = document.createElement("td")
    ape = document.createTextNode(`${ape}`)
    newApe.appendChild(ape)
    newFila.appendChild(newApe)

    tabla.appendChild(newFila)

    document.getElementsByTagName("h2")[0].innerHTML = `Número total de empleados: ${tabla.getElementsByTagName("tr").length-1}`
}

function rmEmpleado() {
    const tabla = document.getElementById("empleadoTab")

    dni = prompt("Introduzca el DNI del empleado: ")

    for
}

function mdEmpleado() {

}