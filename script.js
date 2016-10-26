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

