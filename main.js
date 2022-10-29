import data from "./datos.json" assert {type: 'json'}

let producto = document.getElementById('CuerpoArriba');

data.forEach(element => {
    producto.innerHTML += "<div>" + element.nombreProducto + element.cantidad+"</div>";
    
    
})