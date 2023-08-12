// const precioDolar = 500;  primera preentrega

// const cotizarDolar = (pesos) => pesos / precioDolar;

// const cotizarPesos = (dolar) => dolar * precioDolar;

// let seleccion = prompt("tipo de cambio  1 : dolar a pesos  2  : pesos a dolar ");
// while(seleccion != 1 && seleccion != 2){
//     alert("elija una de las anteriores opciones")
//     seleccion = prompt("tipo de cambio  1 : dolar a pesos  2  : pesos a dolar ");
//     break;
// }
// if(seleccion == 1 ){
//         let valor = parseInt(prompt("cuanto quiere cambiar?"));
//         alert(cotizarPesos(valor));

// }
// else if(seleccion == 2){
//         valor = parseInt(prompt("cuanto quiere cambiar?"));
//     alert(cotizarDolar(valor));
// }

// let prestamo=prompt("le ofresemos un prestamo del doble de sus ingresos ,le interesa?")

// if(prestamo=="si"){
//     let capital =prompt("cuantos son tus ingresos?")
//     alert(`te podemos ofreser un prestamo de ${capital *2}`)}
// else if(prestamo=="no");{
//     alert("vuelva pronto")
// }
//) primera preentrega

const shopConten = document.getElementById("shopConten");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const productos = [
    {
        id: 1,
        nombre: "wiscky",
        precio: 900,
        img: "assets/Johnie Walker Blue Label.jpeg",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "cerveza",
        precio: 100,
        img: "assets/Lugares con cerveza artesanal en la CDMX.jpeg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "vino",
        precio: 600,
        img: "assets/Luigi Bosca line_ New labels.jpeg",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "espumante",
        precio: 700,
        img: "assets/Champagne label design_ Дизайн этикетки для шампанского.jpeg",
        cantidad: 1,
    },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


productos.forEach((product) => {
    let content = document.createElement("div");
    content.innerHTML = `
<img src="${product.img}">
<h2>${product.nombre}</h2>
<p>${product.precio} $</p> 
`
    shopConten.append(content)

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    content.append(comprar);

    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id)

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            })
        } else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            })
            carritoCounter();
            saveLocal();
        }
    })
})



const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block"
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header">carrito.</h1>
    `;
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement("h1")

    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button"

    modalbutton.addEventListener("click", () => { modalContainer.style.display = "none" })

    modalHeader.append(modalbutton)

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
    <img src="${product.img}">
    <h2>${product.nombre}</h2>
    <p>${product.precio} $</p>
    
    <p>Cantidad: ${product.cantidad}</p>
    <p>Total:${product.cantidad * product.precio}</p>
    `;
        modalContainer.append(carritoContent)

        let eliminar = document.createElement("span")
        eliminar.innerHTML = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar)

        eliminar.addEventListener("click", eliminarProducto)
    })

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-comtent"
    totalBuying.innerHTML = `total a pagar: ${total}$`;
    modalContainer.append(totalBuying)

};

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = () => {
    const fundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== fundId;

    })
    carritoCounter();
    saveLocal();
    pintarCarrito();
}

const carritoCounter = () => {
    cantidadCarrito.innerText = carrito.length

    const carritoLengh = carrito.length

    localStorage.setItem("carritoLength", JSON.stringify(carritoLengh))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLengh"))
};
carritoCounter()

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

