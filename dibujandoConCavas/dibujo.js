var d = document.getElementById("dibujito") ;
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, yf;
var pi = 3.14;



while(l < lineas){
	yi = 10 * l;
	xf = 10 * (l +1);

	dibujarLinea("#000", 0, yi, xf, 300);
	l = l + 1;
}

dibujarLinea("#000", 1, 1, 1, 299);
dibujarLinea("#000", 1, 299, 299, 299);

for(l= 0; l < lineas ; l++){
	yi = 300 - (10 * l);
	xf = 300 - (10 * (l + 1));
	dibujarLinea("#000", 300, yi, xf, 0);

}


dibujarLinea("#AAF", 1, 1, 300, 1);
dibujarLinea("#AAF", 299, 1, 299, 299);

for(l = 0; l < 300; l++){
	
	dibujarLinea("#000", 150, 150, xf, yf);
}


function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(x_inicial, y_inicial);
	lienzo.lineTo(x_final, y_final);
	lienzo.stroke();
	lienzo.closePath();
}