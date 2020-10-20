const getAll = document.getElementById("getAllB");
const getId = document.getElementById("getB");
const post = document.getElementById("postB");

getAll.addEventListener("click", () => {
    fetch("http://localhost:8080/empresa/product")
        .then((p) => p.json())
        .then((p) => shTab(p));
});

getId.addEventListener("click", () => {
    const id = getElementById("id");

    fetch("http://localhost:8080/empresa/product")
        .then((p) => p.json())
        .then((p) => shTab(p));
});

const findPrd = (jarray, id) => {
    const prd = jarray.filter((p) => p.prdId == id);

    return prd;
};

const shTab = (jarray) => {
    const tabla = document.getElementById("respuesta");
    const tbody = document.createElement("tbody");

    tabla.replaceChild(tbody, document.getElementById("tCuerpo"));
    tbody.id = "tCuerpo";

    for (const itePrd of jarray) {
        var tr = document.createElement("tr");

        var tId = document.createElement("td");
        tId.innerHTML = `${itePrd.prdId}`;
        tr.appendChild(tId);

        var tName = document.createElement("td");
        tName.innerHTML = `${itePrd.prdName}`;
        tr.appendChild(tName);

        var tPrice = document.createElement("td");
        tPrice.innerHTML = `${itePrd.prdPrice}`;
        tr.appendChild(tPrice);

        tbody.appendChild(tr);
    }
};