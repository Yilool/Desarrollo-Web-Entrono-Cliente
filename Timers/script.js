const d = new Date()

document.getElementById("fecha").innerHTML = `Hoy es ${d.getDay()} - ${d.getMonth()} - ${d.getFullYear()} y son las ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} horas`

setTimeout(() => {
    actualizar()
}, 1000);

const actualizar = () => {
    location.reload();
}