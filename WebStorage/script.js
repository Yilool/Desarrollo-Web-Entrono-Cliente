//obtengo los botones del html
const post = document.getElementById("postB");
const getAll = document.getElementById("getAllB");
const getId = document.getElementById("getB");
var id;
var idIncrementa = 0;
//al click hace una petición de post
post.addEventListener("click", () => {
    id = ++idIncrementa;
    const producto = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;

    sessionStorage.setItem(
        `product${id}`,
        JSON.stringify({
            prdId: `${id}`,
            prdName: `${producto}`,
            prdPrice: `${precio}`,
        })
    );
});
//al click muestra una tabla con el resultado
getId.addEventListener("click", () => {
    const id = document.getElementById("ident").value;
    const tabla = document.getElementById("respuesta");
    const tbody = document.createElement("tbody");

    let product = JSON.parse(sessionStorage.getItem(`product${id}`));

    tabla.replaceChild(tbody, document.getElementById("tCuerpo"));
    tbody.id = "tCuerpo";

    var tr = document.createElement("tr");

    var tId = document.createElement("td");
    tId.innerHTML = `${product.prdId}`;
    tr.appendChild(tId);

    var tName = document.createElement("td");
    tName.innerHTML = `${product.prdName}`;
    tr.appendChild(tName);

    var tPrice = document.createElement("td");
    tPrice.innerHTML = `${product.prdPrice}`;
    tr.appendChild(tPrice);

    tbody.appendChild(tr);
});
// //al click muestra una tabla con todos los resultados
// getAll.addEventListener("click", () => {});

// //al click muestra el resultado dentro de cada input del formulario
// getInForm.addEventListener("click", () => {
//     const id = document.getElementById("ident").value;

//     fetch("http://localhost:8080/empresa/product/" + id)
//         .then((p) => (p.ok ? Promise.resolve(p) : Promise.reject(p)))
//         .then((p) => p.json())
//         .then((p) => shInForm(p))
//         .catch((p) => alert(`No existe producto con id: ${id}`));
// });
// //muestra el producto en los campos del formulario
// const shInForm = (jPrd) => {
//     const producto = document.getElementById("nombre");
//     const precio = document.getElementById("precio");

//     producto.value = `producto : ${jPrd.prdName}`;
//     precio.value = `precio: ${jPrd.prdPrice}`;
// };
// //crea un nuevo cuerpo a la tabla en el que se añadiendo las filas para cada producto de la tabla
// const shTab = (jarray) => {
//     const tabla = document.getElementById("respuesta");
//     const tbody = document.createElement("tbody");

//     tabla.replaceChild(tbody, document.getElementById("tCuerpo"));
//     tbody.id = "tCuerpo";

//     for (const itePrd of jarray) {
//         var tr = document.createElement("tr");

//         var tId = document.createElement("td");
//         tId.innerHTML = `${itePrd.prdId}`;
//         tr.appendChild(tId);

//         var tName = document.createElement("td");
//         tName.innerHTML = `${itePrd.prdName}`;
//         tr.appendChild(tName);

//         var tPrice = document.createElement("td");
//         tPrice.innerHTML = `${itePrd.prdPrice}`;
//         tr.appendChild(tPrice);

//         tbody.appendChild(tr);
//     }
// };

// const shTab1 = (jPrd) => {
//     const tabla = document.getElementById("respuesta");
//     const tbody = document.createElement("tbody");

//     tabla.replaceChild(tbody, document.getElementById("tCuerpo"));
//     tbody.id = "tCuerpo";

//     var tr = document.createElement("tr");

//     var tId = document.createElement("td");
//     tId.innerHTML = `${jPrd.prdId}`;
//     tr.appendChild(tId);

//     var tName = document.createElement("td");
//     tName.innerHTML = `${jPrd.prdName}`;
//     tr.appendChild(tName);

//     var tPrice = document.createElement("td");
//     tPrice.innerHTML = `${jPrd.prdPrice}`;
//     tr.appendChild(tPrice);

//     tbody.appendChild(tr);
// };