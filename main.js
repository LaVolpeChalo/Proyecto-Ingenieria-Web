import data from "./datos.json" assert {type: 'json'}

let cuerpo_arriba = document.getElementById('CuerpoArriba');

//Cantidad de cuerpo arriba
cuerpo_arriba.innerHTML += "<div>" + data[0].nombreProducto +"</div>";
cuerpo_arriba.innerHTML += "<div>" + data[0].cantidad +"</div>";
    
    
//cantidad de cuerpo abajo
let cuerpo_abajo = document.getElementById('CuerpoAbajo');

cuerpo_abajo.innerHTML += "<div>" + data[1].nombreProducto +"</div>";
cuerpo_abajo.innerHTML += "<div>" + data[1].cantidad +"</div>";

//cantidad de zapatos
let zapatos = document.getElementById('Zapatos');

zapatos.innerHTML += "<div>" + data[2].nombreProducto +"</div>";
zapatos.innerHTML += "<div>" + data[2].cantidad +"</div>";