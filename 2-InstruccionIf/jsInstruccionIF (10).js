function mostrar()
{//Genero el número RANDOM entre 1 y 10 
	var numero;
	var maximo = 10;
	var minimo = 1;
	numero = Math.floor(Math.random()*((maximo + 1) - minimo) + minimo);
	alert(numero);

	if (numero >= 9) {
		alert("Excelente");
	} else if (numero >= 4 && numero <= 8) {
		alert("Aprobó");
	} else {
		alert("Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN
