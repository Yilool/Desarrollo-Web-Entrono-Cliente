const d = new Date();
const b = document.getElementById("boton");

document.getElementById(
    "fecha"
).innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

b.addEventListener("click", () => {
    const h = document.getElementById("alarm").value;
    const h1 = h.split(":");
    let times = 0;

    while (d.getHours() == h1[0] && d.getMinutes() == h1[1] && times < 1) {
        var respuesta = confirm("Quieres descansar un poco más?");

        if (respuesta) {
            alert("Alarma pospuesto 2 min");
            setInterval(() => {
                alert("Quieres descansar un poco más?");
            }, 120000);
        } else {
            alert("Alarma apagado");
        }

        times++;
    }
});