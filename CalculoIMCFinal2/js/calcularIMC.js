function calcularIMC() {
    var altura = document.getElementById("altura").value;
	var peso = document.getElementById("peso").value;
	var imc = peso/(altura*altura);
	var imcArredondado = parseFloat(imc.toFixed(1));
	var tipo = null;
	if(imc<=18.5){
		tipo = "IMC baixo (<18.5)"
	}
	else if(imc>18.5 && imc<=25){
		tipo = "IMC normal (18.5 a 25.0)"
	}
	else if(imc>25 && imc<=30){
		tipo = "IMC sobrePeso (25.0 a 30.0)"
	}
	else{
		tipo = "IMC Obeso (>30.0)"
	}
	document.getElementById("resultado").innerHTML = imcArredondado+"   --->   "+tipo;
}