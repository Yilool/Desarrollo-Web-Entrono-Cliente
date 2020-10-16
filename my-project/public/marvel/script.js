//Cargo los nombres de los héroes en el select
fetch('marvel.php')
    .then(h => h.json())
    .then(h => cargarSelect(h))

const cargarSelect = (hero) => {
    const select = document.getElementById("heroes")
    var option

    for (const iteHero of hero) {
        option = document.createElement('option')

        option.text = `${iteHero.Name}`
        option.value = `${iteHero.ID}`
        select.appendChild(option)

        option = undefined
    }
}

const getData = document.getElementById("boton")
const select = document.getElementById("heroes")

getData.addEventListener('click', (e) => {
    e.preventDefault()
        //Obtengo el valor/option del select
    let opt = select.options[select.selectedIndex].value

    fetch('marvel.php')
        .then(h => h.json())
        .then(h => getHero(h, opt))
        .then(h => shTab(h))
})

const getHero = (hero, id) => {
    var heroe = hero.filter(e => e.ID == id)[0];

    console.log(heroe.json())
}

const shTab = (h) => {
    const tabla = document.getElementById("heroTab")
    var tr = document.createElement('tr')

    var tdName = document.createElement('td')
    tdName.text = `${h.Name}`
    tr.appendChild(tdName)

    var tdGender = document.createElement('td')
    tdGender.text = `${h.Gender}`
    tr.appendChild(tdGender)

    var tdSkill = document.createElement('td')
    tdSkill.text = `${h.Fighting_Skills}`
    tr.appendChild(tdSkill)

    tabla.appendChild(tr)
}