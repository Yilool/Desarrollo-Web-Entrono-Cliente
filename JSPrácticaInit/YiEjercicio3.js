const sh = document.getElementById("sh")

sh.addEventListener('click', () => {
    var prov = ["Sevilla","Cadiz","Huelva","Malaga","Granada","Almeria","Jaen","Cordoba"]

    var provSort = prov.sort()

    document.innerHTML = "<table></table>"

    var tab = document.getElementsByTagName("table")

    for (iteProv of provSort) {
        newTr = document.createElement("tr")
        newTd = document.createElement("td")
        newTx = document.createTextNode(iteProv)

        newTd.appendChild(newTx)
        newTr.appendChild(newTd)
        tab.appendChild(newTr)
    }
})

//Duda: porqué tab.appendChild no es una función