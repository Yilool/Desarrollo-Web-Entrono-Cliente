function inicializar(nom1) {
    let arrayNom = []
    let cont = 0
    var find = false

    do {
        nom1 = prompt(`Introduce nombre ${cont+1}:`).toUpperCase

        for (nom of arrayNom) {
            if (nom == nom1) {

            }
        }

        if (find == true) {
            nom1 = prompt(`Introduce otro nombre ${cont+1}:`).toUpperCase
        }

        cont++
    } while (cont < 5);

    let arrayNomSort = arrayNom.sort()

    for (nom of arrayNomSort) {
        console.log(nom)
    }
}