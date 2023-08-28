
const shopConten = document.getElementById("shopConten");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async ()=>{
    
    const response= await fetch("data.json");
    const data = await response.json();



    data.forEach((product) => {
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
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se agrego a tu carrito',
                showConfirmButton: false,
                timer: 1000
                })
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
    
}
getProducts();




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
    <span class= "delete-product" >❌</span>
    `;
        modalContainer.append(carritoContent)

        let eliminar = carritoContent.querySelector(".delete-product");

        eliminar.addEventListener("click", ()=>{
            eliminarProducto(product.id)
        })
    })

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-comtent"
    totalBuying.innerHTML = `total a pagar: ${total}$`;
    modalContainer.append(totalBuying)

};

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = (id) => {
    const fundId = carrito.find((element) => element.id === id);

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

