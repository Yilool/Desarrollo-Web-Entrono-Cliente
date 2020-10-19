//Cargo los alignment de la tabla en el select
fetch("marvel.php")
    .then((a) => a.json())
    .then((a) => cargar(a));
//Creo un array de align y de gender
const cargar = (hero) => {
    const select = document.getElementById("align");
    var option;
    var input;
    var label;
    var align = new Array();
    let gen = new Array();
    //itero el array de heroes
    for (const iteH of hero) {
        //si el heroes tiene un align o incluido e el array de align lo añado
        if (!align.includes(iteH.Alignment)) {
            align.push(iteH.Alignment);
        }
        //si tiene un genero que no está en le array de genero lo añado
        if (!gen.includes(iteH.Gender)) {
            gen.push(iteH.Gender);
        }
    }
    //para cada align creo una opcion para el desplegable
    for (const iteA of align) {
        option = document.createElement("option");

        option.text = `${iteA}`;
        select.appendChild(option);

        option = undefined;
    }
    //para cada genero dentro del array de genero le creo un input radio y label
    for (const iteG of gen) {
        input = document.createElement("input");
        input.type = "radio";
        input.id = iteG;
        input.name = "Gender";
        input.value = iteG;

        label = document.createElement("label");
        label.for = iteG;
        label.textContent = iteG;

        document.getElementById("generos").appendChild(input);
        document.getElementById("generos").appendChild(label);
    }
};

const getData = document.getElementById("boton");
const select = document.getElementById("align");

getData.addEventListener("click", (e) => {
    e.preventDefault();
    //Obtengo el valor/option del select y del input radio
    let opt = select.options[select.selectedIndex].value;
    let radio = document.generos.Gender.value;

    fetch("marvel.php")
        .then((h) => h.json())
        .then((h) => getHero(h, opt, radio))
        .then((h) => shTab(h));
});
//creo un array con los heroes que tienen el mismo align y gender que lo obtenido anteriormente
const getHero = (hero, align, gender) => {
    var heroe = new Array();

    heroe.push(hero.filter((e) => e.Alignment == align && e.Gender == gender));

    return heroe;
};
//para cada heroes creo una fila
const shTab = (hero) => {
    const tabla = document.getElementById("heroTab");

    for (let i = 2; i < tabla.childNodes.length; i++) {
        tabla.childNodes[i].parentNode.removeChild(tabla.childNodes[i]);
    }

    for (const iteArray of hero) {
        for (const iteHero of iteArray) {
            var tr = document.createElement("tr");

            var tdName = document.createElement("td");
            tdName.innerHTML = `${iteHero.Name}`;
            tr.appendChild(tdName);

            var tdGender = document.createElement("td");
            tdGender.innerHTML = `${iteHero.Gender}`;
            tr.appendChild(tdGender);

            var tdSkill = document.createElement("td");
            tdSkill.innerHTML = `${iteHero.Fighting_Skills}`;
            tr.appendChild(tdSkill);

            tabla.appendChild(tr);
        }
    }
};