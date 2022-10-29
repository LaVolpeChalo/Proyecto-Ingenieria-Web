import data from "./datos.json" assert {type: 'json'}

let producto = document.getElementById('CuerpoArriba');

//data.forEach(element => {
producto.innerHTML += "<div>" + data[0].nombreProducto +"</div>";
producto.innerHTML += "<div>" + data[0].cantidad +"</div>";
    
    
//})