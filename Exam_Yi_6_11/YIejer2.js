// Boton del html
const consulta = document.getElementById("consulta");

consulta.addEventListener("click", () => {
    if (contenidoSelect() == 1) {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((h) => (h.ok ? Promise.resolve(h) : Promise.reject(h)))
            .then((h) => h.json())
            .then((h) => cargarSelect(h));
    } else {
        const select = document.getElementById("usuario");
        let opt = select.options[select.selectedIndex].value;

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((h) => (h.ok ? Promise.resolve(h) : Promise.reject(h)))
            .then((h) => h.json())
            .then((h) => getUser(h, opt))
            .then((h) => shTabla(h));
    }
});

const shTabla = (h) => {
    const tabla = document.getElementById("respuesta");
    const tbody = document.createElement("tbody");

    tabla.replaceChild(tbody, document.getElementById("tCuerpo"));
    tbody.id = "tCuerpo";

    var tr = document.createElement("tr");

    var tId = document.createElement("td");
    tId.innerHTML = `${h[0].id}`;
    tr.appendChild(tId);

    var tName = document.createElement("td");
    tName.innerHTML = `${h[0].username}`;
    tr.appendChild(tName);

    var tSurname = document.createElement("td");
    tSurname.innerHTML = `${h[0].name}`;
    tr.appendChild(tSurname);

    var tmail = document.createElement("td");
    tmail.innerHTML = `${h[0].email}`;
    tr.appendChild(tmail);

    var taddress = document.createElement("td");
    taddress.innerHTML = `${h[0].address[1]}`;
    tr.appendChild(taddress);

    var tphone = document.createElement("td");
    tphone.innerHTML = `${h[0].phone}`;
    tr.appendChild(tphone);

    tbody.appendChild(tr);
};

const getUser = (user, idUser) => {
    var usuario = null;

    usuario = user.filter((e) => e.id == idUser);

    return usuario;
};

const contenidoSelect = () => {
    const select = document.getElementById("usuario");

    let hijos = select.children;

    return hijos.length;
};

const cargarSelect = (usuarios) => {
    const select = document.getElementById("usuario");
    var option;

    for (const iteUsers of usuarios) {
        option = document.createElement("option");

        option.text = `${iteUsers.name}`;
        option.value = `${iteUsers.id}`;
        select.appendChild(option);

        option = undefined;
    }
};