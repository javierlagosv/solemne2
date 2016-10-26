var recetas = ["Humitas","Jurel","Empandas"];


var saludo= function(recetas){
for (var i = 0; i < recetas.length; i++) {
  var firstLetter = recetas[i].charAt(0).toLowerCase();
	if ( firstLetter=== 'j') {
    alert("Goodbye "+recetas[i]);
  } else {
    alert("Hello "+ recetas[i]);
  }
}
}

window.setInterval (BlinkIt, 1000);
var color = "black";
function BlinkIt () {
var blink = document.getElementById ("blink");
color = (color == "#ffffff")? "red" : "#ffffff";
blink.style.color = color;
blink.style.fontSize='36px';}

function galPastel () {
	var imagen=document.getElementById("foto1");
	imagen.src="imagenes/pastel.jpg";
}

function galHumitas () {
	var imagen=document.getElementById("foto1");
	imagen.src="imagenes/humitas.jpg";
}
function galJurel () {
	var imagen=document.getElementById("foto1");
	imagen.src="imagenes/jurel.jpg";
}
function galEmpanada() {
	var imagen=document.getElementById("foto1");
	imagen.src="imagenes/empanada.jpg";
}