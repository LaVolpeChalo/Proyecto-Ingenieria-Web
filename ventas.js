import venta from "./ventas.json" assert {type: 'json'}

let elemento = document.getElementById('Mi_venta');

for(let x in venta){
    elemento.innerHTML += "<section> <h5>" + venta[x].nombreProducto + " | " + venta[x].pago + " | " + venta[x].cantidad + " </h5></section>";
    elemento.innerHTML += "</br>";
}



    
    

