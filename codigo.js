// const productos = [
//     {nombre:"cerveza", precio: 200},
//     { nombre:"vino", precio: 300 },
//     { nombre:"vodka", precio: 400 },
//     { nombre:"wisckey", precio: 1000 },
// ];



// let seleccion = prompt("hola quiere comprar una bebida");

// while(seleccion != "si" && seleccion != "no"){
//     alert("por favor ingresar si o no");
//     seleccion= prompt("hola quiere comprar una bebida");
// }

// if(seleccion=="si"){
//     console.log(productos)
//     }
// else if(seleccion=="no"){
//     alert("gracias por venir,hasta luego")
// }

// while(seleccion != "no"){
//     let producto = prompt("agrega un producto a tu carrito")
//     let precio = 0

//     if(producto == "cerveza" || producto == "vino" || producto == "vodka" || 
//     producto == "wisckey"){
//         switch(producto){
//             case "cerveza":
//                 precio = 200
//                 break;
//             case "vino":
//                 precio = 300
//                 break;
//             case "vodka":
//                 precio = 400
//                 break;
//             case "wisckey":
//                 precio = 1000
//                 break;
//             default:
//                 break;
//         }
//     let unidades = parseInt(prompt("cuantas unidades quiere llevar?"));

//     console.log(carrito)
//     }else{
//         alert("no tenemos ese producto")
//     }}

// seleccion=prompt("desea seguir comprando?")
// while(seleccion==="no"){
//     alert("gracias por su compra")
//     break;
// }

const precioDolar = 500;

const cotizarDolar = (pesos) => pesos / precioDolar;

const cotizarPesos = (dolar) => dolar * precioDolar;

let seleccion = prompt("tipo de cambio  1 : dolar a pesos  2  : pesos a dolar ");
while(seleccion != 1 && seleccion != 2){
    alert("elija una de las anteriores opciones")
    seleccion = prompt("tipo de cambio  1 : dolar a pesos  2  : pesos a dolar ");
    break;
}
if(seleccion == 1 ){
        let valor = parseInt(prompt("cuanto quiere cambiar?"));
        alert(cotizarPesos(valor));
    
}
else if(seleccion == 2){
        valor = parseInt(prompt("cuanto quiere cambiar?"));
    alert(cotizarDolar(valor));
}

let prestamo=prompt("le ofresemos un prestamo del doble de sus ingresos ,le interesa?")

if(prestamo=="si"){
    let capital =prompt("cuantos son tus ingresos?")
    alert(`te podemos ofreser un prestamo de ${capital *2}`)}
else if(prestamo=="no");{
    alert("vuelva pronto")
}
