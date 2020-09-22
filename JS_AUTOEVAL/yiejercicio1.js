function inicializar(nom1) {
    let arrayNom = []

    for (index = 1; index < 5; index++) {
        let nom1 = prompt(`Introduce nombre ${index}:`).toUpperCase

        let bol = arrayNom.includes(nom1)

        if (bol) {
            nom1 = prompt(`Introduce otro nombre ${index}:`).toUpperCase
        } else {
            arrayNom.push(nom1)
        }
    }

    let arrayNomSort = arrayNom.sort()

    console.log(arrayNom)
    console.log("--");
    console.log(arrayNomSort);
    console.log("--");

    for (nom of arrayNomSort) {
        nomSinPrimerCar = nom.substring(1)
        primerCaracter = nom.substring(0, 1)
        console.log(primerCaracter + nomSinPrimerCar.toLowerCase())
    }

    //Apartir del segundo nombre me pregunta dos veces y el substring no es una funcion
}