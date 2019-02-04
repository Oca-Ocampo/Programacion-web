
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39 
};

document.addEventListener("keyup",	dibujarTeclado);
var area = document.getElementById("area_de_dibujo");
var papel = area.getContext("2d");
var x = 150;
var y = 150;


function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo){
	lienzo.beginPath();
	lienzo.lineWith = 2;
	lienzo.strokeStyle = color;
	lienzo.moveTo(x_inicial, y_inicial);
	lienzo.lineTo(x_final, y_final);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento){
	
	var colorcito = "blue";
	var mov = 10;

	if(evento.keyCode == teclas.UP){
		dibujarLinea(colorcito, x, y, x, y - mov, papel);
		y = y - mov;
	}

	if(evento.keyCode == teclas.DOWN){
		dibujarLinea(colorcito, x, y, x, y + mov, papel);	
		y = y + mov;
	}

	if(evento.keyCode == teclas.LEFT){
		dibujarLinea(colorcito, x, y, x - mov, y, papel);
		x = x - mov;
	}
	if(evento.keyCode == teclas.RIGHT){
		dibujarLinea(colorcito, x, y, x + mov, y, papel);
		x = x + mov;
	}

}