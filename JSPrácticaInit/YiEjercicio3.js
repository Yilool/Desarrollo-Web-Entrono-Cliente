const sh = document.getElementById("sh")

sh.addEventListener('click', () => {
    //Creo el array de las Provincias
    var prov = ["Sevilla", "Cadiz", "Huelva", "Malaga", "Granada", "Almeria", "Jaen", "Cordoba"]
        //Creo otro array donde almaceno el array anterior pero ordenado mediante sort
    var provSort = prov.sort()
        //Escribo en el html la etiqueta table
    document.write('<table border="1">')
        //Recorro el array con forof
    for (iteProv of provSort) {
        //Para cada elemento le creo sus tr, td.
        document.write('<tr>' + '<td>' + iteProv + '</td>' + '</tr>')
    }
    //Cierro la etiqueta table
    document.write('</table>')
})