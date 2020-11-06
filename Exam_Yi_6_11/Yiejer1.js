// Botones del html
const registra = document.getElementById("registra");
const borra = document.getElementById("borra");
const usuario = document.getElementById("consultaUsuario");
const login = document.getElementById("consultaUltimoLogin");

registra.addEventListener("click", (e) => {
    e.preventDefault();
    const d = new Date();
    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("password").value;
    let dni = document.getElementById("dni").value;
    let edad = document.getElementById("edad").value;
    let fechaAlta = `${d.getDay}/${d.getMonth}/${
    d.getFullYear
  }  ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    if (validatePasswordModerate(password)) {
        sessionStorage.setItem(
            `Usuario_${nombre}`,
            JSON.stringify({
                nombre: `${nombre}`,
                password: `${password}`,
                dni: `${dni}`,
                edad: `${edad}`,
                fechaAlta: `${fechaAlta}`,
            })
        );
    } else {
        alert("Contraseña Incorrecta");
    }
});

borra.addEventListener("click", () => {
    sessionStorage.removeItem("Usuario_*");
});

usuario.addEventListener("click", () => {
    const tabla = document.getElementById("respuesta");
    const tbody = document.createElement("tbody");
    let nick = document.getElementById("nickname").value;

    let Usuario = JSON.parse(sessionStorage.getItem(`Usuario_${nombre}`));

    if (Usuario != null) {
        tabla.replaceChild(tbody, document.getElementById("tCuerpo"));
        tbody.id = "tCuerpo";

        var tr = document.createElement("tr");

        var tnombre = document.createElement("td");
        tnombre.innerHTML = `${Usuario.nombre}`;
        tr.appendChild(tnombre);

        var tdni = document.createElement("td");
        tdni.innerHTML = `${Usuario.dni}`;
        tr.appendChild(tdni);

        var tedad = document.createElement("td");
        tedad.innerHTML = `${Usuario.edad}`;
        tr.appendChild(tedad);

        var tfecha = document.createElement("td");
        tfecha.innerHTML = `${Usuario.fechaAlta}`;
        tr.appendChild(tfecha);

        tbody.appendChild(tr);
    } else {
        alert("No existe Usuario");
    }
});

// Validacion de la contraseña
const validatePasswordModerate = (password) => {
    let correcto = false;
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
    if (passwordRegex.test(password)) {
        correcto = true;
    } else {
        correcto = false;
    }

    return correcto;
};