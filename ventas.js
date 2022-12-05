import venta from "./ventas.json" assert {type: 'json'}

let elemento = document.getElementById('Mi_venta');

for(let x in venta){
    elemento.innerHTML += "<div>" + venta[x].nombreProducto + " | " + venta[x].pago + " | " + venta[x].cantidad + "</div>";
    elemento.innerHTML += "</br>";
}



    
    

